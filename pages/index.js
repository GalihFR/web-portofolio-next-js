import Head from 'next/head';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      
      <section className="hero">
        <div className="container">
          <div className="txt-wrapper">
            <h4 className="title">Hello, I'm Galih F. R.</h4>
            <h2 className="title-job">Frontend Developer & UI/UX Designer Enthusiast.</h2>
            <p className="description">
              I'm a Frontend Developer and UI/UX enthusiast for more than 2 years. I've worked for a Indonesian Company as Frontend Developer for 2 years. In my spare time i like to explore about UI/UX Design.
            </p>
            <div className="txt-contact">
              <button className="btn-action">Email Me</button>
              <div className="social-media">
                <img src="/linkedin-outline.svg"/>
                <img src="/instagram.svg"/>
              </div>
            </div>
          </div>

          <div className="image-wrapper">
            <img src="/hero.svg" alt="my-hero" className="my-hero"/>
          </div>
        </div>
      </section>

      <section className="tools-skills">
              <div className="container">
                <div className="tools-wrapper">
                  <h4 className="title">Tools & Skills</h4>
                  <ul className="tools-image-wrapper">
                    <li><img src="/logo-figma.svg" className="image-item"/></li>
                    <li><img src="/logo-photoshop.svg" className="image-item"/></li>
                    <li><img src="/logo-html.svg" className="image-item"/></li>
                    <li><img src="/logo-sass.svg" className="image-item"/></li>
                    <li><img src="/logo-js.svg" className="image-item"/></li>
                  </ul>
                </div>
              </div>
      </section>
    </>
  )
}

export default Home;