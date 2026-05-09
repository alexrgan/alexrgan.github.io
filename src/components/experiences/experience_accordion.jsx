import * as React from 'react';
import { Component } from "react"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./experiences.css"

class ExperienceAccordion extends Component {

  render() {
    const dict = this.props.dict;

    return (
      <Accordion className="experience-accordion" disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          sx={{
            background: "linear-gradient(to right, rgb(100,99,237), rgb(100,189,237))"
          }}
        >
          <div className="e-summary">
            <div className="e-summary-left">
              <div className="e-img-wrapper">
                <img src={dict.logo} alt={`${dict.company} logo`} className="e-img" />
              </div>
              <div className="e-summary-text">
                <h2 className="e-company">{dict.company}</h2>
                <span className="e-position">{dict.position}</span>
              </div>
            </div>
            <div className="e-summary-right">
              <span className="e-date-pill">{dict.date}</span>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            background: "linear-gradient(to right, rgb(100,99,237), rgb(100,189,237))"
          }}
        >
          {Array.isArray(dict.details) ? (
            <ul className="experience-details-list">
              {dict.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{dict.details}</p>
          )}
        </AccordionDetails>
      </Accordion>
    );
  }
}

export default ExperienceAccordion
