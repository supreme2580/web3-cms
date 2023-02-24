import Head from 'next/head'
import ContentCreator from '../components/ContentCreator'
import ContentList from '../components/ContentList'
import Navbar from '../components/Navbar'
import Publish from '../components/Publish'

export default function App() {
  return (
    <div>
      <Head>
        <title>OpenContent</title>
        <meta name="description" content="A web3 content management system" />
        <link rel="icon" href="/opencontentlogo.png" />
      </Head>
      <Navbar />
      <div className='fixed flex w-full'>
        <ContentList />
        <div className='w-full h-full max-h-screen overflow-y-scroll'>
          <ContentCreator />
        </div>
      </div>
      <Publish />
    </div>
  )
}
