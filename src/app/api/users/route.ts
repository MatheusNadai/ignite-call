import { prisma } from '@/lib/prisma'
import type { NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function POST(req: Request, res: NextApiResponse) {
  const { name, username } = await req.json()

  const userExists = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (userExists) {
    return NextResponse.json(
      {
        message: 'Username already taken.',
      },
      {
        status: 400,
      },
    )
  }

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  const cookieExpiresInSeconds = 60 * 60 * 24 * 7

  return NextResponse.json(user, {
    status: 201,
    headers: {
      'Set-Cookie': `@ignitecall:userId=${user.id}; Path=/; max-age=${cookieExpiresInSeconds};`,
    },
  })
}
