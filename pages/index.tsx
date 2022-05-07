import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import pigPic from '../public/assets/sample.jpeg'
import backyard from '../public/assets/accord-fall-172.jpg'
import accordSring209 from '../public/assets/accord-spring-209.jpg'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main} >
        <div className={styles.article} >
          <div className={styles.home_cover}><Image alt="Catskills" src={accordSring209} layout="fill" objectFit='cover' /></div>
          <div className={styles.home_cover_overlay}><h2 id="title" >
            bone hollow is a boutique development company located in Ulster County
          </h2>
          </div>
          <section className="flexRow" id="para1">
            <div className="flexRow">
              <p id="para1Text">
                each home is designed and built with the surroundings taking the
                lead role
              </p>
            </div>
          </section>
          <div id="para2">
            <p>the result is a rendezvous of rural tranquility and custom design</p>
          </div>
          <div id="para3">
            <p>
              we love living in the Hudson Valley and want to help maintain its
              special rural community<br />
              there's something about this place that sparks creativity and
              innovation
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
