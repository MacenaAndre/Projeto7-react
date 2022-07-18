import Sugestions from "./sugestions";

function User() {
    return (
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
              <strong>catanacomics</strong>
              Catana
            </div>
        </div>
    );
}
function Links() {
    return (
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    );
}
function Copyright() {
    return (
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    );
}

function Sidebar() {
    return (
        <div class="sidebar">
            <User />
            <Sugestions />
            <Links />
            <Copyright />
        </div>
    );
}

export default Sidebar;