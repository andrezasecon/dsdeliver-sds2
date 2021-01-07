import './styles.css';
import { ReactComponent as IconYoutube } from './youtube.svg';
import { ReactComponent as IconLinkedin } from './linkedin.svg';
import { ReactComponent as IconIntagram } from './instagram.svg';

function Footer(){
    return (    
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <IconYoutube />
                </a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                    <IconLinkedin />
                </a>
                <a href="https://www.istagram.com/devsuperior.ig" target="_new">
                    <IconIntagram />
                </a>

            </div>
        </footer>
    
    )
}

export default Footer;