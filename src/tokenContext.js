import { createContext } from "react";

const tokenContext = createContext({
  token: localStorage.getItem('token'),
  setToken: (newToken) => {
    console.log(newToken)
    localStorage.setItem('token', newToken)
}
});

export default tokenContext;