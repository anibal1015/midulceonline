import React from "react";
import Navbar from "../components/Navbar";
import SidebarContainer from "../components/SidebarContainer";
import ContentHeader from "../components/ContentHeader";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Dulces colombianos"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Dashboard"}
                    ruta1={"/home"}
                />

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/355_0.jpg"
                                                        alt="User profile picture" />
                                                </div>
                                                <h3 className="profile-username text-center">Glacitas </h3>
                                                <p className="text-muted text-center">$1,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/QUIPITOS_F.jpg"
                                                        alt="User profile picture"height={10} width={10} />
                                                </div>
                                                <h3 className="profile-username text-center">Quipitos</h3>
                                                <p className="text-muted text-center">500</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/descarga.jfif"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Bocadillo</h3>
                                                <p className="text-muted text-center">$5,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/gala.jpg"
                                                        alt="User profile picture"height={10} width={10} />
                                                </div>
                                                <h3 className="profile-username text-center">Gala</h3>
                                                <p className="text-muted text-center">$2,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/galletas-festival-17_800x.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Festival Chocolate x12</h3>
                                                <p className="text-muted text-center">$7,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/malpa.jfif"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Chocomelo</h3>
                                                <p className="text-muted text-center">$10,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/dulcescafe.jpg"
                                                        alt="User profile picture"height={10} width={10} />
                                                </div>
                                                <h3 className="profile-username text-center">coffee light</h3>
                                                <p className="text-muted text-center">$6,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/chocobreak.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Choco Break</h3>
                                                <p className="text-muted text-center">$6,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/nucita.jpg"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Nucita</h3>
                                                <p className="text-muted text-center">$1,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/huevo-kinder.png"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Huevo Kinder</h3>
                                                <p className="text-muted text-center">$5,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/cocosete.jpg"
                                                        alt="User profile picture"height={10} width={10} />
                                                </div>
                                                <h3 className="profile-username text-center">Cocosete</h3>
                                                <p className="text-muted text-center">$5,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    







                        </div>

                    </div>

                </section>


            </div>
            <Footer></Footer>


        </div>

    );
}

export default Home;