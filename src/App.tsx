import styles from './App.module.css';

import logo from './assets/logo.svg'
import illustrationMockups from './assets/illustration-mockups.svg'
import instagram from './assets/instagram.png'
import twitter from './assets/twitter.png'
import facebook from './assets/facebook.png'

function App() {

  return (
    <>
      <header>
        <img className={styles.logoImg} src={logo} alt="logo" />
      </header>
      <main className={styles.containerMain}>
        <img src={illustrationMockups} alt="" />
        <section className={styles.containerTexts}>
          <h1>
            Build The Community Your Fans Will Love
          </h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
            Create connections with your users as you engage in genuine discussion. 
          </p>
          <button>
            Register
          </button>
        </section>
      </main>

      <footer className={styles.containerFooter}>
        <a href="https://www.facebook.com/" target='_blank'>
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://twitter.com/" target='_blank'>
          <img src={twitter} alt="twitter" />
        </a>
        <a href="https://www.instagram.com/" target='_blank'>
          <img src={instagram} alt="instagram" />
        </a>
      </footer>
    </>
  )
}

export default App