import axios from 'axios'

const API = "http://localhost:3000"

export const auth = async (login) => {
  await axios.post(`${API}/login`, login).then(
    (response) => {
      localStorage.setItem("token", response.data.access_token)
    }
  );
  // await fetch(API + "/login", {
  //   method: "POST",
  //   body: JSON.stringify(login),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // }).then(
  //   (response) => console.log(response.data)
  // );
}