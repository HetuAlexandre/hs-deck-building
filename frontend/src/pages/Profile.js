import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../Provider/UserContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [error, setError] = useState();
  const history = useHistory();

  const handleLogout = (ev) => {
    ev.preventDefault();
    setUser();
    history.pushState("/");
  };

  useEffect(() => {
    fetch("/getUser", {
      method: "POST",
      body: JSON.stringify({ userId: user._id }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        if (json.status === 200) {
          setUser(json.user);
        } else {
          setError("Please try again.");
        }
      });
  }, []);
  return (
    <Wrapper>
      {!user ? (
        <h1>You must create an account first.</h1>
      ) : (
        <Container>
          <h3>Profile details</h3>
          {error && <div>{error}</div>}
          <Info>
            <b>Username: </b>
            {user.username}
          </Info>
          <Info>
            <b>User Id: </b>
            {user._id}
          </Info>
          <Info>
            <b>User email: </b>
            {user.email}
          </Info>
          <Info>
            <b>User password: </b>
            *********
          </Info>
          <div>
            <ButtonLogout onClick={handleLogout} to={"/logout"}>
              Logout
            </ButtonLogout>
          </div>
        </Container>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff5d0;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 5%;
  display: flex;
`;
const Info = styled.div`
  margin-top: 1em;
`;
const ButtonLogout = styled.button``;

export default Profile;
