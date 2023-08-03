import '@/styles/globals.css'
import { Roboto, Oxygen } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '700'], variable: '--font-roboto' })
const oxygen = Oxygen({ subsets: ['latin-ext'], weight: ['300', '700'], variable: '--font-oxygen' })
export const metadata = {
  title: 'MCABEE',
  description: 'McAbee Tech',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${oxygen.variable}`}>
        <Navbar />
        <main className='app'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
