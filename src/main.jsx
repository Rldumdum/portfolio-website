import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavBar from "./components/Navbar.jsx";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Resume from "./components/Resume.jsx";

const router = createBrowserRouter([
  {
    path: "/portfolio-website",
    element: (
      <>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <NavBar />
          <App />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition:Bounce
          />
        </main>
      </>
    ),
  },
  {
    path: "/portfolio-website/resume",
    element: (
      <>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Resume />
        </main>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
