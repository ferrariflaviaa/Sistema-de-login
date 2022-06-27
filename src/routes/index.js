import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {StoreProvider} from '../components/Store/Context'
import RoutesPrivate from '../components/Private'
import RoutesPublic from '../components/Public'
import Login from '../pages/Login';
import Teste from '../pages/teste';

const RoutesAplication = () => {
    return (
        <BrowserRouter>
            <StoreProvider>
                <Routes>
                    //Rota privada:
                    <Route
                        path='/home' element={<RoutesPrivate redirectTo="/">
                            <Teste/>
                        </RoutesPrivate>}
                    />
                    {/* <Route path='/' element={<Login/>}/> */}

                    //Rota pubica:
                    <Route
                        path='/' element={<RoutesPublic redirectTo='/home'>
                            <Login/>
                        </RoutesPublic>}
                    />
                </Routes>
            </StoreProvider>
        </BrowserRouter>
    )
}

export default RoutesAplication;
