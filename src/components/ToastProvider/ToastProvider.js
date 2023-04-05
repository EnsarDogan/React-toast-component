import React, { useState, createContext } from "react";
export const ToastContext = createContext();
function ToastProvider({ children }) {
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
  const value = {
    message,
    handleMessageChange,
    variant,
    handleVariantChange,
    toastMessageList,
    handleSubmit,
  };
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
