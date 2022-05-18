import React from 'react';
import image from '../assets/images/logo-DH.png';
import {Link, Route, Switch} from 'react-router-dom'; //se importa el route y el switch

//Se colocan las rutas
import GenresInDb from './GenresInDb'; // se importa el GenreInDb.js
import ContentWrapper from './ContentWrapper'; //Se importa para que no tome todo lo de la página
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import Error404 from './Error404';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="GenresInDb"> {/*<!-- Los componentes se escriben con mayúscula y se agrega el to para que nos envíe a la ruta -->*/}
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Genres</span> {/*<!-- Se Coloca el nombre de lo que queremos que se muestre-->*/}
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Last movie</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            {/*<!-- Aquí se agregan las rutas para el Microdesafio 1 -->*/}
            <Switch>
                <Route exact={true} path='/GenresInDb' component = {GenresInDb}></Route>
                <Route exact={true} path='/LastMovieInDb' component = {LastMovieInDb}></Route>
                <Route exact={true} path='/ContentRowMovies' component = {ContentRowMovies}></Route>
                <Route exact={true} path='/' component= {ContentWrapper}></Route>
                <Route component = {Error404}></Route>
            </Switch>
            
        </React.Fragment>
    )
}
export default SideBar;