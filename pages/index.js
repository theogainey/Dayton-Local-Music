import { useState } from 'react';
import {getSortedPostsData, getSortedEventsData} from '../lib/markdownToHtml'
import {useFeatures} from '../lib/featuretoggle'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import EventCard from '../components/EventCard'
import BlogPostCard from '../components/BlogPostCard'
import EmailForm from '../components/EmailForm'

export default function Home({allPostsData, allEventsData}) {
  const [state, dispatch] = useFeatures()
  const [postIndex, setPostIndex] = useState(5)

  return (
    <Layout>
      <Head>
        <title>Dayton Local Music</title>
        <link rel="canonical" href="https://dayton-local-music.vercel.app" key="canonical"/>
        <meta name="description" content="Your guide to Dayton Ohio's independent music scene"/>
        <meta property="og:title" content="Dayton Local Music" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dayton-local-music.vercel.app" />
        <meta property="og:description" content="Your guide to Dayton Ohio's independent music scene"/>
        <meta property="og:image" content="https://dayton-local-music.vercel.app/images/DaytonLocalMusic.PNG"/>
        <meta property="twitter:image" content="https://dayton-local-music.vercel.app/images/DaytonLocalMusic.PNG"/>)}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:title" content="Dayton Local Music"  />
        <meta property="twitter:description"content="Your guide to Dayton Ohio's independent music scene"/>
      </Head>
      <BlogPostCard display="featured" {...allPostsData[0]}/>
      <div >
        <h2 className="mt-4 mb-2 text-4xl font-bold">Latest Posts</h2>
        <div className="divide-y divide-solid">
          {allPostsData.slice(1, postIndex).map((post)=>
            <BlogPostCard key={post.id} {...post} />
          )}
        </div>
        <a onClick={()=>setPostIndex(postIndex+5)}>
          <p className="text-lg font-bold text-center underline	my-2">LOAD MORE POSTS</p>
        </a>
      </div>
      {(state.userAuthentication==='true') &&(<EmailForm/>)}
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const allEventsData = getSortedEventsData()

  return {
    props: {
      allPostsData,
      allEventsData
    }
  }
}
