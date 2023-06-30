import { SectionTitle } from "../sectionTitle/section-title";
import "./experience.scss"

export function Experience() {
    return (
        <div className="experience">
            <SectionTitle text="Experience" />
            <p>2 years working as QA, in company Timepix, 10 years in the group SONatório.</p>
            <div className="experience-time"></div>
        </div>
    )
}