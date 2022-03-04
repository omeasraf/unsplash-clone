import axios from "axios";

const url = "https://api.unsplash.com/";
const apiSlug = `?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`;

export var getTopics = (count, order_by) => {
  var topics = `${url}topics${apiSlug}&per_page=${count}&order_by=${order_by}`;
  return axios.get(topics);
};

export var getRandomImage = (count, orientation) => {
  var link = `${url}photos/random${apiSlug}&per_page=${count}&orientation=${orientation}`;
  return axios.get(link);
};

export var getPhotos = (count, page) => {
  var link = `${url}photos${apiSlug}&per_page=${count}&page=${page}&order_by=latest`;
  return axios.get(link);
};
