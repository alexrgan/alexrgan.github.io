import "./experiences.css"
import amazon_logo from "../../img/amazon_logo.jpg"
import tccsa_logo from "../../img/tccsa_logo.jpg"
import { Component } from "react"

import ExperienceAccordion from "./experience_accordion";

class Experiences extends Component {

    render() {
        const amazon_dict = {
            company: "Amazon",
            position: "Software Development Engineer",
            date: "Aug 2022 - Present",
            logo: amazon_logo,
            details: [
                "Led design and implementation of an agentic AI platform built on MCP and AWS Bedrock, reducing advertiser analysis time from 2 days to minutes and driving $6MM annual revenue.",
                "Built end-to-end data pipeline using Airflow and Apache Spark processing 35B keywords daily across 7 marketplaces, improving ROAS by 71%.",
                "Designed AI-powered pricing skill with secure cross-service data access across 4 auth systems, reducing manual pricing effort from 2 hours to 3 minutes per deal.",
                "Led development of Amazon Posts and Post Boost coordinating 11+ teams, reducing ad creation time by 70%.",
                "Built automated oncall tooling reducing customer issue resolution time by 10x. Won org-wide Customer Obsession award.",
            ],
        }

        const amazon_intern_dict = {
            company: "Amazon",
            position: "Software Development Engineer Intern",
            date: "May 2021 - Jul 2021",
            logo: amazon_logo,
            details: [
                "Developed a tool using TypeScript and React that reduced the time teams need to build software quickly and reliably, resulting in a better customer experience.",
            ],
        }

        const tccsa_dict = {
            company: "U of T TCCSA",
            position: "Web Developer",
            date: "May 2020 - Apr 2021",
            logo: tccsa_logo,
            details: [
                "Built and maintained the club website to help promote Chinese culture as well as diversity to U of T students.",
            ],
        }

        const experiences = [amazon_dict, amazon_intern_dict, tccsa_dict];

        return (
            <div className="e">
                <div className="e-title-wrapper">
                    <h1 className="title-text">Experiences</h1>
                </div>

                <div className="e-list-wrapper">
                    {experiences.map((exp, idx) => (
                        <ExperienceAccordion key={idx} dict={exp} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Experiences
