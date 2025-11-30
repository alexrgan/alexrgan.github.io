import "./about.css"
import Me from "../../img/me.jpg"
import ResumePdf from "../../pdfs/AlexGanResume2025.pdf"
import React, { Component } from "react"
import Button from '@mui/material/Button';

class About extends Component {
    render() {
        return (
            <div className="a">
                {/* <div className="a-container"> */}
                <div className="a-left">
                    <div className="a-card bg"></div>
                    <div className="a-card">
                        <img src={Me} alt="" className="a-img" />
                    </div>
                </div>
                <div className="a-right">
                    <h1 className="a-title">About Me</h1>
                    <p className="a-desc">
                        I'm a software engineer at Amazon with 3+ years building large-scale systems in advertising. I specialize in full-stack development and cross-team coordination - from launching AI platforms to shipping features that drive millions in revenue. I move fast, deliver projects end-to-end and do whatever it takes to solve any problem given to me.
                    </p>
                    <div className="a-resume">
                        <Button
                            variant="contained"
                            // href="https://drive.google.com/file/d/10lzAmH2ayPKe9qvliDhPGBFcmvGHRRlK/view?usp=sharing"
                            href={ResumePdf}
                            target="_blank"
                        >
                            <p>Resume</p>
                        </Button>
                    </div>
                </div>
                {/* </div> */}
            </div>
        )
    }
}

export default About