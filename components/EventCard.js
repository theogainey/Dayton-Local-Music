import Image from 'next/image'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'

export default function EventCard({id, img, imgAlt, display, date, name, location}){
  const eventDate = parseISO(date)
  return(
    <>
    {(display==='featured')? (
      <div className="w-1/2 h-full	">
        <Link href={`/events/${id}`}>
          <a>
            <div className="w-full p-2  text-center flex flex-col items-center justify-between">
              <div className="w-full">
                  <Image
                    alt={`${imgAlt}`}
                    src={`/${img}`}
                    layout="responsive"
                    objectFit="contain"
                    height={100}
                    width={100}
                  />
              </div>
              <div className="w-full text-center">
                <h2 className="text-base font-bold">{name}</h2>
                  <p>{location}</p>
                  <time dateTime={date}>{format(eventDate, 'LLLL d, yyyy')}</time>
              </div>
            </div>
          </a>
        </Link>
      </div>
    ):(
    <div>
      <Link href={`/events/${id}`}>
        <a>
          <div className="w-full mh-1/3 p-2  text-center flex flex-row items-center justify-start">
            <div className="w-1/3 pr-1">
                <Image
                  alt={`${imgAlt}`}
                  src={`/${img}`}
                  layout="responsive"
                  objectFit="contain"
                  height={100}
                  width={100}
                />
            </div>
            <div className="pl-2 w-2/3 text-left">
              <h2 className="text-base font-bold">{name}</h2>
              <div className="w-full flex flex-row items-center justify-between text-sm">
                <p>{location}</p>
                <time dateTime={date}>{format(eventDate, 'LLLL d, yyyy')}</time>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )}
  </>
  )
}
