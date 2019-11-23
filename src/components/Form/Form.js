import React from "react";
import styles from "./Form.module.css";

import notification from "../Notification/Notification";

class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            sintomas: [],
            causas: [],
            esMortal: Boolean
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { nombre, sintomas, causas, esMortal } = this.state;

        fetch(`${process.env.BACKEND_URL}/enfermedad`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nombre,
                sintomas,
                causas,
                esMortal
            })
        })
            .then(res => res.json())
            .then(res => {
                if (res.status === "success") {
                    notification("se ha ingresado la nueva enfermedad");
                } else
                    notification(
                        "Error",
                        "Ha ocurrido un error creando la enfermedad. Por favor intente mas tarde",
                        "error",
                        2
                    );
            })
            .catch(error => console.log(error));
    };

    render() {
        return (
            <form id="form" onSubmit={e => {}}>
                <div className={styles.container}>
                    <div className="column">
                        <h1 className="title is-2">
                            Registro de una nueva enfermedad:
                        </h1>
                        <div className={styles.field}>
                            <label className={styles.label}>
                                Ingrese el nombre:
                            </label>
                            <input
                                name="nombre"
                                className={styles.input}
                                type="text"
                                placeholder="nombre de enfermedad"
                                onChange={this.handleChange}
                                value={this.props.nombre}
                            />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>
                                Ingrese los sintomas:{" "}
                            </label>
                            <input
                                nombre="sintomas"
                                className={styles.input}
                                type="text-area"
                                placeholder="sintomas de la enfermedad"
                                onChange={this.handleChange}
                                value={this.props.sintomas}
                            />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>
                                Ingrese las causas:{" "}
                            </label>
                            <input
                                nombre="causas"
                                className={styles.input}
                                type="text-area"
                                placeholder="sintomas de la enfermedad"
                                onChange={this.handleChange}
                                value={this.props.causas}
                            />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>Es mortal?</label>
                            <label className={styles.radio}>
                                <input
                                    type="radio"
                                    name="answer"
                                    onChange={this.handleChange}
                                    value={this.props.esMortal}
                                />
                                Yes
                            </label>
                            <label className={styles.radio}>
                                <input
                                    type="radio"
                                    name="answer"
                                    onChange={this.handleChange}
                                    value={this.props.esMortal}
                                />
                                No
                            </label>
                        </div>

                        <div className={styles.field}>
                            <div className={styles.control}>
                                <button className="button is-primary">
                                    Ingresar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default AddForm;
