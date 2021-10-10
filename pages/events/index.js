import Head from 'next/head'
import {getSortedEventsData} from '../../lib/markdownToHtml'
import Layout from '../../components/Layout'
import EventCard from '../../components/EventCard'

export default function Events({allEventsData}){
  return(
    <Layout>
      <Head>
        <title>Dayton Local Music - Events</title>
      </Head>
      <div className="mt-4 mb-2">
        <h1 className="text-6xl font-bold ">Events</h1>
      </div>
      <div>
        <div className="divide-y  divide-solid">
          {allEventsData.map((evt)=>
            <EventCard key={evt.id} {...evt} />
          )}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allEventsData = getSortedEventsData()

  return {
    props: {
      allEventsData,
    }
  }
}
