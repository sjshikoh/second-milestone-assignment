import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";


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
                    <section className="about-us">
                        <div className="container">
                            <div className="content">
                                <h1 className="about-us__header">About Karachi Real Estate</h1>
                                <div className="about-us__text">
                                    <p>
                                        Welcome to Karachi Real Estate, your trusted partner in finding the
                                        perfect property in the bustling city of Karachi. Whether you’re
                                        looking for your dream home, a commercial space, or a rental
                                        property, we offer a wide range of options tailored to meet your
                                        needs.
                                    </p>
                                    <p>
                                        Our team of experienced professionals is dedicated to providing
                                        personalized service and expert guidance throughout the entire real
                                        estate journey. We believe in transparency, integrity, and
                                        delivering exceptional results for our clients.
                                    </p>
                                    <p>
                                        With years of experience in the Karachi real estate market, we have
                                        built strong relationships with developers, property owners, and
                                        investors, ensuring that you get the best deals in the city.
                                    </p>
                                    <p>
                                        Let us help you navigate the Karachi property market with confidence
                                        and ease.
                                    </p>
                                </div>
                                <div className="about-us__image__container">
                                    <Image
                                        className="about-us__image"
                                        src="/assets/heroimage.jpg"
                                        alt="Karachi Real Estate Image"
                                        fill
                                    />
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

        </>
    )
}