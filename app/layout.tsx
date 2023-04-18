import './globals.css'
import Nav from './components/Nav'
import {getServerSession} from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  //Fetching the User
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" data-theme="light">
      <body className='mx-5 sm:mx-10 lg:mx-[20rem]'>
        <Nav user={session?.user} expires={session?.expires as string} />
        {children}
      
      </body>
    </html>
  )
}
