import Posts from "./posts";
import Stories from "./stories";

function Left() {
    return (
        <div class="esquerda">
            <Stories />
            <Posts />
        </div>
    );
}

export default Left;