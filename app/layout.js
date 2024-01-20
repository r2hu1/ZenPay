import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/utils/theme-provider"
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from 'sonner'
import NextTopLoader from 'nextjs-toploader'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
  title: {
    default: 'ZenPay',
    template: '%s | ZenPay',
  },
  description: 'An frictional currency powered and built by javascript.',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader
              color="#2563eb"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 0px #2563eb,0 0 0px #2563eb"
              template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
              zIndex={1600}
              showAtBottom={false}
            />
            <Toaster position='bottom-left' duration={2000}/>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
