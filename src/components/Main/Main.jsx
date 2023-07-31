import React, { useEffect } from "react";
import "./main.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboardCheck } from "react-icons/bs";

import img from "../../Aasets/img1.jpg";
import img2 from "../../Aasets/img2.jpg";
import img3 from "../../Aasets/Bhaktapur.jpg";
import img4 from "../../Aasets/Boudhanath Stupa.jpg";
import img5 from "../../Aasets/Chitwan National Park.jpg";
import img6 from "../../Aasets/Kathmandu.jpg";
import img7 from "../../Aasets/Pokhara.jpg";
import img8 from "../../Aasets/patan.jpg";
import img9 from "../../Aasets/Taj mahal.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    desTitle: "KTM",
    location: "Nepal",
    grade: "CULTURAL RRLAX",
    fees: "$700",
    description:
      "The optiine of Asia, KTM is one of the best travel destinations in the world. ",
  },

  {
    id: 1,
    imgSrc: img2,
    desTitle: "KTM",
    location: "Nepal",
    grade: "CULTURAL RRLAX",
    fees: "$700",
    description:
      "The optiine of Asia, KTM is one of the best travel destinations in the world. ",
  },
  {
    id: 1,
    imgSrc: img3,
    desTitle: "KTM",
    location: "Nepal",
    grade: "CULTURAL RRLAX",
    fees: "$700",
    description:
      "The optiine of Asia, KTM is one of the best travel destinations in the world. ",
  },

  {
    id: 1,
    imgSrc: img4,
    desTitle: "KTM",
    location: "Nepal",
    grade: "CULTURAL RRLAX",
    fees: "$700",
    description:
      "The optiine of Asia, KTM is one of the best travel destinations in the world. ",
  },

  {
    id: 1,
    imgSrc: img5,
    desTitle: "KTM",
    location: "Nepal",
    grade: "CULTURAL RRLAX",
    fees: "$700",
    description:
      "The optiine of Asia, KTM is one of the best travel destinations in the world. ",
  },

  {
    id: 1,
    imgSrc: img6,
    desTitle: "KTM",
    location: "Nepal",
    grade: "CULTURAL RRLAX",
    fees: "$700",
    description:
      "The optiine of Asia, KTM is one of the best travel destinations in the world. ",
  },
  {
    id: 1,
    imgSrc: img7,
    desTitle: "KTM",
    location: "Nepal",
    grade: "CULTURAL RRLAX",
    fees: "$700",
    description:
      "The optiine of Asia, KTM is one of the best travel destinations in the world. ",
  },

  {
    id: 1,
    imgSrc: img8,
    desTitle: "KTM",
    location: "Nepal",
    grade: "CULTURAL RRLAX",
    fees: "$700",
    description:
      "The optiine of Asia, KTM is one of the best travel destinations in the world. ",
  },
  {
    id: 1,
    imgSrc: img9,
    desTitle: "KTM",
    location: "Nepal",
    grade: "CULTURAL RRLAX",
    fees: "$700",
    description:
      "The optiine of Asia, KTM is one of the best travel destinations in the world. ",
  },
];

const Main = () => {
  // let  create a react hook to add a scroll animation..

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main conatiner section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {/* Guys, here I'm going to use high order array methode(map).
        To do that we shell use a list of object in one array. I'm going to create an array named data and form that we shell  .map() array to featch each desitnation at once . I hope this will make sence to us! */}

        {Data.map(
          ({ id, imgSrc, desTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={desTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{desTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <BsClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
