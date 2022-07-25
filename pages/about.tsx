import type { NextPage } from "next";
import Image from "next/image";
import fall from "../public/assets/accord-fall-172.jpg";
import headshot from "../public/assets/headshot.png";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <div id="empty-div-row"></div>
      <main>
        <div className={styles.container}>
          <section className={styles.section}>
            <article>
              <Image
                alt="fall shot with dark brown pool house in the foreground, shot from the side"
                src={fall}
                width={500}
                height={500}
                objectFit="cover"
              />
            </article>
            <article>
              <h2 id="whoWeAre">who we are</h2>
              <p>
                At Bone Hollow Studio we specialize in curated and welcoming
                homes. Through our partnership with renowned local builder,
                Hudson Valley Homes & Renovations, we offer clean and gracious
                motifs that are thoughtfully sited in a quiet, introspective
                setting.
              </p>
            </article>
            <article>
              <h2 id="ownerHeading">owner</h2>
              <p id="ownerPara1">
                Erika grew up in Berlin, Germany and the American Midwest. A
                graduate of Northwestern University, she has over 15 years of
                experience in producing commercials and special effects for an
                illustrious client base, amongst them Nike, Coca-Cola,
                McDonald's, Chevrolet, and Anheuser Busch. Erika has also worked
                in development and event planning for non-profits, including
                Jersey Battered Women's Service.
                <br />
                Erika's latest work with the New York-based interior designer,
                Amanda Rehbein Studio, has segued into the creation of her
                company, Bone Hollow Studio. With a background in advertising
                production and styling, Erika combines her passion for creative
                design with a natural aptitude for project management. She
                believes one's home should be unique, reflecting a deeply
                personal connection with the land. Erika's goal is to create
                spaces that are at once impactful and livable, timeless and
                comfortable.
              </p>
            </article>
            <article>
              <Image
                alt="headshot"
                src={headshot}
                width={500}
                height={500}
                objectFit="cover"
              />
            </article>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
