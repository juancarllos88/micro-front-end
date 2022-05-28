import React, { Suspense } from "react";
import { Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";

const ListarClientesApp = React.lazy(() => import('listar/ListarClientesApp'));
const CadastrarClienteApp = React.lazy(() => import('cadastrar/CadastrarClienteApp'));
const VisualizarClienteApp = React.lazy(() => import('visualizar/VisualizarClienteApp'));

export function Navegacao(){
    const navegacao = useNavigate();
    const location = useLocation();

    return(
        <Routes>
            <Route path="/" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <ListarClientesApp navegar={navegacao}/>
                </Suspense>
            }/>
            <Route path="/cadastrar" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <CadastrarClienteApp navegar={navegacao}/>
                </Suspense>
            }/>
            <Route path="/visualizar/:id" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <VisualizarClienteApp navegar={navegacao} location={location}/>
                </Suspense>
            }/>
        </Routes>
    );
}