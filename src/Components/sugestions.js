const items = [
    {img: "assets/img/bad.vibes.memes.svg", name: "bad.vibes.memes", reason: "Segue você"}, 
    {img: "assets/img/chibirdart.svg", name: "chibirdart", reason: "Segue você"}, 
    {img: "assets/img/razoesparaacreditar.svg", name: "razoesparaacreditar", reason: "Novo no Instagram"},
    {img: "assets/img/adorable_animals.svg", name: "adorable_animals", reason: "Segue você"},
    {img: "assets/img/smallcutecats.svg", name: "smallcutecats", reason: "Segue você"}
];

function Sugestion(props) {
    return (
        <div class="sugestao">
              <div class="usuario">
                <img src={props.imgprop} />
                <div class="texto">
                  <div class="nome">{props.nameprop}</div>
                  <div class="razao">{props.reasonprop}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
        </div>
    );

}

function Title() {
    return (
        <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
        </div>
    );
}

function Sugestions() {
    return (
        <div class="sugestoes">
            <Title />
            {items.map( item => <Sugestion imgprop={item.img} nameprop={item.name} reasonprop={item.reason} />)}
         </div>
    );
}

export default Sugestions;