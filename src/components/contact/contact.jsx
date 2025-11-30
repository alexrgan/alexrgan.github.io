import "./contact.css"
// import LinkedinIcon from "../../img/linkedin_icon.png"
import React, { Component } from "react"
import { SocialIcon } from 'react-social-icons';
import Divider from '@mui/material/Divider';


class Contact extends Component {
    render() {
        return (
            <div className="c">
                <h1 className="c-title">Contact Me!</h1>
                <div className="c-icons-container">
                    <div className="c-img-wrapper">
                        <SocialIcon url="https://www.linkedin.com/in/alex-rui-gan/"
                            target="_blank"
                            bgColor="black"
                            fgColor="white"
                        />
                    </div>
                    <div className="c-img-wrapper">
                        <SocialIcon
                            url="mailto:alex.g32523@gmail.com"
                            // target="_blank"
                            network="mailto"
                            bgColor="black"
                            fgColor="white"
                        />
                    </div>
                    <div className="c-img-wrapper">
                        <SocialIcon
                            url="https://github.com/alexrgan"
                            target="_blank"
                            network="github"
                            bgColor="black"
                            fgColor="white"
                        />
                    </div>
                </div>
                <Divider/>
                <div className="c-footer">
                    <p className="c-footer-text">
                        Copyright © 2022 Alex Gan.
                    </p>
                </div>
            </div>
        )
    }
}

export default Contact
