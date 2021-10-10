import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'

export default function About(){

  return(
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <h1 className="mt-4 mb-2 text-6xl font-bold ">About</h1>
    </Layout>
  )
}
