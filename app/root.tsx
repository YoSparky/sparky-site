import stylesheet from "~/tailwind.css";
import fonts from "./assets/fonts.css";
import Header from "./components/Header";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { createContext, useState } from "react";
import { Modal } from "./components/Modal";
import ContactForm from "./components/ContactForm";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: fonts },
];

export const ModalContext = createContext<Function | null>(null);

export default function App() {
  const [modalState, setModalState] = useState(false);

  const toggleModal = () => {
    setModalState(!modalState);
  };
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ModalContext.Provider value={toggleModal}>
          <Header />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <Modal modalState={modalState} closeModal={() => setModalState(false)}>
            <ContactForm />
          </Modal>
        </ModalContext.Provider>
      </body>
    </html>
  );
}
