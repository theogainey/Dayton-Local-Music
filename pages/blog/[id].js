import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import EmailForm from '../../components/EmailForm'
import YoutubeEmbed from '../../components/YoutubeEmbed'
import { useState } from 'react';

import {getPostsAdjacent, getAllPostIds, getPostsData } from '../../lib/markdownToHtml'
import { parseISO, format } from 'date-fns'
import { MDXRemote } from 'next-mdx-remote'
import {useFeatures} from '../../lib/featuretoggle'

export default function BlogPost({adjacentPosts, postData:{source, frontMatter, id, authorHref}}){
  const date = parseISO(frontMatter.date)
  const components = {Image, YoutubeEmbed}
  const [state, dispatch] = useFeatures()
  const [comment, setComment] = useState(false)
  const [share, setShare] = useState(false)

  return(
    <Layout  >
      <Head>
        <title>{frontMatter.title}</title>
        <link rel="canonical" href={`https://dayton-local-music.vercel.app/blog/${id}`} key="canonical"/>
        <meta name="description" content={`${frontMatter.summary}`}/>
        <meta property="og:title" content={`${frontMatter.title}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://dayton-local-music.vercel.app/blog/${id}`} />
        <meta property="og:description" content={`${frontMatter.summary}`}/>
        {frontMatter.img &&(<meta property="og:image" content={`https://dayton-local-music.vercel.app/${frontMatter.img}`} />)}
        {frontMatter.img &&(<meta property="twitter:image" content={`https://dayton-local-music.vercel.app/${frontMatter.img}`} />)}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:title" content={`${frontMatter.title}`} />
        <meta property="twitter:description" content={`${frontMatter.summary}`}/>
        {frontMatter.authorTwitter &&(<meta property="twitter:creator:id" content={`${frontMatter.authorTwitter}`}/>)}
      </Head>
      <article className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-screen-md">
        <h1 className="text-xl my-2 font-bold mt-2">{frontMatter.title}</h1>
        {frontMatter.img &&(<div className="w-full max-h-1/3">
          <Image
            alt={frontMatter.imgAlt}
            src={`/${frontMatter.img}`}
            priority
            layout="responsive"
            objectFit="cover"
            height={400}
            width={400}
          />
          </div>
          )}
          <div className="w-full my-2 flex flex-row items-center justify-start">
            <div className="w-auto text-left  flex flex-col items-start justify-center">
              <Link href={`/people/${authorHref}`}>
                <a className="text-blue-500">{`${frontMatter.author} `}</a>
              </Link>
              <div className="mt-0">
                <time dateTime={frontMatter.date}>{format(date, 'LLLL d, yyyy')}</time>
              </div>
            </div>
          </div>

        <main className="postContent">
          <MDXRemote {...source} components={components} />
        </main>
        <div className="w-auto flex flex-row items-center justify-start">
          <button aria-label="Comment Button" className="py-4" onClick={()=>setComment(!comment)}>
            <svg height="48" width="48" viewBox={"0 0 24 24"} fill={"#616161"}>
              <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
          </button>
          <button aria-label="Share Button" className="py-4" type="button" onClick={()=>setShare(!share)}>
            <svg height="48" width="48" viewBox={"0 0 24 24"} fill={"#616161"}>
              <path d="M0 0h24v24H0z" fill="none"/><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
            </svg>
          </button>
        </div>

      <div className="w-full flex flex-row items-center justify-between	">
        {adjacentPosts[0] && (<Link href={`/blog/${adjacentPosts[0]}`}><a className="justify-self-start">&larr; previous post</a></Link>)}
        {adjacentPosts[1] && (<Link href={`/blog/${adjacentPosts[1]}`}><a className="justify-self-end	">next post &rarr;</a></Link>)}
      </div>
      </div>
      </article>
      {(state.userAuthentication==='true') &&(<EmailForm/>)}

    </Layout>
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
  const postData = await getPostsData(params.id)
  const adjacentPosts = await getPostsAdjacent(params.id)

  return {
    props: {
      postData,
      adjacentPosts
    }
  }
}
