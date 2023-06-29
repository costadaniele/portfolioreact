import Image from 'next/image'
import { Header } from './components/header/header'

export default function Home() {
  return (
    <main className='container'>
        <Header />
        <div className="experience">
          <h3>Experience</h3>
          <p>2 years working as QA, in company Timepix, 10 years in the group SONatório.</p>
          <div className="experience-time">

          </div>
          <div className="infos">
            <h4>Languages</h4>
            <div className="languages-info">
              <span>
                <Image src="/br.svg"
                  alt="Brasil Logo"
                  width={100}
                  height={24}
                />
                PT-BR - Native Speaker </span>
              <span>
                <Image src="/us.svg"
                  alt="USA Logo"
                  width={100}
                  height={24}
                /> EN - Intermediary 🇺🇸</span>
            </div>
            <h4>Education</h4>
            <div className="education-info"></div>
            <span>🎓</span>
            <span>Visual Arts Bachelors Degree - Universidade Federal do Recôncavo da Bahia </span>
            <span>🎓</span>
            <span>Internet Systems Technologist - Fatec Rubens Lara da Baixada Santista</span>
          </div>
          <div className="infos"></div>
          <div className="buttons">
            <div className="social"></div>
            <button>contact me</button>
          </div>
        </div>
      


    </main>
  )
}
