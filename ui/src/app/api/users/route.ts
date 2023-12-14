import { NextRequest, NextResponse } from 'next/server'

const memoryUsers = [{ id: 1, name: 'First User' }]
export async function GET() {
  return NextResponse.json(memoryUsers)
}

export async function POST(request: NextRequest) {
  try {
    const user = await request.json()
    memoryUsers.push(user)
    return NextResponse.json(memoryUsers)
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Generic error' }, { status: 500 })
  }
}
