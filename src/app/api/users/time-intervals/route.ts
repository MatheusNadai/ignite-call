import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../../auth/[...nextauth]/route'
import { NextResponse } from 'next/server'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('asasassa', res)
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const session = await getServerSession(buildNextAuthOptions())

  return NextResponse.json({ session })
}
export { handler as POST }
