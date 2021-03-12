import React from 'react';
import EletricistaInstalador from './img/EletricistaInstalador.jpg';
import EmpreenderSenai from './img/EmpreenderSenai.png';
import Industria4 from './img/Industria4.png';
import './style.css';

function Card(){
    return(
        <main>

            <div className="Card">
                <div className="Titulo"> 
                    <h2>
                        ELETRICISTA INSTALADOR
                    </h2>
                </div>

                <div className="imagem">
                    <img src={EletricistaInstalador} id="cardImg" />
                </div>

                <div className="descricao">
                    <p><strong>Carga Horária</strong> : 160 horas;</p>
                    <p><strong>Preço</strong>: R$2.070,00</p>
                    <p><strong>Dias</strong>: Sábado</p>
                    <p><strong>Horário</strong>: 08:00 às 17:00</p>
                </div>
                </div>

                <div className="Card">
                    <div className="Titulo"> 
                        <h2>
                        EMPREENDER SENAI
                        </h2>
                    </div>

                    <div className="imagem" >
                        <img src={EmpreenderSenai} id="cardImg" />
                    </div>

                    <div className="descricao">
                        <p><strong>Carga Horária</strong> : 20 horas;</p>
                        <p><strong>Preço</strong>: Grátis</p>
                        <p><strong>Dias</strong>: Livre</p>
                        <p><strong>Horário</strong>: Livre</p>
                    </div>

                </div>

                <div className="Card">
                    <div className="Titulo"> 
                        <h2>
                        DESVENDANDO A INDÚSTRIA 4.0
                        </h2>
                    </div>

                    <div className="imagem">
                        <img src={Industria4} id="cardImg"/>
                    </div>

                    <div className="descricao">
                        <p><strong>Carga Horária</strong> : 20 horas;</p>
                        <p><strong>Preço</strong>: Grátis</p>
                        <p><strong>Dias</strong>: Livre</p>
                        <p><strong>Horário</strong>: Livre</p>
                    </div>

                </div>
        </main>
    );
}
export default Card;