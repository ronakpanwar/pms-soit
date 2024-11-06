
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

function User(props) {
 
 const context = useContext(noteContext);

  const [image, setImage] = useState(userImage);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className="content">
        <Row>

          <Col md="12" >

            <Card className="card-user">
              <CardBody className="" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                <img src={image} alt="" className="m-2 " style={{ width: '180px', height: '180px', border: '2px solid black', borderRadius: '50%' }} />
                <label htmlFor="upload" className="btn btn-primary" >Set Image</label>
                <input id="upload" type="file" onChange={handleImageChange} style={{ display: 'none' }} />
              </CardBody>

              <CardHeader>

              </CardHeader>
              <CardBody>
                <Form>
                  <Row className="m-2">
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Name</label>
                        <p>{context.sData.firstname + context.sData.lastname}</p>
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>Enrollment no.</label>
                        <p>{context.sData.enrollmentno}</p>
                       
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <p>{context.sData.email}</p>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="m-2">
                    <Col className="pr-1 " md="5">
                      <FormGroup>
                        <label>Branch </label>
                        <p>{context.sData.branch}</p>
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="3">
                      <FormGroup>
                        <label>Year</label>
                        <p>{context.sData.year}</p>
                       
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="3">
                      <FormGroup>
                        <label>Gender</label>
                        <p>{context.sData.gender}</p>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12" className="m-4">
                      <FormGroup>
                        <label>Address</label>
                        <p>{context.sData.address}</p>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="m-2">
                    <Col className="pr-1 " md="6">
                      <FormGroup>
                        <label>phone no.</label>
                        <p>{context.sData.phonenumber}</p>
                      </FormGroup>
                    </Col>
                    <Col className="px-1 " md="6">
                      <FormGroup>
                        <label>password</label>
                        <p>{context.sData.password}</p>
                      </FormGroup>
                    </Col>

                  </Row>
                  <Row>
                    <Col md="12" className="m-4">
                      <FormGroup>
                        <label>About Me</label>
                        <p>{context.sData.aboutme}</p>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12" className="m-4">
                      <FormGroup>
                        <label>Skills</label>
                        <p>{context.sData.skills}</p>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12" className="m-4">
                      <FormGroup>
                        <label>Experience</label>
                        <p>{context.sData.experience}</p>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row >
                    <Col md="4" >
                      <button className="btn btn-success" >Cheak resume</button>
                    </Col>
                  </Row>
                  <Row className="my-4">
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                       <a href="/user-layout/update-student" style={{color:"white" , textDecoration: 'none'}}> Update Profile </a>
                      </Button>
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
