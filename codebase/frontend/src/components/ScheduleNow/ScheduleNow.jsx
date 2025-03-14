import React from 'react';
import { Link } from 'react-router-dom';

const ScheduleNow = () => {
  return (
    <div>
      {/* <!-- CTA Section --> */}
      <section className="cta-section">
        <div className="auto-container">
          <div className="wrapper-box">
            <div className="left-column">
              <h3>Schedule Your Appointment Today</h3>
              <div className="text">
                Your Automotive Repair & Maintenance Service Specialist
              </div>
            </div>
            <div className="right-column">
              <div className="phone">
                <a href="tel:18004567890">1800.456.7890</a>
              </div>
              <div className="btn">
                <Link to="/appointment" className="theme-btn btn-style-one">
                  <span>Appointment</span>
                  <i className="flaticon-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScheduleNow;
