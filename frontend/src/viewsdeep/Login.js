import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from 'context/notes/noteContext';
import { userApi, companyApi } from 'utils/utils';

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
import HomeNavbar from './HomeNavbar';
import axios from 'axios';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { setCompany } from '../redux/companySlice';



const Login = (props) => {


  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate();
  const context = useContext(noteContext);

  const [type, setType] = useState()
  const [userData, setUserData] = useState({

    email: "",
    password: ""
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(userData);

    if (type === 'Admin' || type === 'student') {
      try {
        setLoading(true)
        const res = await axios.post(`${userApi}/login`, userData, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        })
        if (res.data.success) {
          toast.success(res.data.message)
          dispatch(setUser(res.data.user))
          if (res.data.user.role === 'admin') {
            navigate("/admin/dashboard");
          } else if (res.data.user.role === 'student') {
            navigate("/user-layout/profile");
          }
        }
      }
      catch (error) {
        toast.error(error.response.data.message)
        console.log(error)
      } finally {
        setLoading(false)
      }

    }
    else if (type === 'company') {
      try {
        setLoading(true)
        const res = await axios.post(`${companyApi}/login`, userData, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        })
        if (res.data.success) {
          toast.success(res.data.message)
          dispatch(setCompany(res.data.company))
          navigate("/company-layout/company-profile");
        }
      }
      catch (error) {
        toast.error(error.response.data.message)
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
  }


  return (
    <>
      <HomeNavbar />
      <Form className="container my-4" onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Col md="6" lg="4">

            <Card className="card-user bg-light shadow-sm">

              <CardBody className="p-4">
                <p className="fw-bold text-center bg-dark text-white px-2 py-2 fs-6">Sign In to Your Account</p>
                <FormGroup>
                  <Label for="type"></Label>
                  <Input
                    type="select"
                    name="type"
                    id="type"
                    placeholder="Admin"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                  >
                    <option value="">Type</option>
                    <option value="Admin">Admin</option>
                    <option value="student">student</option>
                    <option value="company">company</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="user" className="fw-medium text-dark">Username</Label>
                  <Input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your username"
                    value={userData.email}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="password" className="fw-medium text-dark">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={userData.password}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </FormGroup>

                <div className="text-center ">{
                  loading ? (
                    <Button type="submit" color="primary" className="w-100 py-2 mt-3">
                      <div className="spinner-border spinner-border-sm" role="status" style={{ width: '1rem', height: '1rem' }}>
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </Button>

                  ) : (<Button type="submit" color="primary" className="w-100 py-2 mt-3">Login</Button>)
                }

                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Form>

    </>
  )
}

export default Login
