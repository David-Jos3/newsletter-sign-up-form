"use client";
import { useRouter } from "next/navigation";
import styles from "./Subscribing.module.css";
import Image from "next/image";
import iconChecked from "../../assets/images/icon-success.svg";

export default function Subscribing() {
  const router = useRouter();
  const email = localStorage.getItem('email')
  

  return (
    <div className={styles.areaSubscribing}>
      <div>
        <Image src={iconChecked} width={50} height={50} alt="Icon-Checked" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to{" "}
          <strong>{email || "Not provider Email"}</strong>. Please open it and
          click the button inside to confirm your subscription.
        </p>
        <button
          onClick={() => {
            router.push("/");
            localStorage.removeItem("email");
          }}
        >
          {" "}
          Dismiss message
        </button>
      </div>
    </div>
  );
}
