import React from "react";
import './styles/main.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from './Components/Navigation/Navigation'
import Menu from './Components/Menu/Menu';
import ProgressBar from './Components/ProgressBar/ProgressBar';
import { GlobalProvider } from './utils/globalContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nam Portfolio',
  description: 'I try my best!',
}

//context and reread



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  

  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          <ProgressBar/>
          <Navigation/>
          <Menu />
          {children}
        </GlobalProvider>
        </body>
    </html>
  )
}
