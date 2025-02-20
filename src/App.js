import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Earth from './Earth';
import astroLogo from './assets/ASTROLOCOS.png';
import tituloide from './assets/tituloide.png'
import mercurioimg from './assets/planetoidemercurio.jpg'
import venusimg from './assets/planetoidevenus.jpg'
import tierraimg from './assets/planetoidetierra.jpg'
import marteimg from './assets/planetoidemarte.jpg'
import jupiterimg from './assets/planetoidejupiter.jpg'
import saturnoimg from './assets/planetoidesaturno.jpg'
import uranoimg from './assets/planetoideurano.jpg'
import neptunoimg from './assets/planetoideneptuno.jpg'
import tss from './assets/sissoltit.png'

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/earth" element={<Earth />} />
                    <Route path="/" element={
                        <>
                            <div id="tit"><img src={astroLogo} alt="ASTROLOCOS" /></div>
                            <div className="cards-container">
                                <div className="card" id="planetas">
                                    <Link to="/earth" id="txtplaneta"> planetas </Link>
                                </div>
                                <div className="card" id="SS">
                                    <a id="txtso"> sistema solar </a>
                                </div>
                                <div className="card" id="cometas">
                                    <a id="txtcometa"> cometas </a>
                                </div>
                                <div className="card" id="anegro">
                                    <a id="txtan"> agujeros negros </a>
                                </div>
                                <div className="card" id="estrellas">
                                    <a id="txtstar"> estrellas </a>
                                </div>
                            </div>
                            <div className="planet">
                                <div className="moon"></div>
                            </div>
                            <nav className="navsub"><img src={tituloide} alt="planetas" /></nav>
                            <div className="galeria">
                                <div className="page1" id="avpla1">
                                    <div>
                                        <img src={mercurioimg} className="imgav" id="toidemer" alt="Mercurio"/>
                                        <div className="content1">
                                            <h6>MERCURIO (Mercurius)</h6>
                                            <h6>Tamaño:</h6>
                                            <p>4,880 kilómetros de diámetro.</p>
                                            <h6>Tiempo de rotación:</h6>
                                            <p>Aproximadamente 59 días terrestres.</p>
                                            <h6>Tiempo de traslación:</h6>
                                            <p>Alrededor de 88 días terrestres.</p>
                                            <h6>Temperaturas extremas:</h6>
                                            <p>Desde -173°C durante la noche hasta 427°C durante el día.</p>
                                            <h6>Dato curioso:</h6>
                                            <p>Mercurio tiene una órbita elíptica que causa un efecto de marea de sol, lo que significa que su rotación se desacelera con el tiempo.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={venusimg} className="imgav" id="toideve" alt="Venus"/>
                                        <div className="content2">
                                            <h6>VENUS (Venus)</h6>
                                            <h6>Tamaño:</h6>
                                            <p>Aproximadamente 12,104 kilómetros de diámetro.</p>
                                            <h6>Tiempo de rotación:</h6>
                                            <p>Alrededor de 243 días terrestres.</p>
                                            <h6>Tiempo de traslación:</h6>
                                            <p>Cerca de 225 días terrestres.</p>
                                            <h6>Temperaturas extremas:</h6>
                                            <p>Su temperatura superficial es de unos abrasadores 462°C.</p>
                                            <h6>Dato curioso:</h6>
                                            <p>Venus tiene una atmósfera densa compuesta principalmente de dióxido de carbono, lo que provoca un efecto invernadero descomunal.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={tierraimg} className="imgav" id="toidetie" alt="Tierra"/>
                                        <div className="content3">
                                            <h6>TIERRA (Terra)</h6>
                                            <h6>Tamaño:</h6>
                                            <p>12,742 kilómetros de diámetro.</p>
                                            <h6>Tiempo de rotación:</h6>
                                            <p>Aproximadamente 24 horas.</p>
                                            <h6>Tiempo de traslación:</h6>
                                            <p>Un año terrestre (365 días y unas horas).</p>
                                            <h6>Temperaturas extremas:</h6>
                                            <p>Desde -89.2°C en la Antártida hasta 56.7°C en el Valle de la Muerte, California.</p>
                                            <h6>Dato curioso:</h6>
                                            <p>La Tierra es el único planeta conocido que alberga vida.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={marteimg} className="imgav" id="toidemar" alt="Marte"/>
                                        <div className="content4">
                                            <h6>MARTE (Mars)</h6>
                                            <h6>Tamaño:</h6>
                                            <p>6,779 kilómetros de diámetro.</p>
                                            <h6>Tiempo de rotación:</h6>
                                            <p>Cerca de 24.6 horas.</p>
                                            <h6>Tiempo de traslación:</h6>
                                            <p>Alrededor de 687 días terrestres.</p>
                                            <h6>Temperaturas extremas:</h6>
                                            <p>Desde -87°C hasta -5°C.</p>
                                            <h6>Dato curioso:</h6>
                                            <p>Marte tiene la montaña más alta del sistema solar, el Monte Olimpo, que es tres veces más alta que el Monte Everest.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="page2" id="avpla2">
                                    <div>
                                        <img src={jupiterimg} className="imgav" id="toidejup" alt="Júpiter"/>
                                        <div className="content5">
                                            <h6>JÚPITER (Iuppiter)</h6>
                                            <h6>Tamaño:</h6>
                                            <p>139,822 kilómetros de diámetro.</p>
                                            <h6>Tiempo de rotación:</h6>
                                            <p>Aproximadamente 9.9 horas.</p>
                                            <h6>Tiempo de traslación:</h6>
                                            <p>Cerca de 11.9 años terrestres.</p>
                                            <h6>Temperaturas extremas:</h6>
                                            <p>Desde -145°C en las nubes superiores hasta 1,000°C en el núcleo.</p>
                                            <h6>Dato curioso:</h6>
                                            <p>Júpiter tiene una gran mancha roja, una tormenta gigante que ha estado activa durante al menos 400 años.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={saturnoimg} className="imgav" id="toidesat" alt="Saturno"/>
                                        <div className="content6">
                                            <h6>SATURNO (Saturnus)</h6>
                                            <h6>Tamaño:</h6>
                                            <p>116,464 kilómetros de diámetro.</p>
                                            <h6>Tiempo de rotación:</h6>
                                            <p>Alrededor de 10.7 horas。</p>
                                            <h6>Tiempo de traslación:</h6>
                                            <p>Aproximadamente 29.5 años terrestres。</p>
                                            <h6>Temperaturas extremas:</h6>
                                            <p>Desde -185°C en las nubes superiores hasta -122°C en el núcleo。</p>
                                            <h6>Dato curioso:</h6>
                                            <p>Saturno es conocido por sus impresionantes anillos compuestos principalmente de partículas de hielo y roca。</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={uranoimg} className="imgav" id="toideur" alt="Urano"/>
                                        <div className="content7">
                                            <h6>URANO (Uranus)</h6>
                                            <h6>Tamaño:</h6>
                                            <p>50,724 kilómetros de diámetro。</p>
                                            <h6>Tiempo de rotación:</h6>
                                            <p>Cerca de 17.2 horas。</p>
                                            <h6>Tiempo de traslación:</h6>
                                            <p>Alrededor de 84 años terrestres。</p>
                                            <h6>Temperaturas extremas:</h6>
                                            <p>Desde -224°C hasta -218°C。</p>
                                            <h6>Dato curioso:</h6>
                                            <p>Urano es el único planeta del sistema solar que gira de lado, lo que significa que su eje de rotación está casi en un plano perpendicular al plano de su órbita。</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={neptunoimg} className="imgav" id="toidenep" alt="Neptuno"/>
                                        <div className="content8">
                                            <h6>NEPTUNO (Neptunus)</h6>
                                            <h6>Tamaño:</h6>
                                            <p>49,244 kilómetros de diámetro。</p>
                                            <h6>Tiempo de rotación:</h6>
                                            <p>Aproximadamente 16.1 horas。</p>
                                            <h6>Tiempo de traslación:</h6>
                                            <p>Cerca de 164.8 años terrestres。</p>
                                            <h6>Temperaturas extremas:</h6>
                                            <p>Desde -218°C hasta -200°C。</p>
                                            <h6>Dato curioso:</h6>
                                            <p>Neptuno tiene vientos atmosféricos extremadamente rápidos, con velocidades que pueden superar los 2,000 kilómetros por hora。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav className="navsub" id="sst"><img src={tss} alt="sissoltit" /></nav>
                            <div id="solarSystem">
                                <div className="sun1" id="sol1"></div>
                                <div className="mercury1-outline" id="mercurio1-sinlinea">
                                    <div className="mercury1" id="mercurio1">
                                        <p>Mercurio</p>
                                    </div>
                                </div>
                                <div className="venus1-outline" id="venus1-sinlinea">
                                    <div className="venus1" id="venus1">
                                        <p>Venus</p>
                                    </div>
                                </div>
                                <div className="earth1-outline" id="tierra1-sinlinea">
                                    <div className="earth1" id="tierra1">
                                        <div className="earth1-circle" id="tierra1-circulo">
                                            <div className="earth1-inner" id="tierra1-dentro"></div>
                                        </div>
                                        <p>Tierra</p>
                                    </div>
                                </div>
                                <div className="mars1-outline" id="marte1-sinlinea">
                                    <div className="mars1" id="marte1">
                                        <p>Marte</p>
                                    </div>
                                </div>
                                <div className="jupiter1-outline" id="jupiter1-sinlinea">
                                    <div className="jupiter1" id="jupiter1">
                                        <p>Jupiter</p>
                                    </div>
                                </div>
                                <div className="saturn1-outline" id="saturno1-sinlinea">
                                    <div className="saturn1" id="saturno1">
                                        <p>Saturno</p>
                                    </div>
                                </div>
                                <div className="uranus1-outline" id="urano1-sinlinea">
                                    <div className="uranus1" id="urano1">
                                        <p>Urano</p>
                                    </div>
                                </div>
                                <div className="neptune1-outline" id="neptuno1-sinlinea">
                                    <div className="neptune1" id="neptuno1">
                                        <p>Neptuno</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;