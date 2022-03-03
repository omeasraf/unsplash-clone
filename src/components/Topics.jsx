import { NavLink, Routes, Route } from "react-router-dom";
import "../css/topicsbar.css";
import Editorial from "./Editorial";
import TopicView from "./TopicView";

var count = 0;
const Topics = ({ topics }) => {
  if (topics == null) return <></>;
  count = 0;
  return (
    <>
      <div className="container">
        <div className="topicsbar">
          <NavLink to={"/"} className="edTopic">
            Editorial
          </NavLink>
          <div className="vertical-line"></div>

          <div className="allTopics">
            {topics.map((topic, i) => {
              if (topic.featured) count++;
              return (
                <NavLink to={"/t/" + topic.slug} className="topic" key={i}>
                  <div>
                    <span className="L_F0b">
                      {count <= 2 && topic.featured ? (
                        <span className="WZ4Xc HmGUP">Featured</span>
                      ) : null}
                    </span>
                    <span className="S48vf KHq0c">{topic.title}</span>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/t/*" element={<TopicView />} />
        <Route path="/" element={<Editorial />} />
      </Routes>
    </>
  );
};

export default Topics;
