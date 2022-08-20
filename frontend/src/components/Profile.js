import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import {  useState, useEffect, useContext } from "react";
import styled from "styled-components";

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({});
  const [allUsers, setallUsers] = useState({});

  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then((res) => res.json())
      .then(
        (data) => setProfile(data)
      );
  }, [id]);

  useEffect(() => {
    fetch(`/api/users`)
      .then((res) => res.json())
      .then(
        (data) => setallUsers(data)
      );
  }, []);

  if (!profile.data) {
    return null;
  }
  if (!allUsers.data) {
    return null;
  }
  if (!id) {
    return null;
  }

  const friends = profile.data.friends.map((userId) => {
    const friend = allUsers.data.find((element) => element.id === userId);
    return friend;
  });

  return (
    <div>
      <Header></Header>

      <PicBackground src={"../images/facespace_bg.jpg"} />
      <UserArea>
        <User>
          <UserPic src={profile.data.avatarUrl} />
          <UserName>
            <h1>{profile.data.name}</h1>
          </UserName>
        </User>
        <Friends>
          <h1>{profile.data.name}'s Friends</h1>
          {friends.map((user) => (
            <FriendArea key={user.id}>
              <UserFriendPic src={user.avatarUrl} />
              <FriendName>{user.name}</FriendName>
            </FriendArea>
          ))}
        </Friends>
      </UserArea>
    </div>
  );
};
const UserPic = styled.img`
  height: 150px;
  width: 150px;
  border: 2px solid;
  border-color: var(--primary-color);
`;
const UserFriendPic = styled.img`
  height: 100px;
  width: 100px;
  border: 2px solid;
  border-color: var(--primary-color);
`;
const FriendName = styled.div`
  position: absolute;
  bottom: 5px;
  width: 100%;
  text-align: center;
 background: rgba(240, 240, 240, 0.6);
  color: black;
`;
const UserName = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 15px;
`;

const Friends = styled.div`
`
const User = styled.div`
  margin-bottom: 100px;
  display: inline-flex;
  flex-direction: row;
  `;
const PicBackground = styled.img`
  margin-top: -30%;
  object-fit: cover;
  height: 700px;
  width: 100%;
  `;
const UserArea = styled.div`
  margin-top: -30%;
  margin-left: 30%;
  display: inline-flex;
  flex-direction: column;
  position: relative;
  `;
const FriendArea = styled.div`
  position: relative;
margin-right:15px;
  display: inline-flex;
  flex-direction: row;
`;

export default Profile;
