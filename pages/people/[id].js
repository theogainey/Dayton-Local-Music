import Head from 'next/head'
import Link from 'next/link'
import {getPersonData, getAllPeopleIds} from '../../lib/markdownToHtml'
import Layout from '../../components/Layout'
import BlogPostCard from '../../components/BlogPostCard'

export default function Author({personData: {name, allPostsData}}){

  return(
    <Layout>
      <Head>
        <title>{name}</title>
      </Head>
      <h1 className="mt-4 mb-2 text-6xl font-bold ">{name}</h1>
      <BlogPostCard display="featured" {...allPostsData[0]}/>
      <div>
        <div className="divide-y  divide-solid">
          {allPostsData.slice(1).map((post)=>
            <BlogPostCard key={post.id} {...post} />
          )}
        </div>
      </div>
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
