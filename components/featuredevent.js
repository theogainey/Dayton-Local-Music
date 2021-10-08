import {useState} from 'react';
import Image from 'next/image'
import ShareModal from './sharemodal'

export default function FeaturedEvent(){
  const [share, setShare] = useState(false);
  return(
    <>
    <div className="w-full mh-1/3 p-6 pt-2 mt-6 text-center ">
      <Image
        alt="dpf"
        src="/images/dpf.png"
        priority
        layout="responsive"
        objectFit="contain"
        height={400}
        width={400}
      />
      <h3 className="text-2xl font-bold mb-1" >Dayton PorchFest</h3>
      <div className="flex flex-row items-center justify-between w-full " >
        <div className="flex flex-col items-start justify-center">
          <p className="mt-2 text-xl">
            Aug 24th
          </p>
          <p className="mt-2 text-xl">
            1:30 pm
          </p>
        </div>
        <div className="flex flex-col items-end	 justify-center">
          <button className="mt-2 w-24 py-1 px-5 text-xl text-white rounded	bg-blue-500	shadow">
            Details
          </button>
          <button className="mt-2 w-24 py-1 px-5 text-xl text-white rounded	bg-red-500	shadow"
            onClick={()=>setShare(!share)}>
            Share
          </button>
        </div>
      </div>
    </div>
    <ShareModal share={share} setShare={setShare}/>
    </>
  )
}
