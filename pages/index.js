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
  const [searchValue, setSearchValue] = useState('')
  const [postIndex, setPostIndex] = useState(0)
  const filterPosts = allPostsData.filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    )

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
      <div >
        <h2 className="mt-4 mb-2 text-4xl font-bold">Latest Blog Posts</h2>
        <div className="w-full my-2">
          <input
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md  focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="divide-y  divide-solid">
          {filterPosts.slice(1, (6+(postIndex*5))).map((post)=>
            <BlogPostCard key={post.id} {...post} />
          )}
        </div>
        <a onClick={()=>setPostIndex(postIndex+1)}>
          <p className="text-lg font-bold text-center underline	my-2">MORE BLOG POSTS</p>
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
