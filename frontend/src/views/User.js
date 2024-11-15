
import React, { useState, useContext } from "react";
import userImage from 'user.png';
import noteContext from "context/notes/noteContext";
// reactstrap components
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
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { userApi } from '../utils/utils';
import axios from "axios";
import { toast } from "sonner";
import { setUser } from "../redux/userSlice";

function User(props) {

  const context = useContext(noteContext);
  
  const { user } = useSelector(store => store.user)
   const dispatch = useDispatch();
 

  const handleImageChange = async(e) => {
    const file = e.target.files[0];
    if(file){
      const formData = new FormData();
      formData.append('file',file)
      try {
        const res = await axios.post(`${userApi}/update/student/image` , formData , {
          headers:{
            "Content-Type":"multipart/form-data"
          }, 
          withCredentials:true
        })
        if(res.data.success){
          toast.success(res.data.message);
          dispatch(setUser( res.data.user))
        }
      } catch (error) {
        toast.error(error.response?.data?.message)
      }
    }


  };
  return (
    <>
      <div className="content">
        <Row>

          <Col md="12" >

            <Card className="card-user">
              <CardBody className="" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>

                <img src={user?.profile?.profileImg ? user?.profile?.profileImg : userImage} alt="" className="m-2 " style={{ width: '180px', height: '180px', border: '2px solid black', borderRadius: '50%' ,objectFit: 'cover'}} />
                <label htmlFor="upload" className="btn btn-primary" >Set Image</label>
                <input id="upload" type="file"  accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
              </CardBody>

              <CardHeader>

              </CardHeader>
              <CardBody>
                <Form>
                  <Row className="m-2">
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Name</label>
                        <p>{user?.fullname}</p>
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>Enrollment no.</label>
                        <p>{user?.profile?.enrolmentNo}</p>

                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <p>{user?.email}</p>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="m-2">
                    <Col className="pr-1 " md="5">
                      <FormGroup>
                        <label>Branch </label>
                        <p>{user?.profile?.branch}</p>
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="3">
                      <FormGroup>
                        <label>Semister</label>
                        <p>{user?.profile?.semister}</p>

                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="3">
                      <FormGroup>
                        <label>Gender</label>
                        <p>{user?.gender}</p>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row className="m-2">
                    <Col md="5" className="pr-1">
                      <FormGroup>
                        <label>Address</label>
                        <p>{user?.profile?.address}</p>
                      </FormGroup>
                    </Col>
                    <Col className="pl-1 " md="3">
                      <FormGroup>
                        <label>phone no.</label>
                        <p>{user?.phoneNo}</p>
                      </FormGroup>
                    </Col>
                    <Col className="pl-1 " md="3">
                      <FormGroup>
                        <label>CGPA</label>
                        <p>{user?.profile?.cgpa}</p>
                      </FormGroup>
                    </Col>

                  </Row>
                  <Row>

                  </Row>
                  <Row>
                    {/* <Col md="12" className="m-4">
                      <FormGroup>
                        <label>About Me</label>
                        <p>{context.sData.aboutme}</p>
                      </FormGroup>
                    </Col> */}
                  </Row>
                  <Row>
                    <Col md="12" className="my-2 mx-4">
                      <FormGroup>
                        <label>Skills</label>
                        <div className="d-flex gap-3">
                          {
                            user?.profile?.skills.map((skill, key) => {
                              return (
                                <p key={key} >{skill}</p>
                              )

                            })
                          }
                        </div>

                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    {/* <Col md="12" className="m-4">
                      <FormGroup>
                        <label>Experience</label>
                        <p>{context.sData.experience}</p>
                      </FormGroup>
                    </Col> */}
                  </Row>
                  <Row >
                    <Col md="4" >
                      <a href={user?.profile?.resume} className="mx-4">  Cheak resume </a>
                    </Col>
                  </Row>
                  <Row className="my-4">
                    <div className="update ml-auto mr-auto">
                      <a
                        href="/user-layout/update-student"
                        className="btn btn-primary btn-round text-white text-decoration-none"
                      >
                        Update Profile
                      </a>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default User;
