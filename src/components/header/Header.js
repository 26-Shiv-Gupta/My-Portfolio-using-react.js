import "./Header.css"
import white_bright_icon from '../../img/brightness-low (1).png'
import white_dark_icon from '../../img/moon.png'
import black_bright_icon from '../../img/brightness-low.png'
import black_dark_icon from '../../img/moon (1).png'

function Header() {
    return (
        <header>
        <div id="header-container" class="flex-space-between">
            <div id="left">
                <a href="#front-container" class="text-deco-none"><p><span class="red">D</span>YNAMIC</p></a>
            </div>
            <div id="right">
                <ul class="flex-both-center list-style-none" id="header-ul">
                    <li><a href="#about-container">About</a></li>
                    <li><a href="javascript:void(0);"><span class="grey">Experience</span></a></li>
                    <li><a href="#project-container">Projects</a></li>
                    <li><a href="#contact-container">Contact</a></li>
                    <li>
                        <div className="bright-dark-mode-btn">
                            <div className="circle"></div>
                            <div className="bright-mode flex-both-center">
                                <img src={white_bright_icon} alt="image"/>
                            </div>
                            <div className="dark-mode flex-both-center">
                                <img src={black_dark_icon} alt="image"/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </header>
    );
}

export default Header;