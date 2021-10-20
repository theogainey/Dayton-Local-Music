import {useRef} from 'react';
import {useSubscriber} from '../lib/subscribers'

export default function EmailForm(){
  const [state, dispatch] = useSubscriber()
  const formRef = useRef(null);

  return(
    <>
    {(state.subscribed==='subscribed') &&(
      <div className="py-2 my-2"/>
    )}
    {(state.subscribed==='new') &&(
      <div className="w-full py-2 my-2 flex flex-col items-center justify-center">
        <h3 className=" text-xl font-bold">Thank You!</h3>
        <p className="text-center py-2">Be sure to check your inbox to confirm your subscription</p>
        <button
          className=" flex items-center justify-center   px-4 py-1 font-medium h-auto bg-gray-100 text-gray-900 rounded w-28"
          type="button"
          onClick={()=> dispatch({type: 'subscribed'})}>
          Dismiss
        </button>
      </div>
    )}
    {(state.subscribed==='false') &&(
    <div className="w-full py-2 my-2">
      <h3 className=" text-xl font-bold">Never Miss Another Post!</h3>
      <p className="text-left py-2">Sign up to receive Dayton Local Music's free newsletter, which includes updates on all the latest music news and upcoming events in Dayton, Ohio.</p>
      <form className="relative my-4 shadow" onSubmit={(e)=>{e.preventDefault(); dispatch({type: 'signUp', payload: formRef.current.value});}}>
        <input
          ref={formRef}
          placeholder="email@address.com"
          type="email"
          autoComplete="email"
          required
          className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white  text-gray-900 "
          />
        <button
          className=" flex items-center justify-center absolute right-1 top-1 px-4 pt-1 font-medium h-8 bg-gray-100 text-gray-900 rounded w-28"
          type="onSubmit"
          >
          Subscribe
        </button>
      </form>
    </div>
  )}
</>
  )
}
