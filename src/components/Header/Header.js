import './Header.scss';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';


export const Header = () => {
    const header = document.createElement("header");
    const app = document.querySelector("#app");

    const logo = Logo();
    const nav = NavLinks();

    header.append(logo, nav);
    app.append(header);
}