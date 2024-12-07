import React, { useContext, useState } from "react";
import NoteContext from "context/notes/noteContext";
import userImage from 'user.png';
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
import { useSelector } from "react-redux";

function CompanyProfile(props) {

  const state = useContext(NoteContext)

  const { company } = useSelector(store => store.company)


  return (
    <>
      <div className="content">
        <Row>

          <Col md="12" >

            <Card className="card-user">
              <CardBody className="" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>

                <img src={company?.Logo ? company.Logo : userImage} alt="" className="m-2 " style={{ width: '150px', height: '150px', border: '2px solid black', borderRadius: '50%', objectFit: 'cover' }} />
          
              </CardBody>

              <CardBody>
                <Form>
                  <Row className="mx-2">
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Company Name</label>
                        <p>{company?.name}</p>
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="6">
                      <FormGroup>
                        <label>Website</label>
                        <p>{company?.website}</p>
                      </FormGroup>
                    </Col>

                  </Row>

                  <Row>
                    <Col md="12" className="mx-4">
                      <FormGroup>
                        <label>Address</label>
                        <p>{company?.address}</p>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mx-2">
                    <Col className="pr-1 " md="6">
                      <FormGroup>
                        <label>About</label>
                        <p>{company?.about}</p>
                      </FormGroup>
                    </Col>
                    {/* <Col className="px-1 " md="4">
                      <FormGroup>
                        <label>password</label>
                        <p>{state.cData.password}</p>
                      </FormGroup>
                    </Col> */}
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <p>{company?.email}</p>
                      </FormGroup>
                    </Col>
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

export default CompanyProfile;
