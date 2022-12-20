import './Footer.css';
import Logo1 from './img/marca1.png';
import Logo2 from './img/marca2.png';
import Logo3 from './img/marca3.png';
import Logo4 from './img/marca4.png';
import Logo5 from './img/marca5.png';


const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-up">
                <div className="footer-p">
                    <p>DESCARGO DE RESPONSABILIDAD IMPORTANTE: todo el contenido disponible en nuestro sitio web, en los sitios web hipervinculados,
                        y en las aplicaciones, foros, blogs, cuentas de redes sociales y otras plataformas asociados ("Sitio") tienen como único
                        objetivo proporcionarle información general procedente de fuentes externas.</p>
                </div>
                <div className="footer-c">
                    <p>Crypto Stadistics</p>
                    <p>© 2022</p>
                </div>
            </div>
            <div className="footer-down">
                <p>Developed by</p>
                <div>
                    <img src={Logo1} alt="Logo Angela" />
                    <img src={Logo2} alt="logo Andres" />
                    <img src={Logo3} alt="logo Brayan" />
                    <img src={Logo4} alt="logo Camila" />
                    <img src={Logo5} alt="logo Jesus" />
                </div>
            </div>
        </div>
    );
}
export default Footer;