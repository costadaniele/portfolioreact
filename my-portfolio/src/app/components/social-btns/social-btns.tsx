import { GitIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/instagram.icon";
import { LattesIcon } from "../icons/lattes-icon";
import { LinkIcon } from "../icons/linkedin-icon";
import "./social-btns.scss"

export function SocialBtns() {
    return (
        <div className="social">
            <a href="https://github.com/costadaniele"><GitIcon /></a>
            <a href="https://lattes.cnpq.br/7707443644434964"><LattesIcon /></a>
            <a href="https://www.linkedin.com/in/danieledossantoscosta/"><LinkIcon /></a>
            <a href="https://www.instagram.com/oouright"><InstaIcon /></a>
        </div>
    )
}