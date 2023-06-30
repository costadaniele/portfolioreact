import Image from 'next/image'
import { Header } from './components/header/header'
import './styles/home.scss'
import { Experience } from './components/experience/experience'

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <Experience />
      <div className="infos">
        <h3>Languages</h3>
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
            /> EN - Intermediary</span>
        </div>
        <h3>Education</h3>
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
    </main >
  )
}
