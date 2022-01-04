import React from "react";
import "./main.css";
import avatar from "../../images/image-jeremy.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <main>
      <div className="reportContainer">
        <div className="gridContainer">
          <div className="mainProfileContainer">
            <div className="profileContainer">
              <img src={avatar} alt="jeremy" className="avatar" />
              <p className="title1">Report for</p>
              <p className="content">
                Jeremy <br /> Robson
              </p>
            </div>
            <div className="timeContainer">
              <ul className="trackingList">
                <li className="trackingListItem">
                  <Link to="#">Daily</Link>
                </li>
                <li className="trackingListItem">
                  <Link to="#">Weekly</Link>
                </li>
                <li className="trackingListItem">
                  <Link to="#">Daily</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="workContainer"></div>
          <div className="playContainer">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            possimus, illo provident nisi omnis explicabo porro inventore
            debitis minus perspiciatis? Inventore facilis molestiae deleniti,
            repudiandae porro corrupti aperiam beatae perferendis?
          </div>
          <div className="studyContainer">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            possimus, illo provident nisi omnis explicabo porro inventore
            debitis minus perspiciatis? Inventore facilis molestiae deleniti,
            repudiandae porro corrupti aperiam beatae perferendis?
          </div>
          <div className="exerciseContainer">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            possimus, illo provident nisi omnis explicabo porro inventore
            debitis minus perspiciatis? Inventore facilis molestiae deleniti,
            repudiandae porro corrupti aperiam beatae perferendis?
          </div>
          <div className="socialContainer">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            possimus, illo provident nisi omnis explicabo porro inventore
            debitis minus perspiciatis? Inventore facilis molestiae deleniti,
            repudiandae porro corrupti aperiam beatae perferendis?
          </div>
          <div className="selfCareContainer">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            possimus, illo provident nisi omnis explicabo porro inventore
            debitis minus perspiciatis? Inventore facilis molestiae deleniti,
            repudiandae porro corrupti aperiam beatae perferendis?
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;
