import { useEffect, useState } from "react";
import { getTopics } from "../client/unsplash";
import Topics from "../components/Topics";
import "../css/home.css";

const Home = () => {
  const [allTopics, setAllTopics] = useState();
  useEffect(() => {
    getTopics()
      .then((data) => {
        setAllTopics(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Topics topics={allTopics} />
    </>
  );
};

export default Home;
