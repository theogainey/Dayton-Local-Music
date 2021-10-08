
export default function ShareModal({share, setShare}){

  return(
    <div id="sharemodal" className={`${share?("visible fixed inset-0 h-full w-full flex flex-col items-center justify-center z-10"):("invisible h-0")}`}>
      <div className={`${share?(" h-4/6	 w-4/6 	flex flex-col items-center justify-center shadow mh-1/3 p-6 pt-2 mt-6 text-center bg-gray-100  border rounded-xl z-10"):("invisible h-0")}`}>
        <div className=""
          onClick={()=>setShare(!share)}>
          <svg height="24" width="24" viewBox={"0 0 24 24"}>
            <path d= "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-1" >Share This Event</h3>
        <p>Share Preview</p>
        <div className="flex flex-row items-center justify-center w-full " >
        <svg height="24" width="24" viewBox={"0 0 24 24"} fill={"#616161"}>
          <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"/>
        </svg>
          <svg height="24" width="24" viewBox={"0 0 24 24"} fill={"#616161"}>
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
          </svg>
          <button>Copy Link </button>
        </div>
      </div>
    </div>
  )
}
