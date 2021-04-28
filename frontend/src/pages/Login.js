import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../Provider/UserContext";
import { emailIsValid, passwordIsValid } from "../components/Validate";

const Login = () => {
  const { status, setUser, setStatus } = useContext(UserContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const [formError, setFormError] = useState();
  const [clicked, setClicked] = useState();
  const history = useHistory();

  const handleClick = (ev) => {
    ev.preventDefault();
    setStatus("loading");
    setClicked(true);

    if (!emailIsValid(form.email)) {
      setFormError("Email is invalid.");
      setStatus("idle");
    } else if (!passwordIsValid(form.password)) {
      setFormError("Password incorrect");
      setStatus("idle");
    } else {
      fetch("/login", {
        method: "POST",
        body: JSON.stringify({ ...form }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setStatus("idle");
          if (json.status === 201) {
            setUser(json.user);
            setError("");
            history.push("/");
          } else {
            setError("Please try again.");
            setStatus("idle");
          }
        });
    }
  };

  return (
    <Wrapper>
      <ImgCover />
      <Container>
        <H1>SIGN IN</H1>
        <Form>
          <Label>Email</Label>
          <Input
            type={"email"}
            placeholder={"Enter email"}
            value={form.email}
            onChange={(ev) => {
              setForm({ ...form, email: ev.target.value });
            }}
            highlight={
              clicked &&
              (emailIsValid(form.email) ? "default" : "2px solid red")
            }
          />
          <Label>Password</Label>
          <Input
            type={"password"}
            placeholder={"Enter password"}
            value={form.password}
            onChange={(ev) => {
              setForm({ ...form, password: ev.target.value });
            }}
            highlight={
              clicked &&
              (passwordIsValid(form.password) ? "default" : "2px solid red")
            }
          />

          {error && <Error>{error}</Error>}
          {formError && <Error>{formError}</Error>}
        </Form>
        <Button onClick={handleClick}>
          {status === "idle" ? "Login" : <p>Loading...</p>}
        </Button>
        <SignupDiv>
          <SignupLink to="/signup">Create an account</SignupLink>
        </SignupDiv>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const ImgCover = styled.div`
  background-image: url(/images/bg_home.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  justify-content: center;
  position: absolute;
  top: 60px;
`;
const H1 = styled.h1`
  justify-content: center;
  font-size: 50px;
  font-weight: 900;
  color: rgba(81, 203, 238, 1);
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  color: lightgray;
`;
const Input = styled.input`
  margin-bottom: 20px;
  margin-top: 10px;
  width: 280px;
  height: 30px;
  font-size: 18px;
  text-decoration: none;
  border-style: none;
  border-bottom: 2px solid black;
  background-color: #fff5d0;
  outline: none;
`;
const Button = styled.button`
  color: white;
  font-size: 16px;
  font-weight: 900;
  width: 120px;
  height: 35px;
  margin-top: 10px;
  border-radius: 5px;
  background-image: linear-gradient(180deg, #5d1491, #b921ca, #5d1491);
  &:hover {
    box-shadow: 0 0 25px #b921ca;
    border: 3px solid #b921ca;
    background-image: linear-gradient(90deg, #921b9a, #b921ca, #921b9a);
  }
`;
const SignupDiv = styled.div`
  margin-top: 20px;
`;
const SignupLink = styled(Link)`
  margin-top: 100px;
  text-decoration: none;
  color: #f0c022;
  font-size: 25px;
  &:hover {
    color: rgb(252, 209, 68);
  }
`;
const Error = styled.div`
  color: red;
`;

export default Login;
