import React from 'react'
import '../CSS/features.css'
import { FaDatabase } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiTableau } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";

const Features = () => {
    return (
    <div>
        <section className="features-box">
            <div className="features">
                <article className="skill-summary">
                    <div 
                        data-aos="fade"
                        data-aos-once="true">
                        <FaDatabase 
                        className="icon"
                        size="3rem" />
                    </div>
                    <h3>SQL</h3>
                    <p>knowledge of MySQL data analysis tools and software</p>
                </article>
                <article className="skill-summary">
                    <div 
                        data-aos="fade" 
                        data-aos-delay="300" data-aos-once="true">
                        <FaPython className="icon" size="3rem" />
                    </div>
                    <h3>Python</h3>
                    <p>
                        Knowledge of python and various python libraries, such a numpy, Pandas, Seaborn, and scikitlearn
                    </p>
                </article>
                <article className="skill-summary">
                    <div 
                        data-aos="fade" 
                        data-aos-delay="600" 
                        data-aos-once="true">
                        <SiTableau className="icon" size="3rem" />
                    </div>
                    <h3>Tableau</h3>
                    <p>
                        knowledge of the data analysis dashboard software Tableau for making interactive data visualizations
                    </p>
                </article>
                <article className="skill-summary">
                    <div 
                        data-aos="fade" 
                        data-aos-delay="900" 
                        data-aos-once="true">
                        <FaHtml5 className="icon" size="3rem" />
                    </div>
                    <h3>HTML5</h3>
                    <p>
                        knowledge and best practices for using HTML5 for sturcturing web applications
                    </p>
                </article>
                <article className="skill-summary">
                        <div 
                            data-aos="fade" 
                            data-aos-delay="1200" 
                            data-aos-once="true">
                            <SiJavascript className="icon" size="3rem" />
                        </div>
                        <h3>JavaScript</h3>
                        <p>
                            Knowledge of JavaScript for webbrowser, frontend compatible technolodgies
                        </p>
                </article>
                <article className="skill-summary">
                    <div 
                    data-aos="fade" 
                    data-aos-delay="1500" 
                    data-aos-once="true">
                        <SiCss3 className="icon" size="3rem" />
                    </div>
                    <h3>CSS3</h3>
                    <p>
                    Knowledge of how to use CSS3 for frontend webdevelopement and design techniques</p>
                </article>
            </div>
        </section>
    </div>
);
}

export default Features