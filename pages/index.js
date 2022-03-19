import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Meghan Larsen</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='keywords' content='Meg, Meghan, Megan, Meghan Larsen, Larsen, Creative, Meghan Larson, Larson, Director of Results, Media and More, Social Media Expert'/>
      </Head>

      <main>
        <Header title="Meghan Larsen" />
        <div className={"row"}>
          <ul>
            <li>
              <a href={"ShaftChallenge"}>bow and arrow</a>
            </li>
            <li>
              <a href={"BottleChallenge"}>potions</a>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  )
}
