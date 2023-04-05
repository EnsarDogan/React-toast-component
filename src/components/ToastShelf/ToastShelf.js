import React, { useEffect, useContext } from "react";
import { ToastContext } from "../ToastProvider/ToastProvider";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  useEscapeKey(() => setToastMessageList([]));
  const { toastMessageList, setToastMessageList } = useContext(ToastContext);
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastMessageList.map(({ message, variant, id }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={variant} id={id}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

function useEscapeKey(callback) {
  useEffect(() => {
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
