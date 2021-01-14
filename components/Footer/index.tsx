
import Logo from "../Logo";

const Footer: React.FC = () => {
    return <footer>
        <div id="footer">
            <div id="footer__cont">
                <div id="footer__list">
                    <ul>
                        <li>GitHub</li>
                        <li>Vercel</li>
                        <li>Figma</li>
                        <li>VK</li>
                    </ul>
                    <ul>
                        <li>MD for GraphQL</li>
                        <li>MD for TypeScript</li>
                        <li>MD for Next.JS</li>
                        <li>MD for Express.js</li>
                    </ul>
                    <ul>
                        <li>License</li>
                        <li>Documents</li>
                        <li>Deploy</li>
                        <li>NODE.js</li>
                    </ul>
                    <ul>
                        <li>Instagram</li>
                        <li>VK</li>
                        <li>Facebook</li>
                        <li>Hotmail</li>
                    </ul>
                </div>
                <div className = "footer_logo">
                    <Logo />
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;