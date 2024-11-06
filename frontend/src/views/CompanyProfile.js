import React, { useContext, useState } from "react";
import NoteContext from "context/notes/noteContext";

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

function CompanyProfile(props) {

  const state = useContext(NoteContext)

  

  return (
    <>
      <div className="content">
        <Row>

          <Col md="12" >

            <Card className="card-user">
             

              <CardBody>
                <Form>
                  <Row className="m-2">
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Company Name</label>
                        <p>{state.cData.companyname}</p>
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="6">
                      <FormGroup>
                        <label>Website</label>
                        <p>{state.cData.website}</p>
                      </FormGroup>
                    </Col>
                  
                  </Row>
               
                  <Row>
                    <Col md="12" className="m-4">
                      <FormGroup>
                        <label>Address</label>
                        <p>{state.cData.address}</p>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="m-2">
                    <Col className="pr-1 " md="4">
                      <FormGroup>
                        <label>phone no.</label>
                        <p>{state.cData.phone}</p>
                      </FormGroup>
                    </Col>
                    <Col className="px-1 " md="4">
                      <FormGroup>
                        <label>password</label>
                        <p>{state.cData.password}</p>
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <p>{state.cData.email}</p>
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
