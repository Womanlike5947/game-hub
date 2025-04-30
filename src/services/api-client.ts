import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c646903d6a5341698744ceaf7ced9274",
  },
});
