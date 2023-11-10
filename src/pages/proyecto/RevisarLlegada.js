import React from "react";
import "../../styles/inputForms.css";
import "../../styles/content.css";
import { useState } from "react";
import { showNotification } from "../../utils/notification";
import API_BASE_URL from "../../config";

const RevisaLlegada = () => {
    const [numeroSerie, setNumeroSerie] = useState("");

    const handleReceived = () => {
        const data = { content: { numeroSerie } };
        console.log(data);
        fetch(`${API_BASE_URL}/activos/edit-numero-serie-recibido`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    setNumeroSerie("");
                    response.json().then((data) => {
                        showNotification(data.message, 'success');
                    });
                } else {
                    response.json().then((data) => {
                        showNotification(data.message, 'error');
                    });
                }
            })
            .catch((error) => {
                console.error("Hubo un problema al registrar la llegada", error);
            });
    };
    return (
        <div className="container-content">
            <div className="title">
                <h1>Revisarr llegada</h1>
            </div>
            <div className="content">
                <form class="add-form" action="/" method="">
                    <div class="form-control">
                        <label for="numeroSerie">Numero de Serie</label>
                        <div>
                            <input type="text" name="numeroSerie" id="numeroSerie" value={numeroSerie} onChange={(e) => setNumeroSerie(e.target.value)} />
                            <button class="btn-buscar-modelo" type="button" onClick={() => handleReceived()}>Recibido</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RevisaLlegada;