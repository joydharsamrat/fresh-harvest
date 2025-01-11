"use client";

import { createContext, useContext, useState } from "react";

type ModalContextType = {
  isSignInOpen: boolean;
  isRegisterOpen: boolean;
  openSignIn: () => void;
  openRegister: () => void;
  closeModals: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const openSignIn = () => {
    setRegisterOpen(false);
    setSignInOpen(true);
  };

  const openRegister = () => {
    setSignInOpen(false);
    setRegisterOpen(true);
  };

  const closeModals = () => {
    setSignInOpen(false);
    setRegisterOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isSignInOpen,
        isRegisterOpen,
        openSignIn,
        openRegister,
        closeModals,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
}
