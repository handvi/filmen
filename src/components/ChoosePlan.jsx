/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../assets/styles/ChoosePlan.css";

const ChoosePlan = () => {
  const [isMonthly, setIsMonthly] = useState(true); 
  const togglePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className="choose-plan-container">
      <div className="choose-plan-content">
        <h2>Choose the plan thats right for you</h2>
        <p>
          Join Filmen and select from our flexible subscription options tailored
          to suit your viewing preferences. Get ready for non-stop entertainment!
        </p>
        <div className="plan-switch">
          <span className="plan-label">Monthly</span>
          <label className="switch">
            <input type="checkbox" checked={!isMonthly} onChange={togglePlan} />
            <span className="slider"></span>
          </label>
          <span className="plan-label">Yearly</span>
        </div>

        {/* Cards */}
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Basic Plan</h3>
                <ul>
                  <li>1 Device</li>
                  <li>720p Resolution</li>
                  <li>{isMonthly ? "$5/month" : "$50/year"}</li>
                </ul>
                <button className="primary">Choose Plan</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Standard Plan</h3>
                <ul>
                  <li>2 Devices</li>
                  <li>1080p Resolution</li>
                  <li>{isMonthly ? "$10/month" : "$100/year"}</li>
                </ul>
                <button className="primary">Choose Plan</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Premium Plan</h3>
                <ul>
                  <li>4 Devices</li>
                  <li>4K Resolution</li>
                  <li>{isMonthly ? "$20/month" : "$200/year"}</li>
                </ul>
                <button className="primary">Choose Plan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;
