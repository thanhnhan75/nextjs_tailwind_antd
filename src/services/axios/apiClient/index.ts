import axios from "axios";
// import userStore from "stores/user";

export default axios.create({
  headers: {
    // Authorization: userStore.getState().access_token ? "Bearer " + userStore.getState().access_token : "",
  },
});
