import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
import Layout from '@/components/shared/Layout'
import { ApolloProvider } from '@apollo/client'
import apolloClient from '@/services/apollo/client'

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </RecoilRoot>
  )
}
