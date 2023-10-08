"use client";
import { useRouter } from "next/navigation";
import styles from "./Form.module.css";
import { useState } from "react";

export default function Form() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null);

  const handleValidationError = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const valueEmail = event.target.value;
    setEmail(valueEmail);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    setIsValidEmail(isValid);

    if (email.trim() === "") {
      setIsValidEmail(false);
      return;
    }

    isValid && localStorage.setItem("email", email);
    router.push("/registered");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.FormSubmit}>
        <label htmlFor="email">
          Email address
          {isValidEmail === false ? (
            <span className={styles.validation}>Valid email required</span>
          ) : (
            ""
          )}
        </label>
        <input
          className={isValidEmail === false ? styles.validationInput : ""}
          type="email"
          value={email}
          placeholder={
            isValidEmail === false
              ? "ash#loremcompany.com"
              : "  email@company.com"
          }
          onChange={handleValidationError}
        />
        <button type="submit">Subscribe to monthly newsletter</button>
      </div>
    </form>
  );
}
