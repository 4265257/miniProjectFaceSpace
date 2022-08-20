import Header from "./Header";
import { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const Homepage = () => {
  const { currentData, currentUser } = useContext(UserContext);
  if (!currentData) {
    return null;
  }

const friendIds =  currentData.data.find((item) => item?.name?.toLowerCase() === currentUser?.toLowerCase())?.friends || []
  
  return (
    <div>
      <Header></Header>
      <br></br>
      <h1 style={{marginLeft:10}}>All Facespace members</h1>
      {currentData.data.map((user) => {
        return (
          <UserArea key={user.id}>
            <Link
              to={`/users/${user.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <User>
              <UserPic src={user.avatarUrl} />
                {friendIds.includes(user.id) && <Friend>Friend</Friend>}
              </User>
            </Link>
          </UserArea>
        );
      })}
    </div>
  );
};
const UserArea = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
const User = styled.div`
 position: relative;
`;
const UserPic = styled.img`
  margin: 10px;
  height: 100px;
  width: 100px;
  border: 2px solid;
  border-color: var(--primary-color);
  &:hover {
    border: 5px solid;
    border-color: var(--primary-color);
  }
  `;
const Friend = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center; 
 background: rgba(240, 240, 240, 0.6);
  color: black;
`;
export default Homepage;
