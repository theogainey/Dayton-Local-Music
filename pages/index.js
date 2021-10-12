import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import EventCard from '../components/EventCard'
import BlogPostCard from '../components/BlogPostCard'
import EmailForm from '../components/EmailForm'
import {getSortedPostsData, getSortedEventsData} from '../lib/markdownToHtml'

export default function Home({allPostsData, allEventsData}) {
  return (
    <Layout >
      <Head>
        <title>Dayton Local Music</title>
        <link rel="canonical" href="https://www.daytonlocalmusic.com" key="canonical"/>
        <meta name="description" content="Your guide to Dayton Ohio's independent music scene"/>
        <meta property="og:title" content="Dayton Local Music" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.daytonlocalmusic.com" />
        <meta property="og:description" content="Your guide to Dayton Ohio's independent music scene"/>
        <meta property="og:image" content="https://www.daytonlocalmusic.com/images/DaytonLocalMusic.PNG"/>
        <meta property="twitter:image" content="https://www.daytonlocalmusic.com/images/DaytonLocalMusic.PNG"/>)}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:title" content="Dayton Local Music"  />
        <meta property="twitter:description"content="Your guide to Dayton Ohio's independent music scene"/>
      </Head>
      <BlogPostCard display="featured" {...allPostsData[0]}/>
      <div>
        <h2 className="mt-4 mb-2 text-4xl font-bold">Featured Events</h2>
        <div className="flex flex-row items-start justify-center">
          {allEventsData.slice(0,2).map((evt)=>
            <EventCard display="featured" key={evt.id} {...evt} />
          )}
        </div>
      </div>
      <div >
        <h2 className="mt-4 mb-2 text-4xl font-bold">Latest Blog Posts</h2>
        <div className="divide-y  divide-solid">
          {allPostsData.slice(1).map((post)=>
            <BlogPostCard key={post.id} {...post} />
          )}
        </div>
        <Link href={'/blog'}>
          <a>
            <p className="text-lg font-bold text-center underline	my-2">MORE BLOG POSTS</p>
          </a>
        </Link>
      </div>
      <div className="w-full">
        <h2 className="mt-4  text-4xl font-bold">Upcoming Events </h2>
        {allEventsData.slice(2).map((evt)=>
          <EventCard  key={evt.id} {...evt} />
        )}
        <Link href={'/events'}>
          <a><p className="text-lg font-bold text-base text-center underline	my-2">MORE EVENTS</p></a>
        </Link>
      </div>
      <EmailForm/>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData(4)
  const allEventsData = getSortedEventsData()

  return {
    props: {
      allPostsData,
      allEventsData
    }
  }
}
