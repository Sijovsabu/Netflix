import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available. It is also
          used to temporarily replace text in a process called greeking, which
          allows designers to consider the form of a webpage or publication,
          without the meaning of the text influencing the design.
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;
