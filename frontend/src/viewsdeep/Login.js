import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from 'context/notes/noteContext';


import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Label,
} from "reactstrap";
const Login = (props) => {

  let navigate = useNavigate();
  const context = useContext(noteContext);


  const [userData, setUserData] = useState({
    type: "",
    user: "",
    password: ""
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData);

    if (userData.type === "Admin") {
      if (userData.user === context.admin.email && userData.password === context.admin.password) {

        props.handleLogged("admin");
        navigate("/admin/dashboard");
        props.handleData(userData);
      }
      else {
        alert("Enter the correct user and password");
      }
    }
    else if (userData.type === "student") {
      const student = context.student.find(s => s.enrollmentno === userData.user && s.password === userData.password);
      if (student) {
        props.handleLogged("student");
        navigate("/user-layout/user");
        props.handleData(userData);
        context.studentdata(userData);
      } else {
        alert("Enter the correct user and password");
      }
    } else if (userData.type === "company") {
      const company = context.company.find(c => c.email === userData.user && c.password === userData.password);
      if (company) {
        props.handleLogged("company");
        navigate("/company-layout/company-profile");
        props.handleData(userData);
        context.companydata(userData);
      } else {
        alert("Enter the correct user and password");
      }
    } 
  }






return (
  <>
    <Form className='container my-4 ' onSubmit={handleSubmit}  >
      <Row style={{ justifyContent: "center" }}>
        <Col md="4">
          <Card className="card-user bg-dark ">

            <CardBody >


              <FormGroup>
                <Label for="type"></Label>
                <Input
                  type="select"
                  name="type"
                  id="type"
                  placeholder="Admin"
                  value={userData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Type</option>
                  <option value="Admin">Admin</option>
                  <option value="student">student</option>
                  <option value="company">company</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="user">User name</Label>
                <Input
                  type="text"
                  name="user"
                  id="user"
                  placeholder="User name"
                  value={userData.user}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={userData.password}
                  placeholder='Enter the valid password'
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <Button type="submit" style={{}} color="primary">Login</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Form>
  </>
)
}

export default Login
