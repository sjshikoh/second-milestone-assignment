import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
      <>
        <Head>
          <title>Karachi Real Est</title>
          <meta name='description' content='Generated by create next app' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <>
          {/*Nav Bar*/}
          <nav className="nav collapsible">
            <Link href="/">
              <h1 className="nav__heading">KarachiRealEst</h1>
            </Link>
            <svg className="icon icon--white nav__toggler">
              <use xlinkHref="/assets/sprite.svg#menu" />
            </svg>
            <ul className="list nav__list collapsible__content">
              <li className="nav__item">
                <Link href="/aboutus">About Us</Link>
              </li>
              <li className="nav__item">
                <Link href="/ourvision">Our Vision</Link>
              </li>
              <li className="nav__item">
                <Link href="/contactus">Contact Us</Link>
              </li>
            </ul>
          </nav>
          {/*Hero Text*/}
          <section className="hero-element" data-aos="fade-up">
            <div className="hero__container">
              <Image
                  src="/assets/heroimage.jpg"
                  alt="Karachi skyline"
                  className="hero__image"
                  fill
              />
            </div>
            <h1 className="hero__heading" data-aos="zoom-in-down">
              Best Properties in Karachi!
            </h1>
            <h3 className="hero__text">
              Explore the finest properties in Karachi, from luxurious homes to prime
              commercial spaces, tailored to suit your needs and lifestyle.
            </h3>
          </section>
          {/* Callout */}
          <section className="callout" data-aos="fade-right">
            <div className="container">
              <div className="grid grid--1x2 callout-grid">
                <h2 className="callout__heading">
                  What are <span className="text--accent">you</span> waiting for?
                </h2>
                <div className="callout__button-container">
                  <Link href="/contactus">
                    <button className="btn btn--accent callout__button">
                      Get in Touch!
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* Footer */}
          <footer className="footer">
            <p className="footer-text">© KarachiRealEst 2024</p>
          </footer>
        </>
      </>
  )
}