import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import headshot from '../public/assets/headshot.png'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <article className={styles.article} >
        <div id="para1">
          <h2 id="whoWeAre">who we are</h2>
          <p>
            At Bone Hollow Studio we specialize in curated and welcoming homes.
            Through our partnership with renowned local builder, Hudson Valley
            Homes & Renovations, we offer clean and gracious motifs that are
            thoughtfully sited in a quiet, introspective setting.
          </p>
        </div>
        <h2 id="owner">owner</h2>
        <section className="flexRow">
          <div className="flexRow">
            <p id="para1Text">
              Erika grew up in Berlin, Germany and the American Midwest. A graduate
              of Northwestern University, she has over 15 years of experience in
              producing commercials and special effects for an illustrious client
              base, amongst them Nike, Coca-Cola, McDonald's, Chevrolet, and
              Anheuser Busch. Erika has also worked in development and event
              planning for non-profits, including Jersey Battered Women's
              Service.<br />
              Erika's latest work with the New York-based interior designer, Amanda
              Rehbein Studio, has segued into the creation of her company, Bone
              Hollow Studio. With a background in advertising production and
              styling, Erika combines her passion for creative design with a natural
              aptitude for project management. She believes one's home should be
              unique, reflecting a deeply personal connection with the land. Erika's
              goal is to create spaces that are at once impactful and livable,
              timeless and comfortable.
            </p>
          </div>
          <div className="flexRow"><Image alt='headshot' src={headshot} /></div>
        </section>
        </article>
      </main>
    </div>
  )
}

export default Home
