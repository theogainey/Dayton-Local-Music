import {useState} from 'react';

export default function EmailForm(){
  const [email, setEmail] = useState('')
  async function signUp(){
    await fetch(`/api/newsletter?email=${email}`, {
      method: 'PUT',})
  }
  return(
    <div className="w-full py-2 my-2">
      <h3 className=" text-xl font-bold">Never Miss Another Post!</h3>
      <p className="text-left py-2">Sign up to receive Dayton Local Music's free newsletter, which includes updates on all the latest music news and upcoming events in Dayton, Ohio.</p>
      <form className="relative my-4 shadow" >
        <input
          placeholder="email@address.com"
          type="email"
          autoComplete="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white  text-gray-900 "
          />
        <button
          className=" flex items-center justify-center absolute right-1 top-1 px-4 pt-1 font-medium h-8 bg-gray-100 text-gray-900 rounded w-28"
          type="button"
          onClick={()=>signUp()}
          >
          Subscribe
        </button>
      </form>

    </div>
  )
}
