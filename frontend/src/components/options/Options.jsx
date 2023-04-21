import React from 'react'
import { Link } from 'react-router-dom';
import './option.css'

export default function Options() {
    return (
      <div className="support-section">
      <div className="container">
        <div className="support-top-wrapper">
          <div className="support-top-left">
            <div className="support-top-details-text">Choose Where to Start</div>
            <h2 className="support-top-heading">The Full Range of Health and Wellness.</h2>
          </div>
        </div>
        <div className="support-wrapper">
          <div className="support-column">
            <Link className="box-link" to="/symptom">
            <div className="support-square" style={{width: "450px", height: "350px", backgroundImage: "url('/assets/symptoms.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", position: "relative"}}>
                <div id="subtitle" className="support-square-number">01</div>
                <div className="support-square-text" style={{textAlign: "center"}}>SYMPTOMS</div>
              </div>
            </Link>
            <p id="subtext">Diagnosing symptoms is crucial for maintaining good health by enabling early detection, treating potentially serious medical illnesses, and managing the progression of chronic conditions. Research you symptoms here for potential causes!</p>
          </div>
          <div className="support-column">
            <Link className="box-link" to="/nutrition">
            <div className="support-square" style={{width: "450px", height: "350px", backgroundImage: "url('/assets/nutrition.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", position: "relative"}}>
                <div className="support-square-number">02</div>
                <div id="subtitle" className="support-square-text">NUTRITION</div>
              </div>
            </Link>
            <p id="subtext">Our bodies are in constant need for growth, repair and optimal functioning. A balanced and nutrient-rich diet can help prevent chronic diseases, boost immunity, and promote overall well-being. Add your ingredients and find healthy recipes! </p>
          </div>
          <div className="support-column">
            <Link className="box-link" to="#">
            <div className="support-square" style={{width: "450px", height: "350px", backgroundImage: "url('/assets/provider.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", position: "relative"}}>
                <div className="support-square-number">03</div>
                <div id="subtitle" className="support-square-text">PROVIDER</div>
              </div>
            </Link>
            <p id="subtext">Providers play a vital role in the guidance of medical care. They posses the expertise and knowledge required to treat a wide range of conditions and illnesses. You can search and find local providers for any specialty needed!</p>
          </div>
        </div>
      </div>
    </div>
      )
    };
