import Image from 'next/image'
import "./information.scss"
import { SectionTitle } from '../sectionTitle/section-title'

export function Info() {
    return (
        <div className="infos">

            <SectionTitle text="Languages" />
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
            <SectionTitle text="Education" />
            <div className="education-info">
                <span>🎓 Visual Arts Bachelors Degree - Universidade Federal do Recôncavo da Bahia </span>
                <span>🎓 Internet Systems Technologist - Fatec Rubens Lara da Baixada Santista</span>
            </div>
        </div>
    )
}