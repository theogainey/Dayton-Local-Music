import { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import {getSortedPostsData} from '../../lib/markdownToHtml'
import Layout from '../../components/Layout'
import BlogPostCard from '../../components/BlogPostCard'
import EmailForm from '../../components/EmailForm'

export default function Blog({allPostsData}){
  const [searchValue, setSearchValue] = useState('')
  const filterPosts = allPostsData.slice(1).filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    )
  return(
    <Layout>
      <Head>
        <title>Blog-Dayton Local Music</title>
      </Head>
      <h1 className="mt-4 mb-2 text-6xl font-bold ">Blog</h1>
      <div>
        <BlogPostCard display="featured" {...allPostsData[0]}/>
      </div>
      <EmailForm/>
      <div className="w-full my-2">
        <input
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles"
          className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md  focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div >
        <div className="divide-y  divide-solid">
          {filterPosts.map((post)=>
            <BlogPostCard key={post.id} {...post} />
          )}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    }
  }
}
