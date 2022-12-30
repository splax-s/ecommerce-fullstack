const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWRiMzhhMmY3YjIxZGNmZDUzYTQ3ZSIsImlhdCI6MTY3MjM2MzM4MywiZXhwIjoxNjcyNDQ5NzgzfQ.TZ5ywYEt4it5zNo8331cNwxfvwfyN7jV01kFpNBlYSI`,
    Accept: "application/json",
  },
};
