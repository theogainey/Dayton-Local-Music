import Image from 'next/image'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'

export default function BlogPostCard({id, img, imgAlt, display, title, author, date, summary}){
  const postDate = parseISO(date)
  return(
    <div className="h-full flex flex-row items-center justify-center">
    {(display==='featured')? (
      <div className="m-2 w-full max-w-screen-md	">
        <Link href={`/blog/${id}`}>
          <a>
            <div className="w-full mh-1/3  text-center flex flex-col items-center justify-start">
              <div className="w-full ">
                <Image
                  alt={`${imgAlt}`}
                  src={`/${img}`}
                  priority
                  layout="responsive"
                  objectFit="cover"
                  height={100}
                  width={100}
                />
              </div>
              <div className="w-full text-left">
                <h2 className="my-2 text-base text-center font-bold">{title}</h2>
                <p className="my-2 text-base">{summary}</p>
                <div className="w-full flex flex-row items-center justify-between text-sm">
                  <p>{author}</p>
                  <time dateTime={date}>{format(postDate, 'LLLL d, yyyy')}</time>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    ):(
      <div className="w-full max-w-screen-md	">
        <Link href={`/blog/${id}`}>
          <a>
            <div className="w-full mh-1/3 p-2  text-center flex flex-row items-center justify-start">
              <div className="w-1/3 pr-1">
                <Image
                  alt={`${imgAlt}`}
                  src={`/${img}`}
                  layout="responsive"
                  objectFit="fill"
                  height={100}
                  width={100}
                />
              </div>
              <div className="pl-2 w-2/3 text-left">
                <h2 className="text-base font-bold">{title}</h2>
                <p className="h-0 w-0 text-base invisible	sm:h-auto sm:w-auto sm:my-2 sm:visible">{summary}</p>
                <div className="w-full flex flex-row items-center justify-between text-sm">
                  <p>{author}</p>
                  <time dateTime={date}>{format(postDate, 'LLLL d, yyyy')}</time>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    )}
    </div>
  )
}
