import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import DetailsPage from "./components/DetailsPage";
import CreatePage from "./components/CreatePage";
import EditPage from "./components/EditPage";
import HeaderNav from "./components/HeaderNav";

class App extends Component {
    render() {
        return (
            <div className="container">
                <HeaderNav/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" exact element={<LandingPage/>}></Route>
                        <Route path="/posts/:id" element={<DetailsPage/>}></Route>
                        <Route path="/add" element={<CreatePage/>}></Route>
                        <Route path="/edit/:id" element={<EditPage/>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
