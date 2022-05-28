import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { api } from "../../services/api";

export default function VisualizarClientes(props) {

    const [cliente, setCliente] = useState({});
  
    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const id = props.location.state
        const response = await api.get(`/clientes/${id}`);
        setCliente(response.data);
    }

    function voltar(event){
        event.preventDefault();
        props.navegar("/");
    }

    return (
        <>
            <h1> Dados do Cliente</h1>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Peso</th>
                        <th scope="col">Altura</th>
                        <th scope="col">Sexo</th>
                        <th scope="col">IMC</th>
                    </tr>
                </thead>
                <tbody>

                    <tr key={cliente.id}>
                        <td>{cliente.id}</td>
                        <td>{cliente.nome}</td>
                        <td>{cliente.peso}</td>
                        <td>{cliente.altura}</td>
                        <td>{cliente.sexo}</td>
                        <td>{cliente.imc}</td>
                    </tr>

                </tbody>
                <Button color="primary" onClick={voltar} >Voltar</Button>
            </Table>
        </>
    );
}