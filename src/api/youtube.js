import axios from "axios";

const KEY = "AIzaSyAHPaZlLS_8YMz5FgqSZLz5UbVzgxJtOP8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
