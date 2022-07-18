import React from "react";

const itemsPost = [
    {userimg: "assets/img/meowed.svg", username: "meowed", postimg: "assets/img/gato-telefone.svg", likeimg: "assets/img/respondeai.svg", likeuser: "respondeai", numblike: "101.523"},
    {userimg: "assets/img/barked.svg", username: "barked", postimg: "assets/img/dog.svg", likeimg: "assets/img/adorable_animals.svg", likeuser: "adorable_animals", numblike: "99.159"},
    {userimg: "assets/img/memeriagourmet.svg", username: "memeriagourmet", postimg: "assets/video/video.mp4", likeimg: "assets/img/9gag.svg", likeuser: "9gag", numblike: "78.570"}
]

function Post(props) {

    const [click, setClick] = React.useState("heart-outline");

    function LikeIcon() {
        if(click === "heart-outline") {
            setClick("heart");
        } else {
            setClick("heart-outline");
        }
    }

    function LikeImg() {
        if(click === "heart-outline") {
            setClick("heart");
        }
    }
    if(props.pimg.split(".")[1] === "svg") {
       return (
        <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={props.uimg} />
                  {props.uname}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo" onClick={LikeImg}>
                <img src={props.pimg} />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name={click} onClick={LikeIcon}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src={props.limg} />
                  <div class="texto">
                    Curtido por <strong>{props.luser}</strong> e <strong>outras {props.numbl} pessoas</strong>
                  </div>
                </div>
              </div>
        </div>
       );
    } else {
        return (
            <div class="post">
                  <div class="topo">
                    <div class="usuario">
                      <img src={props.uimg} />
                      {props.uname}
                    </div>
                    <div class="acoes">
                      <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                  </div>
    
                  <div class="conteudo" onClick={LikeImg}>
                    <video controls autoPlay>
                        <source src={props.pimg} type="video/mp4"/>
                    </video> 
                  </div>
    
                  <div class="fundo">
                    <div class="acoes">
                      <div>
                        <ion-icon name={click} onClick={LikeIcon}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                      </div>
                      <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                      </div>
                    </div>
    
                    <div class="curtidas">
                      <img src={props.limg} />
                      <div class="texto">
                        Curtido por <strong>{props.luser}</strong> e <strong>outras {props.numbl} pessoas</strong>
                      </div>
                    </div>
                  </div>
            </div>
           );
    }
}

function Posts() {
    return (
        <div class="posts">
            {itemsPost.map( item => <Post uimg={item.userimg} uname={item.username} pimg={item.postimg} limg={item.likeimg} luser={item.likeuser} numbl={item.numblike}/>)}
        </div>
    );
}

export default Posts; 