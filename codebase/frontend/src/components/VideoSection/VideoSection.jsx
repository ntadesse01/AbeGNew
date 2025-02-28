import React from "react";

const VideoSection = () => {
  return (
    <div>
      {/* <!-- Video Section --> */}
      <section className="video-section">
        <div
          data-parallax='{"y": 50}'
          className="sec-bg"
          // style="background-image: url(assets/images/custom/banner/banner1.jpg);"
        ></div>
        <div className="auto-container">
          <h5>Working since 1999</h5>
          <h2>
            Tuneup Your Car <br /> to Next Level
          </h2>
          <div className="video-box">
            <div className="video-btn">
              <a
                href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
                className="overlay-link lightbox-image video-fancybox ripple"
              >
                <i className="flaticon-play"></i>
              </a>
            </div>
            <div className="text">
              Watch intro video <br /> about us
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoSection;
