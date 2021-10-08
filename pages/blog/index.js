import Head from 'next/head'
import Link from 'next/link'
import {getSortedPostsData} from '../../lib/markdownToHtml'
import BlogPostCard from '../../components/BlogPostCard'

export default function Blog({allPostsData}){
  const topPost = allPostsData[0]

  return(
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Dayton Local Music - Blog</title>
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-6 mb-6 text-center divide-y  divide-solid">
        <div className="mt-4 mb-2">
          <h1 className="text-6xl font-bold ">
            Blog
          </h1>
        </div>
        <div >
          <BlogPostCard display="featured" {...topPost}/>
        </div>
        <div >
          <div className="divide-y  divide-solid">
            {allPostsData.slice(1).map((post)=>
              <BlogPostCard key={post.id} {...post} />
            )}
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <Link href={'/'}>
          <a
            className="flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
           Dayton Local Music
         </a>
        </Link>
       </footer>
    </div>
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
