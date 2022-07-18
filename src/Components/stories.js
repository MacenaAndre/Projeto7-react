const itemsStory = [
    {imgstory: "assets/img/9gag.svg", userstory: "9gag"},
    {imgstory: "assets/img/meowed.svg", userstory: "meowed"},
    {imgstory: "assets/img/barked.svg", userstory: "barked"},
    {imgstory: "assets/img/nathanwpylestrangeplanet.svg", userstory: "nathanwpylestrangeplanet"},
    {imgstory: "assets/img/wawawicomics.svg", userstory: "wawawicomics"},
    {imgstory: "assets/img/respondeai.svg", userstory: "respondeai"},
    {imgstory: "assets/img/filomoderna.svg", userstory: "filomoderna"},
    {imgstory: "assets/img/memeriagourmet.svg", userstory: "memeriagourmet"}
]

function Story(props) {
    return (
        <div class="story">
              <div class="imagem">
                <img src={props.imgstoryprop} />
              </div>
              <div class="usuario">
                {props.userstoryprop}
              </div>
        </div>
    );
}

function ArrowIcon() {
    return (
        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    );
}

function Stories() {
    return (
        <div class="stories">
            {itemsStory.map( item => <Story imgstoryprop={item.imgstory} userstoryprop={item.userstory}/>)}
            <ArrowIcon />
        </div>
    );
}

export default Stories;