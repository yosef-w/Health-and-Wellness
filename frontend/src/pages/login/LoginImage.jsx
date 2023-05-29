import React from "react";

const LoginImage = () => {
  return (
    <div className="col-md-6 bg-secondary order-first order-md-last">
      <div className="text-wrapper">
        <h1 id="quote">
        The food you eat can be either the safest and most powerful form of medicine or the slowest form of poison.
        </h1>
        <h1 className="pt-3 pb-2" id="quote">Ann Wigmore</h1>
        <p
          style={{
            color: "white",
            fontWeight: 600,
          }}
        >
          Founder, Ann Wigmore Natural Health Institute
          <br />
          <span style={{ fontWeight: 300 }}>Holistic Health Practitioner</span>
        </p>
      </div>
    </div>
  );
};

export default LoginImage;
