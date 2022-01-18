import React from "react";
import PROJECTS from "../data/project";

const Project = (props) => {
    const { title, description, link, image } = props.project;
    return (
        <div style={{ display: "inline-block", margin: 10, padding: 10 }}>
            <h3>{title}</h3>
            <img src={image} alt="ProjectImg" style={{ width: 200, height: 200 }} />
            <p>{description}</p>
            <a href={link}>{link}</a>
        </div>
    )

}

const Projects = () => {

    return (
        <div>
            <h2>Highlighted Projects</h2>
            <div>
                {
                    PROJECTS.map(PROJECT => {
                        return (
                            <Project key={PROJECT.id} project={PROJECT} />
                        );
                    })
                }
            </div>
        </div>

    )

}

export default Projects;