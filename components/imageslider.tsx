import Image from "next/image";
import entrance from "../public/assets/181bonehollow/entrance.jpeg";
import front from "../public/assets/181bonehollow/front.jpg";
import hall from "../public/assets/181bonehollow/hall.jpeg";
import mirror from "../public/assets/181bonehollow/mirror.jpg";
import frontDetail from "../public/assets/181bonehollow/frontdetail.jpg";
import Link from "next/link";
import Script from "next/script";

export default function NavBar() {
  return (
    <>
      <Script src="slider.js" strategy="lazyOnload" />

      <div className="column">
        <Image id="featured" src={front}></Image>
        <div id="slide-wrapper">
          <div id="slider">
            <Image
              className="thumbnail active"
              alt="Catskills"
              src={entrance}
              layout="fill"
              objectFit="cover"
            ></Image>
            <Image
              className="thumbnail"
              alt="Catskills"
              src={front}
              layout="fill"
              objectFit="cover"
            ></Image>
            <Image
              className="thumbnail"
              alt="Catskills"
              src={hall}
              layout="fill"
              objectFit="cover"
            ></Image>
            <Image
              className="thumbnail"
              alt="Catskills"
              src={mirror}
              layout="fill"
              objectFit="cover"
            ></Image>
            <Image
              className="thumbnail"
              alt="Catskills"
              src={frontDetail}
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
