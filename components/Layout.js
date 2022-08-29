import Navbar from './Navbar'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Nikhil-Portfolio</title>
        <meta name="description" content="Welcome to my portfolio!" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex flex-col min-h-screen justify-between">
        <Navbar />
        <main className="container m-auto mt-4 px-4">{children}</main>
      </div>
    </>
  )
}