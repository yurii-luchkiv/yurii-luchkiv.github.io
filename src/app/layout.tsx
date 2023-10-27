import Navigation from '@/src/components/Navigation/Navigation'
import Footer from '@/src/components/Footer/Footer'
import LocalFont from 'next/font/local'
import '@/src/app/global.css'

const graphik = LocalFont({
  src: [
    {
      path: '../../public/assets/fonts/GraphikLight.otf',
      weight: '200',
      style: 'lighter',
    },
    {
      path: '../../public/assets/fonts/GraphikRegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/GraphikMedium.otf',
      weight: '600',
      style: 'bold',
    },
  ],
  variable: '--font-graphik',
  display: 'swap',
});

export const generateMetadata = () => {
  return { title: 'Yurii Luchkiv' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <header className={ graphik.className }>
          <Navigation />
        </header>
        <main className={ graphik.className }>{ children }</main>
        <footer className={ graphik.className }>
          <Footer />
        </footer>
      </body>
    </html>
  )
}