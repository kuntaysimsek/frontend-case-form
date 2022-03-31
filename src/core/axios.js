import axios from "axios";

export async function postUser(e) {
  await axios
    .post("https://jsonplaceholder.typicode.com/users", e)
    .then((response) => {
      if (response.request.status) {
        setTimeout(() => {
          window.open("https://www.medianova.com");
        }, 5000);
      }
    })
    .catch((error) => {
      this.errorMessage = error.message;
      console.error("There was an error!", error);
    });
}
