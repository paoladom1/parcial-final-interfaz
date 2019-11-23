import React from "react";
import styles from "./List.module.css"
import { List, Card } from "antd";


class EnfermedadesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enfermedades: []
        };
    }

    getEnfermedades = enfermedades => {
        console.log(enfermedades);
        fetch(`${process.env.REACT_APP_BACKEND_URL}/enfermedad`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res.data);
                const { enfermedades } = res.data;
                if (res.status === "success") {
                    this.setState({
                        enfermedades
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    componentDidMount() {
        const { enfermedad } = this.props;

        this.getEnfermedades(enfermedad);
    }

    render() {
        const { enfermedades } = this.state;
        console.log(enfermedades);

        return (
            <div className={styles.container}>
                <h2>Lista de Enfermedades</h2>
                <List 
                    className={styles.list}
                    itemLayout="horizontal"
                    dataSource={enfermedades}
                    renderItem={item => (
                        <List.Item>
                            <Card title={item.status} className={styles.card}>
                                {item.enfermedades.map(
                                    (enfermedades, index) => (
                                        <div key={index}>
                                            {`${enfermedades.nombre},
                                            ${enfermedades.sintomas},
                                            ${enfermedades.esMortal},
                                            ${enfermedades.causas}`}
                                        </div>
                                    )
                                )}
                                <hr />
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default EnfermedadesList;
