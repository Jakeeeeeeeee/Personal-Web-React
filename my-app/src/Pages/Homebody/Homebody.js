import Homebodytop from "./Homebody-top/Homebody-top";
import Homebodybottom from "./Homebody-bottom/Homebody-bottom";
import "./Homebody.css";
import PageProps from "../PageProps/PageProps";

const Homebody = ({ active }) => (
  <PageProps active={active} header={(<Homebodytop />)}>
    <Homebodybottom />
  </PageProps>
);

export default Homebody;
