import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import { UserProvider } from '@auth0/nextjs-auth0';
import {FeatureProvider} from '../lib/featuretoggle'
function MyApp({ Component, pageProps }) {

  return(
    <FeatureProvider>
      <UserProvider>
          <Component {...pageProps}/>
      </UserProvider>
      </FeatureProvider>
    )
}

export default MyApp
