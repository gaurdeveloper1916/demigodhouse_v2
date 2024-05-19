import React from "react";
import styles from "./EventCard.module.css";

const Hoverevents = () => {
  return (
    <div className="container-fluid ">
      <div className={`card ${styles.eventCard}`}>
        <div className={`card-img-overlay p-5 ${styles.overlay}`}>
          <div
            className={`d-flex justify-content-between flex-column col-lg-10 p-5  ${styles.textContainer}`}
          >
            <div>
              <p className={`${styles.eventNameTxt}`}>EVENT NAME</p>
              <p className={`${styles.eventName} m-0`}>
                Lörem ipsum suprajyl Lörem ipsum suprajyl Lörem ipsum suprajyl
              </p>
              <p className={`${styles.eventName}`}> Lörem ipsum</p>
            </div>
            <div className={`d-flex justify-content-between `}>
              <p className={`${styles.eventName}`}>DATE: 23 APR 2024</p>
              <p className={`${styles.eventName}`}>TIME: 18:00</p>
              <p className={`${styles.eventName}`}>VENUE: XYZ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hoverevents;
