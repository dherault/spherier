import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import CssBaseline from '@mui/material/CssBaseline'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'

import theme from '~/src/theme'

export const metadata: Metadata = {
  title: 'Spherier',
  description: 'A beings database',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="initial-scale=1, width=device-width"
      />
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
