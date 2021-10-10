import Link from 'next/link'

export default function Layout({children}){

  return(
    <div className="overflow-hidden	 flex flex-col items-center justify-center min-h-screen">
      <header  className="fixed block shadow-sm inset-0 z-10 bg-white h-16 w-full  border-b">
        <button className="absolute top-4 left-2">
          <svg height="2rem" width="2rem" viewBox={"0 0 24 24"} fill={"#616161"}>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </button>
        <span className="absolute w-full top-4		text-center	">
          <Link href={'/'} >
            <a className="text-2xl font-bold ">DAYTON UNCOVERED</a>
          </Link>
        </span>
      </header>
      <main className="mt-16 py-2 px-6 h-auto w-full mb-6 text-center divide-y  divide-solid">{children}</main>
      <footer className="w-screen	mb-0 mt-auto  bg-gray-100 flex flex-col items-center justify-center h-auto p-4 border-t">
        <div className="w-full flex flex-row items-center justify-center ">
          <a className="px-2">About</a>
          <Link href={'/blog'} ><a className="px-2">Blog</a></Link>
          <a className="px-2">Contact</a>
          <Link href={'/blog'} ><a className="px-2">Events</a></Link>
          <a className="px-2">People</a>
        </div>
        <Link href={'/'}>
          <a >
            &copy; 2021 Dayton Uncovered
          </a>
        </Link>
        <Link href={'/'}>
          <a >
            Built In Dayton, Ohio By Theo Gainey
          </a>
        </Link>
        <div className="w-full flex flex-row items-center justify-center ">
          <a target="_blank" className="p-4" href={`https://www.instagram.com/daytonlocalmusic`}>
            <svg height="30" width="30" viewBox={"0 0 24 24"} fill={"#616161"}>
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
            </svg>
          </a>
          <a target="_blank" className="p-4" href={`https://www.facebook.com/daytonlocalmusic`}>
            <svg height="30" width="30" viewBox={"0 0 24 24"} fill={"#616161"}>
              <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"/>
            </svg>
          </a>
          <a target="_blank" className="p-4" href={`https://twitter.com/DaytonLocalMus`}>
            <svg height="30" width="30" viewBox={"0 0 24 24"} fill={"#616161"}>
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}
