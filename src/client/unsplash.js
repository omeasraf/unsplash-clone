import axios from "axios";

const url = "https://api.unsplash.com/";
const apiSlug = `?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`;

export var getTopics = () => {
  var topics = `${url}topics${apiSlug}&per_page=30`;
  return axios.get(topics);
};
