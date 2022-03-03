import { useLocation } from "react-router-dom";

const TopicView = () => {
  const location = useLocation();

  const pathname = location.pathname.split("/")[2];
  return <span>Path : {pathname}</span>;
};

export default TopicView;
