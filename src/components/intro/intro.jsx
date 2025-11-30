import "./intro.css"
import React, { Component } from "react"
// import Particles from "react-tsparticles";
// import ParticlesBg from 'particles-bg'

class Intro extends Component {

    is_iOS() {
        return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator)
            || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    }

    i_css() {
        if (this.is_iOS()) {
            return (
                "i-iOS"
            )
        } else {
            return (
                "i"
            )
        }
    }

    change_subtitles_color(darkMode) {
        var item_css = document.getElementsByClassName('i-title-item');
        console.log(darkMode)
        for (var i = 0; i < item_css.length; i++) {
            var cell = item_css[i];
            if (!darkMode) {
                console.log("add dark to css")
                cell.classList.add('dark')
            } else {
                console.log("remove dark from css")
                cell.classList.remove('dark');
            }
        }
    }

    render() {
        const darkMode = this.props.darkMode;
        this.change_subtitles_color(darkMode)

        return (
            <div className={this.i_css()}>
                <div className="i-left">
                    <div className="i-left-wrapper">
                        <h2 className="i-intro">Hello! My name is</h2>
                        <h1 className="i-name">Alex Gan</h1>
                        {/* <h1 className="i-name">{this.i_css()}</h1> */}
                        <div className="i-title">
                            <div className="i-title-wrapper">
                                <div className="i-title-item">Software Engineer</div>
                                <div className="i-title-item">Gamer</div>
                                <div className="i-title-item">Pianist </div>
                                <div className="i-title-item">Swimmer</div>
                            </div>
                        </div>
                        <p className="i-desc">
                        </p>
                    </div>
                </div>
                {/* <div className="i-right"> */}
                {/* <div className="i-bg"></div>
                    <img src={Me} alt="" className="i-img" /> */}
                {/* </div> */}
            </div>
        )
    }
}

export default Intro
