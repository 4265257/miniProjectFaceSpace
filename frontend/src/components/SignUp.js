import Header from "./Header";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const { currentUser, setCurrentUser, userAfterSubmit } =
    useContext(UserContext);
  const [input, setInput] = useState("");
  let history = useHistory();
  useEffect(() => {
    if (currentUser) {
      history.push("/");
    }
  }, [currentUser]);

  return (
    <div>
      <Header></Header>
      <SignUpArea>
        <PicBackground src={"./images/facespace_bg.jpg"} />
        <TextArea>
          <input
            value={input}
            type="text"
            style={{ height: 20, width: 194 }}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <SubmitButton
            onClick={() => {
              setCurrentUser(input);
              userAfterSubmit(input);
            }}
          >
            Submit
          </SubmitButton>
        </TextArea>
      </SignUpArea>
    </div>
  );
};

const TextArea = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  display: inline-flex;
  flex-direction: column;
  background: rgba(240, 240, 240, 0.6);
`;

const SubmitButton = styled.button`
  background-color: var(--primary-color);
  font-family: var(--heading-font-family);
  color: #fff;
  font-size: 20px;
  margin-top: 10px;
  width: 200px;
`;
const SignUpArea = styled.div`
  position: relative;
`;
const PicBackground = styled.img`
  height: 100%;
  width: 100%;
`;
export default SignUp;
