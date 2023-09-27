import logo from "./images/eagle.png";

export default function AppBanner() {
    return (
        <div id="app_banner_container">
            <div id="app_banner_logo">
                <img src={logo} width="60" height="60"></img>
            </div>
            <div id="app_banner_title">
                Incumbency Anaylsis
            </div>
            <div id="app_banner_reset_button">
                <button id="reset_button">This Is The Reset Button</button>
            </div>
        </div>
    );
}