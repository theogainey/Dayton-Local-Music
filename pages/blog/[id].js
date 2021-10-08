import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {getPostsAdjacent, getAllPostIds, getPostData } from '../../lib/markdownToHtml'
import { parseISO, format } from 'date-fns'

export default function BlogPost({postData, adjacentPosts}){
  const date = parseISO(postData.date)

  return(
    <div className="text-center w-full">
      <Head>
        <title>{postData.title}</title>
        <link rel="canonical" href={`https://www.daytonlocalmusic.com/blog/${postData.id}`} key="canonical"/>
        <meta name="description" content={`${postData.summary}`}/>
        <meta property="og:title" content={`${postData.title}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.daytonlocalmusic.com/blog/${postData.id}`} />
        <meta property="og:description" content={`${postData.summary}`}/>
        {postData.image &&(<meta property="og:image" content={`https://www.daytonlocalmusic.com/${postData.image}`} />)}
        {postData.image &&(<meta property="twitter:image" content={`https://www.daytonlocalmusic.com/${postData.image}`} />)}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:title" content={`${postData.title}`} />
        <meta property="twitter:description" content={`${postData.summary}`}/>
        <meta property="twitter:creator:id" content={`${postData.authorTwitter}`}/>
      </Head>
      <h1 className="text-xl px-8 font-bold mt-2">{postData.title}</h1>
      {postData.img &&(<div className="w-full max-h-1/3 px-8">
        <Image
          alt={postData.imgAlt}
          src={`/${postData.img}`}
          priority
          layout="responsive"
          objectFit="cover"
          height={400}
          width={400}
        />
      </div>
    )}
    <p className="text-left  px-8"><a >{`By ${postData.author} `}</a></p>
    <div className="px-8 mt-0 flex flex-row items-center justify-start w-full">
      <time dateTime={postData.date}>{format(date, 'LLLL d, yyyy')}</time>
    </div>


      <article
        className="postContent"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      <div className="w-full px-8 flex flex-row items-center justify-between	">
        {adjacentPosts[0] && (<Link href={`/blog/${adjacentPosts[0]}`}><a className="justify-self-start">&larr; previous post</a></Link>)}
        {adjacentPosts[1] && (<Link href={`/blog/${adjacentPosts[1]}`}><a className="justify-self-end	">next post &rarr;</a></Link>)}
      </div>
      <div className="w-full mb-4 flex flex-row items-center justify-center">
        <a target="_blank" className="p-4">
          <svg height="30" width="30" viewBox={"0 0 24 24"} fill={"#616161"}>
            <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"/>
          </svg>
        </a>
        <a target="_blank" className="p-4" href={`https://twitter.com/intent/tweet?url=https://www.daytonlocalmusic.com/blog/${postData.id}`}>
          <svg height="30" width="30" viewBox={"0 0 24 24"} fill={"#616161"}>
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
          </svg>
        </a>
      </div>
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


export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  const adjacentPosts = await getPostsAdjacent(params.id)
  return {
    props: {
      postData,
      adjacentPosts
    }
  }
}
