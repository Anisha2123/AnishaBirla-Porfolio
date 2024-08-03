import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg';
import Leetcode from '../../assets/Leetcode.png';
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      {/* <a href="https://vinayaksingh.in" className="logo"> */}
        <h1>
        <span>www.anisha</span>
        <span>birla.in</span>
        </h1>
      {/* </a> */}
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
      <a
        href="https://www.linkedin.com/in/anishabirla/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
      <a
          href="https://leetcode.com/u/Anishatycon/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Leetcode} alt="LeetCode" />
        </a>
        <a
          href="https://github.com/Anisha2123"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        
        <a
          href="https://alvo.chat/4JcW"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://www.instagram.com/wt.aq_ab/?img_index=1"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
