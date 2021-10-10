import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import EmailForm from '../../components/EmailForm'
import {getAllEventIds} from '../../lib/markdownToHtml'
import { parseISO, format } from 'date-fns'

export default function EventPage({eventData}){
  const date = parseISO(eventData.date)

  return(
    <Layout >
      <Head>
        <title>{eventData.name}</title>
      </Head>
      <EmailForm/>
    </Layout>
  )
}


export async function getStaticPaths() {
  const paths = getAllEventIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const eventData ={name: 'Test', date:'2021-10-15'};
  return {
    props: {
      eventData
    }
  }
}
