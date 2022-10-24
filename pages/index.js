import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeComponent from "../components/HomeComponent/Home"
import MenuComponent from "../components/MenuComponent/MenuComponents"
import bgImage from "../public/bg.png"

export default function Home() {

  const myLoader = ({ src, width, quality }) => {
    return <>Loading..</>
  }

  return (
    <div>
      <Head>
        <title>Gladeye Burger Menu Dev Test</title>
        <meta name="description" content="Gladeye Burger Menu Dev Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainStyle}>
        <div className={styles.mainWrapper}>
          <div className={styles.contentWrapper}>
            <Image
              src="/bg.png"
              alt="Picture"
              layout="fill"
              className="image"
            />
            <div className={styles.contentDisplay}>
              <MenuComponent>
                <HomeComponent />
              </MenuComponent>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        a
      </footer>
    </div>
  );
}
