import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import { SubscriberProvider} from '../lib/subscribers'

function MyApp({ Component, pageProps }) {

  return(
      <SubscriberProvider >
        <Component {...pageProps}/>
      </SubscriberProvider>
      )
}

export default MyApp
