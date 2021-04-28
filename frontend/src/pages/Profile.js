import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
    <PageWrapper>
      {!user ? (
        <H1 to={"./signup"}>You must create an account first.</H1>
      ) : (
        <Wrapper>
          <ImgCover />
          <Container>
            {error && <div>{error}</div>}
            <InfoContainer>
              <Title>PROFILE DETAILS</Title>
              <Info>
                Username:
                <Span>{user.name}</Span>
              </Info>
              <Info>
                User Id:
                <Span>{user._id}</Span>
              </Info>
              <Info>
                Email:
                <Span>{user.email}</Span>
              </Info>
              <Info>
                Password:
                <Span>******</Span>
              </Info>
            </InfoContainer>
            <ButtonLogout onClick={handleLogout} to={"/login"}>
              Logout
            </ButtonLogout>
          </Container>
        </Wrapper>
      )}
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  background-color: #fff5d0;
  position: relative;
`;
const ImgCover = styled.div`
  background-image: url(/images/bg_home.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
`;
const H1 = styled(Link)``;
const Container = styled.div`
  width: 400px;
  height: 400px;
  border: 3px solid rgba(21, 26, 35, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  position: absolute;
  background-color: #fff5d0;
  top: 20px;
  left: 35%;
`;
const Title = styled.h1`
  font-size: 35px;
  margin-bottom: 50px;
  color: rgba(21, 26, 35, 0.95);
`;
const InfoContainer = styled.div`
  height: 100%;
`;
const Info = styled.div`
  color: rgba(21, 26, 35, 0.95);
  margin-top: 1em;
  font-size: 20px;
`;
const Span = styled.span`
  margin-left: 10px;
`;
const ButtonLogout = styled.button`
  color: white;
  font-size: 16px;
  font-weight: 900;
  width: 120px;
  height: 35px;
  margin-bottom: 50px;
  border-radius: 5px;
  background-image: linear-gradient(180deg, #ba0707, #e30909, #ba0707);
  &:hover {
    box-shadow: 0 0 25px #e30909;
    border: 3px solid #e30909;
    background-image: linear-gradient(90deg, #b32020, #e30909, #b32020);
  }
`;

export default Profile;
