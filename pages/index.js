import Head from 'next/head'
import Link from 'next/link'
import EventCard from '../components/EventCard'
import BlogPostCard from '../components/BlogPostCard'
import {getSortedPostsData, getSortedEventsData} from '../lib/markdownToHtml'

export default function Home({allPostsData, allEventsData}) {
  const topPost = allPostsData[0]
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
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
      <main className="flex flex-col items-center justify-center w-full flex-1 px-6 mb-6 text-center divide-y  divide-solid">
        <div className="mt-4 mb-2">
          <h1 className="text-6xl font-bold ">
            Dayton Local Music
          </h1>
        </div>
        <div >
          <BlogPostCard display="featured" {...topPost}/>
        </div>
        <div className="w-full">
          <h2 className="mt-4 text-4xl font-bold">Featured Events</h2>
        </div>
        <div >
          <h2 className="mt-4 text-4xl font-bold">
            <Link href={'/blog'}>
              <a>Blog</a>
            </Link>
          </h2>
          <div className="divide-y  divide-solid">
            {allPostsData.slice(1,4).map((post)=>
              <BlogPostCard key={post.id} {...post} />
            )}
          </div>
        </div>
        <div className="w-full">
          <h2 className="mt-4  text-4xl font-bold">Events </h2>
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <Link href={'/'}>
          <a className="flex items-center justify-center">
           Dayton Local Music
         </a>
        </Link>
       </footer>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const allEventsData = getSortedEventsData(4)

  return {
    props: {
      allPostsData,
      allEventsData
    }
  }
}
