import React from "react";
import styles from "./Menu.module.css"

const NavMenu = () => {
    return (
        <nav className={styles.navbar} role="navigation" aria-label="main navigation">
            <div className={styles.navbarMenu}>
                <a href="/" class="navbar-item">Añadir</a>
                <a href="/" class="navbar-item">Ver lista</a>
                <a href="/" class="navbar-item">Ver detalle de una enfermedad</a>
                <a href="/" class="navbar-item">Actualizar o eliminar una enfermedad</a>
            </div>
        </nav>
    );
};

export default NavMenu;
