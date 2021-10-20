import { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import {getPersonData, getAllPeopleIds} from '../../lib/markdownToHtml'
import Layout from '../../components/Layout'
import BlogPostCard from '../../components/BlogPostCard'
import EmailForm from '../../components/EmailForm'
import {useFeatures} from '../../lib/featuretoggle'

export default function Person({personData: {name, allPostsData}}){
  const [state, dispatch] = useFeatures()
  const [searchValue, setSearchValue] = useState('')
  const [postIndex, setPostIndex] = useState(0)
  const filterPosts = allPostsData.filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    )

  return(
    <Layout>
      <Head>
        <title>{name}</title>
      </Head>
      <h1 className="mt-4 mb-2 text-4xl font-bold ">{name}</h1>
      <BlogPostCard display="featured" {...allPostsData[0]}/>
      <div>
        <div className="w-full my-2">
          <input
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md  focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="divide-y  divide-solid">
          {filterPosts.map((post)=>
            <BlogPostCard key={post.id} {...post} />
          )}
        </div>
        <a onClick={()=>setPostIndex(postIndex+1)}>
          <p className="text-lg font-bold text-center underline	my-2">LOAD MORE</p>
        </a>
      </div>
      {(state.userAuthentication==='true') &&(<EmailForm/>)}
    </Layout>
  )
}


export async function getStaticPaths() {
  const paths = getAllPeopleIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const personData = await getPersonData(params.id)
  return {
    props: {
      personData
    }
  }
}
