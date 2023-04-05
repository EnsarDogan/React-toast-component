import React, { useEffect, useCallback } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastMessageList, setToastMessageList }) {
  useEscapeKey(() => setToastMessageList([]));

  return (
    <ol
      className={styles.wrapper}
      role="region"
      ariaLive="polite"
      ariaLabel="Notification"
    >
      {toastMessageList.map(({ message, variant, id }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast
            variant={variant}
            id={id}
            toastMessageList={toastMessageList}
            setToastMessageList={setToastMessageList}
          >
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        callback();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);
}
