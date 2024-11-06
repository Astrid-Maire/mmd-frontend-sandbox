"use client";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import AcceptButton from "./AcceptButton";

const CookieConsentPopup = () => {
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);
  const [isCookieConsentPopupClosed, setIsCookieConsentPopupClosed] = useState(false);
  return (
    !isCookieAccepted &&
    !isCookieConsentPopupClosed && (
      <section className="bg-black dark:bg-white dark:text-black flex flex-col justify-between p-6 w-72 h-80 rounded-3xl">
        <header className="flex justify-between">
          <LiaCookieBiteSolid className="dark:text-black text-white" size={50} />
          <button
            className="flex"
            onClick={() => setIsCookieConsentPopupClosed(!isCookieConsentPopupClosed)}
          >
            <IoIosClose className="cursor-pointer dark:text-black text-white" size={25} />
          </button>
        </header>
        <footer className="flex flex-col">
          <p className="text-white dark:text-black leading-8 text-[25px] mb-4">
            We use cookies to improve your user expirence.
          </p>
          <AcceptButton
            isCookieAccepted={isCookieAccepted}
            setIsCookieAccepted={setIsCookieAccepted}
          />
        </footer>
      </section>
    )
  );
};

export default CookieConsentPopup;
