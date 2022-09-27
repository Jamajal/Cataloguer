import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cataloguer from "../pages/Cataloguer";
import Login from "../pages/Login";
import RegistrateCard from "../pages/RegistrateCard";
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Login />
};

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<Cataloguer />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/new-card" element={<Private Item={RegistrateCard} />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}