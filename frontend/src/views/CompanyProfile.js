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
import { useSelector } from "react-redux";

function CompanyProfile(props) {

  const state = useContext(NoteContext)

  const {company}  = useSelector(store=>store.company)
  

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
                    <Col md="12" className="m-4">
                      <FormGroup>
                        <label>Address</label>
                        <p>{company?.address}</p>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="m-2">
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
