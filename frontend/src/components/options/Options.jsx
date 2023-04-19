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
                <div className="support-square">
                  <div className="support-square-number">01</div>
                  <div className="support-square-text">
                  <a href="/symptom" className="nav-link">
                    SYMPTOMS
                    </a>
                  </div>
                </div>
                </Link>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum cupiditate consectetur eum dicta quas quo laborum sit harum veniam sapiente, possimus voluptatem, nesciunt perferendis error similique. Explicabo porro ab necessitatibus.
                </p>
              </div>
              <div className="support-column">
              <Link className="box-link" to="/nutrition">
                <div className="support-square">
                  <div className="support-square-number">02</div>
                  <div className="support-square-text">
                  <a href="/nutrition" className="nav-link">
                    NUTRITION
                    </a>
                    </div>
                </div>
                </Link>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil minima ad recusandae, consectetur voluptatem possimus aliquid ducimus, ut quod veritatis exercitationem reiciendis optio, sunt quaerat ipsa iste tempore error delectus.
                </p>
              </div>
              <div className="support-column">
              <Link className="box-link" to="#">
                <div className="support-square">
                  <div className="support-square-number">03</div>
                  <div className="support-square-text">
                  <a href="/provider" className="nav-link">
                    PROVIDER
                    </a>
                  </div>
                </div>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus tempora eius quos quidem, rerum soluta quasi at voluptatem expedita repudiandae rem fugiat minus possimus non corporis necessitatibus in. Unde, dolorem!
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    };
