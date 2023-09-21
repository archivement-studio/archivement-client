import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import classNames from "classnames";


const root = ReactDOM.createRoot(document.getElementById('root'));

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
      addEventListeners();
      handleLinkHoverEvents();
      return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseDown = () => {
      setClicked(true);
  };

  const onMouseUp = () => {
      setClicked(false);
  };

  const onMouseLeave = () => {
      setHidden(true);
  };

  const onMouseEnter = () => {
      setHidden(false);
  };

  const handleLinkHoverEvents = () => {
      document.querySelectorAll("a").forEach((el) => {
          el.addEventListener("mouseover", () => setLinkHovered(true));
          el.addEventListener("mouseout", () => setLinkHovered(false));
      });
  };

  const cursorClasses = classNames("cursor", {
      "cursor--clicked": clicked,
      "cursor--hidden": hidden,
      "cursor--link-hovered": linkHovered
  });

  return (
      <div
          className={cursorClasses}
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
  );
};

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Cursor/>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
