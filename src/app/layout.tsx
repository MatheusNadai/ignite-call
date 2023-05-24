/* eslint-disable @next/next/no-page-custom-font */
'use client'
import React from 'react'
import Head from 'next/head'
import { globalStyles } from './styles/global'
import { getCssText } from '@ignite-ui/react'
import { SessionProvider } from 'next-auth/react'

globalStyles()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
