import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../UserContext";

const Header = () => {
  const { currentUser,signOutFunction } = useContext(UserContext);
  return (
    <header>
      <HeaderArea>
        <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
          <h2 style={{ marginLeft: 10 }}>FaceSpace</h2>
        </Link>
        {currentUser && (
          <div>
            <h1 style={{ color: "white", marginTop: 10, marginLeft: 10 }}>
              {currentUser}
            </h1>
            <Button style={{fontSize:15,  marginRight: 15}}onClick={signOutFunction}>sign out</Button>
          </div>
        )}
        {!currentUser && (
          <Link to={`/sign-up`}>
            <Button>sign up</Button>
          </Link>
        )}
      </HeaderArea>
    </header>
  );
};
const HeaderArea = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
`;
const Button = styled.button`
  background-color: var(--primary-color);
  font-family: var(--heading-font-family);
  color: #fff;
  font-size: 20px;
`;

export default Header;
