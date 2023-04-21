import React from 'react'
import "./banner.css"

export default function Banner() {
    return (
        <div className="banner-section">
        <div className="container">
            <div className="banner-wrapper">
            <h1 className="banner-heading">
                Complete Care, <br />
                The Way It Should Be.
            </h1>
            <p className="banner-paragraph">
                This approach recognizes the interconnectedness of traditional medicine and nutritional health to drive more effective and sustainable health outcomes. Research the various methods of health and wellness.
            </p>
            <div className="banner-button-wrapper">
                <a href="/register" className="btn light outline w-button">
                Get Started
                </a>
            </div>
            </div>
        </div>
        </div>
    );
    };
