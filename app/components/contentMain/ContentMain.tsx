"use client";
import styles from "./ContentMain.module.css";
import Image from "next/image";
import imagesSmall from "../../assets/images/illustration-sign-up-mobile.svg";
import imagesLarge from "../../assets/images/illustration-sign-up-desktop.svg";
import Infos from "../infos/Infos";
import Form from "../form/Form";
import { useState, useEffect } from "react";

export default function ContentMain() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 450);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.content}>
      <div className={styles.areaUpdates}>
        <div className={styles.title}>
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
        </div>
        <Infos />
        <Form />
      </div>
      <div className={styles.areaImg}>
        <Image
          src={isSmallScreen ? imagesSmall : imagesLarge}
          alt=""
          width={isSmallScreen ? 350 : 400}
          height={isSmallScreen ? 284 : 593}
        />
      </div>
    </div>
  );
}
