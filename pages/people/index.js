import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'

export default function People(){

  return(
    <Layout>
      <Head>
        <title>People</title>
      </Head>
      <h1 className="mt-4 mb-2 text-6xl font-bold ">People</h1>
    </Layout>
  )
}
