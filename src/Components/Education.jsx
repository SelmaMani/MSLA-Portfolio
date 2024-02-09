import React from "react";

const Education = () => {
    return(
        <section id="education" className="light">
            <h2 style={{ textAlign: "center" }}>Education</h2>
            <div className="education">
                <div style={{ display: "flex", justifyContent: "center" }} className="container">  
                    <div className="box">
                        <h3 style={{ flexBasis: "40px" }}>The National Higher School of Artificial Intelligence</h3>
                        <p className="small">Full Stack Web Developer</p>
                        <p>2021-2026</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education;