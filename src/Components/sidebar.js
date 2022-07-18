import Sugestions from "./sugestions";

function User(props) {
    return (
        <div class="usuario">
            <img src={props.img} />
            <div class="texto">
              <strong>{props.username}</strong>
              {props.name}
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
            <User img={"assets/img/catanacomics.svg"} username={"catanacomics"} name={"Catana"}/>
            <Sugestions />
            <Links />
            <Copyright />
        </div>
    );
}

export default Sidebar;