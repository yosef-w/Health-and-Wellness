import React from "react";

const RegisterImage = () => {
  return (
    <div className="col-md-6 bg-secondary order-first order-md-last" id="signupimage">
      <div className="text-wrapper">
        <h1 id="quote">
        When the diet is wrong, medicine is of no use. When the diet is correct, medicine is of no need.
        </h1>
        <h1 className="pt-3 pb-2" id="name">Ayurvedic Proverb</h1>
        <p
          style={{
            color: "white",
            fontWeight: 600,
          }}
        >
          Ayurveda Philosophy
          <br />
          <span style={{ fontWeight: 300 }}>India</span>
        </p>
      </div>
    </div>
  );
};

export default RegisterImage;
