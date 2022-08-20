import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
export const UserContext = createContext(null);
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentData, setCurrentData] = useState(null);
  let history = useHistory();

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setCurrentData(data);
      });
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const userAfterSubmit = (input) => {
    localStorage.setItem("user", input);
    history.push("/");
  };
  const signOutFunction = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
  };
  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userAfterSubmit,
        currentData,
        setCurrentData,
         signOutFunction
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
