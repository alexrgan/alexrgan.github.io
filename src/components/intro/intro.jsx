import "./intro.css"
import React, { Component } from "react"

class Intro extends Component {

    is_iOS() {
        return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
            || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    }

    render() {
        const darkMode = this.props.darkMode;
        const itemClass = darkMode ? "i-title-item" : "i-title-item dark";

        return (
            <div className={this.is_iOS() ? "i-iOS" : "i"}>
                <div className="i-left">
                    <div className="i-left-wrapper">
                        <h2 className="i-intro">Hello! My name is</h2>
                        <h1 className="i-name">Alex (Rui) Gan</h1>
                        <div className="i-title">
                            <div className="i-title-wrapper">
                                <div className={itemClass}>Software Engineer</div>
                                <div className={itemClass}>Pianist</div>
                                <div className={itemClass}>Swimmer</div>
                                <div className={itemClass}>Vlogger</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro
