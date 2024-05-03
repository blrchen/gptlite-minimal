import Head from 'next/head'
import '@/styles/globals.css'
import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@/Contexts/ThemeContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,height=device-height,inital-scale=1.0,maximum-scale=1.0,user-scalable=no"
        />
        <head>
          <script
            src="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai/genai_bundle.cjs"
            crossOrigin="anonymous"
          ></script>
        </head>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
