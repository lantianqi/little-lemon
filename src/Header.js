import logo from "./assets/logo.jpg";
import { useEffect, useRef, useState } from "react";
import { useWindowResize } from "./hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import "./CSS/Header.css";
import Nav from "./Nav";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { windowWidth } = useWindowResize();
  const navRef = useRef(null);
  const menuIconRef = useRef(null);

  /** Watch and update if currently the web app is opened in a big window */
  useEffect(() => {
    if (windowWidth > 768) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }, [windowWidth]);

  /** Add classes based on Burger Menu open/close state */
  useEffect(() => {
    if (showMenu) {
      navRef.current?.classList.add("open");
      navRef.current?.classList.remove("close");
    } else {
      navRef.current?.classList.add("close");
      navRef.current?.classList.remove("open");
    }
  }, [showMenu]);

  /** Enable feature: Click outside or on the link to close the nav */
  useEffect(() => {
    const handler = ({ target }) => {
      console.log(target);
      console.log(navRef.current);
      console.log(menuIconRef);
      console.log(
        (target.closest("#headerNav") === navRef.current &&
          target.tagName !== "A") ||
          target.closest("#headerMenuIcon") === menuIconRef.current,
      );
      if (
        (target.closest("#headerNav") === navRef.current &&
          target.tagName !== "A") ||
        target.closest("#headerMenuIcon") === menuIconRef.current
      )
        return;
      else setShowMenu(false);
    };

    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  return (
    <header
      role="region"
      aria-label="Header Region"
      className="headerContainer"
    >
      {windowWidth < 768 && (
        <div id="headerMenuIcon" className="headerMenuIcon" ref={menuIconRef}>
          <FontAwesomeIcon
            icon={!showMenu ? faBars : faClose}
            size="2x"
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter" || e.key == " ") {
                setShowMenu((prev) => !prev);
              }
            }}
            tabIndex={0}
          />
        </div>
      )}
      <div id="headerLogo" className="headerLogo">
        <img src={logo} height={"40px"} alt="logo" />
      </div>
      {showMenu && (
        <div id="headerNav" className="headerNav" ref={navRef}>
          <Nav />
        </div>
      )}
      <div id="headerCartIcon" className="headerCartIcon">
        <FontAwesomeIcon icon={faCartShopping} size="2x" />
      </div>
    </header>
  );
}

export default Header;
