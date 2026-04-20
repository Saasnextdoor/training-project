import { Client, Databases, ID } from 'appwrite'
import { NextRequest, NextResponse } from 'next/server'

// Appwrite config
const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || '')
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '')

const databases = new Databases(client)

// Database and collection IDs - нужно создать в Appwrite
const DATABASE_ID = 'leads_db'
const COLLECTION_ID = 'leads'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, project, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create lead in Appwrite
    const lead = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      {
        name,
        email,
        project: project || 'not specified',
        comments: message,
      }
    )

    return NextResponse.json({ success: true, id: lead.$id })
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json(
      { error: 'Failed to save lead' },
      { status: 500 }
    )
  }
}

// Get all leads (for admin)
export async function GET() {
  try {
    const leads = await databases.listDocuments(DATABASE_ID, COLLECTION_ID)
    return NextResponse.json({ leads: leads.documents })
  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    )
  }
}
