import React from 'react';
import './Footer.css';

function Footer() { 
    return (
        <div className='footer'>
            <div className='footer__inicio'>
                <a href="#">Inicio de pagina</a>
            </div>
            <div className="footer__info">
                <div className="footer__row">
                    <span className='footer__titulo'>Conocenos</span>
                    <span className='span'>Trabajar en Amazon</span>
                    <span className='span'>Informacion Corporativa</span>
                    <span className='span'>Departamento de prensa</span>
                </div>
                <div className="footer__row">
                    <span className='footer__titulo'>Gana dinero con nosotros</span>
                    <span className='span'>Vender en Amazon</span>
                    <span className='span'>Vender en Amazon Handmade</span>
                    <span className='span'>Publica tu libro en Kindle</span>
                    <span className='span'>Programa de afiliados</span>
                    <span className='span'>Anuncia tus productos</span>
                </div>
                <div className="footer__row">
                    <span className='footer__titulo'>Podemos Ayudarte</span>
                    <span className='span'>Amazon y COVID-19</span>
                    <span className='span'>Devolver o remplazar productos</span>
                    <span className='span'>Gestionar contenido y dispositivos</span>
                    <span className='span'>Ayuda</span>
                    <span className='span'>Anuncia tus productos</span> 
                </div>
                <div className="footer__row">
                    <span className='footer__titulo'>Metodos de pago</span>
                    <span className='span'>Tarjetas de crédito y débito</span>
                    <span className='span'>Tarjetas de regalo</span>
                    <span className='span'>Meses sin intereses</span>
                    <span className='span'>Amazon Cash</span>
                    <span className='span'>Amazon Recargable</span>
                </div>
            </div>

            <div className="footer__image">
                <div className="image">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" width="80px"/>
                </div>
                <span>Australia | Alemania| Brasil | Canadá | China | España | Estados Unidos | Francia | India | Italia | Japón | Países | Regiones Bajos | Reino Unido | Singapur | Turquía | Y también: Amazon Web Services</span>
            </div>
            <div className="footer__copyright">
                <span> Condiciones de uso  |  Aviso de privacidad  ©  Copyright by Manu Aguis, Amazon.com, Inc. o afiliados. | Todos los derechos reservados </span>
            </div>

        </div>

)
}

export default Footer
