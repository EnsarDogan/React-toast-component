import React, { useState } from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf/ToastShelf";
import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("notice");
  const [toastMessageList, setToastMessageList] = useState([]);
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleVariantChange = (e) => {
    setVariant(e.target.value);
  };
  const handleSubmit = () => {
    setToastMessageList([
      ...toastMessageList,
      { message, variant, id: Math.random() },
    ]);
    setMessage("");
    setVariant("notice");
  };
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {toastMessageList.length > 0 && (
        <ToastShelf
          toastMessageList={toastMessageList}
          setToastMessageList={setToastMessageList}
        />
      )}
      <div className={styles.controlsWrapper}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={handleMessageChange}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((item) => (
                <label htmlFor="variant-notice" key={item}>
                  <input
                    id="variant-notice"
                    type="radio"
                    name="variant"
                    value={item}
                    checked={variant === item}
                    onChange={handleVariantChange}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
