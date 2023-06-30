import { ConfImages, ConfSpan } from "../conf-images/conf-images";
import { SectionTitle } from "../sectionTitle/section-title";
import "./experience.scss"

export function Experience() {
    return (
        <div className="experience">
            <SectionTitle text="Experience" />
            <p>2 years working as QA, in company Timepix, 10 years in the group SONatório.</p>
            <div className="experience-time">

                <div className="conf-images">
                    <ConfImages src="/javascript.svg"
                        alt="Javascript logo"
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-3"><ConfSpan text="2 years" /></div>
                    </div>
                </div>

                <div className="conf-images">
                    <ConfImages src="/typescript.svg"
                        alt="Typescript logo"
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1"><ConfSpan text="2 months" /></div>
                    </div>
                </div>
                <div className="conf-images">
                    <ConfImages src="/react.svg"
                        alt="React logo"
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1"><ConfSpan text="2 months" /></div>
                        
                    </div>
                </div>
                <div className="conf-images">
                    <ConfImages src="/java.svg"
                        alt="Java logo"
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                            <ConfSpan text="2 years" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}