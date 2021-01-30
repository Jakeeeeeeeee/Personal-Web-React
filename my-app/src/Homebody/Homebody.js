import Homebodytop from "./Homebody-top/Homebody-top";
import Homebodybottom from "./Homebody-bottom/Homebody-bottom";
import "./Homebody.css";
import Page from "../Page/Page";

const Homebody = ({ active }) => (
  <Page active={active} header={(<Homebodytop />)}>
    <Homebodybottom />
  </Page>
);

export default Homebody;
