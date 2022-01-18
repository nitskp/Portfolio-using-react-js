import React, { Component } from "react";
import SOCIALMEDIA from "../data/socialMedia"

const SocialLink = (props) => {
    const { img, link } = props.socialLinks
    return (
        <div style={{ display: "inline-block", margin: 10 }}>

            <a href={link}><img src={img} alt="Social Media Icon" style={{ width: 50, height: 50, margin: 10 }} /></a>
        </div>
    )

}

const SocialMedia = (props) => {
    return (
        <div>
            <h1>Social Media</h1>
            <div>
                {SOCIALMEDIA.map(LINK => {
                    return (
                        <SocialLink key={LINK.id} socialLinks={LINK} />
                    )
                })}
            </div>
        </div>


    )

}

export default SocialMedia;