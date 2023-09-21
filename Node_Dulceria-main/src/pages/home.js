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
                    titulo={"Heladeria"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={""}
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
                                                        src="../../dist/img/img1.jfif"
                                                        alt="User profile picture" />
                                                </div>
                                                <h3 className="profile-username text-center">Frutos Rojos -tarro </h3>
                                                <p className="text-muted text-center">$10,000</p>
                                                <Link to={"/crearcuenta"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/img2.jfif"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Artesanal</h3>
                                                <p className="text-muted text-center">$3,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/img3.jfif"
                                                        alt="User profile picture"height={10} width={10} />
                                                </div>
                                                <h3 className="profile-username text-center">Polet</h3>
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
                                                        src="../../dist/img/img4.jfif"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Coffee</h3>
                                                <p className="text-muted text-center">$3,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/img5.jfif"
                                                        alt="User profile picture"height={10} width={10} />
                                                </div>
                                                <h3 className="profile-username text-center">Bocatto</h3>
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
                                                        src="../../dist/img/img6.jfif"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Vabilo vasito</h3>
                                                <p className="text-muted text-center">$4,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/img7.jfif"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Choco Mami</h3>
                                                <p className="text-muted text-center">$3,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/img8.jfif"
                                                        alt="User profile picture"height={10} width={10} />
                                                </div>
                                                <h3 className="profile-username text-center">Tarro de Chocolate</h3>
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
                                                        src="../../dist/img/img9.jfif"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">Choco Cono </h3>
                                                <p className="text-muted text-center">$3,000</p>
                                                <Link to={"/pedidos"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <div className="card card-primary card-outline">
                                            <div className="card-body box-profile">
                                                <div className="text-center">
                                                    <img className="profile-user-img img-fluid"
                                                        src="../../dist/img/img10.jfif"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">mexcla</h3>
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
                                                        src="../../dist/img/img11.jfif"
                                                        alt="User profile picture" height={10} width={10}/>
                                                </div>
                                                <h3 className="profile-username text-center">GO Yourt</h3>
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
                                                        src="../../dist/img/img12.jfif"
                                                        alt="User profile picture"height={10} width={10} />
                                                </div>
                                                <h3 className="profile-username text-center">Sandwich</h3>
                                                <p className="text-muted text-center">$5,000</p>
                                                <Link to={"/crearcuenta"} className="btn btn-primary btn-block"><b>Comprar</b></Link>
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