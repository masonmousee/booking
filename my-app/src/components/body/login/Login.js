import React, { useState } from "react";

import {
  Button,

  Form,
  Input,
  Typography,

  Row,
  Col,
} from "antd";
// import { GoogleOutlined } from "@ant-design/icons";
// import axios from "axios";

import "./Login.css";


export const Login = () => {
  const { Title } = Typography;

  // const { user, setUser, setRole } = useContext(Data);
  // const [disableAccount, setDisableAccount] = useState(false);

  // const getRole = (roleId) => {
  //   switch (roleId) {
  //     case 0:
  //       return "admin";
  //     case 1:
  //       return "lecturer";
  //     case 2:
  //       return "student";
  //     default:
  //       return "";
  //   }
  // };

  // const [loading, setLoading] = useState(false);
  // const handleLoginByUsernameFinish = (data) => {
  //   setLoading(true);
  //   axios
  //     .get(
  //       `http://localhost:8080/booking/auth/authenticate`
  //     )
  //     .then((response) => response.data.data)
  //     .then((userData) => {
  //       if (
  //         userData.id === data.userId &&
  //         userData.password === data.password
  //       ) {
  //         const finalUser = {
  //           id: userData.id,
  //           name: userData.name,
  //           picture: null,
  //           email: userData.email,
  //           role: getRole(userData.role),
  //           status: userData.status,
  //         };
  //         //check account if disabled
  //         validStatus(finalUser, setUser, setRole, setDisableAccount);
  //       } else {
  //         message.error("Invalid username or password!");
  //       }
  //     })
  //     .catch((err) => {
  //       message.error("Invalid username or password!");
  //       console.log(err);
  //     })
  //     .finally(() => setLoading(false));
  // };

  // //submit antispam
  // const [clickSubmit, setClickSubmit] = useState(0);
  // //cooldown 3s if users click over 2 times
  // setTimeout(() => {
  //   clickSubmit > 0 && setClickSubmit(clickSubmit - 1);
  // }, 3000);
  // //checker
  // const handleSubmitAntispam = (data) => {
  //   clickSubmit === 2 && message.error("Please try again in 3 seconds");
  //   clickSubmit < 3 && setClickSubmit(clickSubmit + 1);
  //   if (clickSubmit < 2) {
  //     handleLoginByUsernameFinish(data);
  //   }
  // };

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }

  function handleSubmit(event) {

    event.preventDefault();

  }

  return (
    <div className="backgroundLogin">
      <Form className="loginForm" onSubmit={handleSubmit}>
        <Title className="loginTitle" level={3}>
          Login
        </Title>
        <Row>
          <Col xs={7}>
            <Title
              level={5}
              style={Object.assign(
                { margin: "0 0 32px 0" },
                { padding: 0 },
                { textAlign: "left" }
              )}
            >
              Username<span style={{ color: "red" }}> *</span>
            </Title>
          </Col>
          <Col xs={1}></Col>
          <Col xs={16}>
            <Form.Item
              name="userId"
              style={Object.assign({ margin: 0 }, { padding: 0 })}
              rules={[{ required: true }]}
              onChange={(e) => setEmail(e.target.value)}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={7}>
            <Title
              level={5}
              style={Object.assign(
                { margin: "0 0 32px 0" },
                { padding: 0 },
                { textAlign: "left" }
              )}
            >
              Password<span style={{ color: "red" }}> *</span>
            </Title>
          </Col>
          <Col xs={1}></Col>
          <Col xs={16}>
            <Form.Item
              name="password"
              style={Object.assign({ margin: 0 }, { padding: 0 })}
              rules={[{ required: true }]}
              onChange={(e) => setPassword(e.target.value)}
            >
              <Input.Password/>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button
            // loading={loading}
            
            className="loginBtn"
            type="submit"
            htmlType="submit"
            disabled={!validateForm()}
          >
            Login
          </Button>
        </Form.Item>

        
      </Form>
      <ul className="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Login;
