import Homebodybottomaboutme from "./Homebody-bottom-aboutme/Homebody-bottom-aboutme";
import Homebodybottommiddle from "./Homebody-bottom-middle/Homebody-bottom-middle";
import Homebodybottomright from "./Homebody-bottom-right/Homebody-bottom-right";

const Homebodybottom = () => {
        <div>
          <div class="home_body_bottom_aboutme">
            <Homebodybottomaboutme />
          </div>
          <div class="home_body_bottom_middle">
            <Homebodybottommiddle />
          </div>
          <div class="home_body_bottom_right">
            <Homebodybottomright />
          </div>
        </div>
};
 
export default Homebodybottom;
