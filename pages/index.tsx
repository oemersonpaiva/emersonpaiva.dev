import { BioResume } from 'components/BioResume'
import { BlogList } from 'components/BlogList'
import { Layout } from 'components/Layout'
import { HomePage } from 'components/Pages/HomePage'
import { getAllPosts } from 'lib/api'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = ({ allPosts }) => {
  return (
    <div>
      <Head>
        <title>Home | Emerson Paiva</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <HomePage>
          <BioResume />
          <BlogList posts={allPosts} />
        </HomePage>
      </Layout>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'thumbnail'])

  return {
    props: { allPosts },
  }
}

export default Home
