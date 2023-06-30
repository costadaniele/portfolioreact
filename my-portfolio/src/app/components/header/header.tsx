import Image from 'next/image'
import './header.scss'

export function Header() {
    return (
        <div className="header">
            <div>
                <h1>Hi, I'm Daniele!👋</h1>
                <h2>QA, Visual Artist, Developer</h2>
            </div>
            <Image
                src="/perfil-daniele.png"
                alt="Mulher branca com cabelo cacheados escuros, óculos e sorrindo"
                width={300}
                height={300}
                priority
            />


        </div>
    )
}