import React from 'react'
import "./banner.css"

export default function Banner() {
    return (
        <div className="banner-section">
        <div className="container">
            <div className="banner-wrapper">
            <h1 className="banner-heading">
                Complete Care <br />
                The Way It Should Be.
            </h1>
            <p className="banner-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime praesentium, esse dicta culpa facilis repellendus ad earum id cupiditate doloribus? Optio odio, architecto esse sunt nemo laborum alias aspernatur.
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
