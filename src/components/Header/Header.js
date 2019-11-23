import React from "react";
import NavMenu from "../Menu/Menu";
import styles from "./Header.css";

const Header = () => {
    return(
        <header className={styles.header} style={{width: "100%"}}>
            <NavMenu></NavMenu>
        </header>
    )
}

export default Header;