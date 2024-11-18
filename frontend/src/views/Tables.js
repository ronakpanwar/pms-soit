
import React ,{useContext, useEffect} from "react";
import NoteContext from "context/notes/noteContext";
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {userApi}  from '../utils/utils'
import { setStudents } from "../redux/userSlice";

function Tables() {
 
  const {students}  = useSelector(store=>store.user)
  const dispatch = useDispatch();


  return (


    
      <>
     
        <div className="content ">
          <Navbar className="px-4" color="dark" light expand="md">
            <NavbarBrand href="#">Placement Management System</NavbarBrand>
            <Nav className="ms-auto" navbar></Nav>
            <NavItem>
              <a href="/admin/add-student">
              <Button color="primary mx-2">Add Student</Button>
              </a>
            </NavItem>
          </Navbar>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Students</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Enrollment no.</th>
                        <th>Mobile No.</th>
                        <th>Branch</th>
                    
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {students?.map((student, index) => (
                      <tr key={index}>
                        <td>{student?.fullname}</td>
                        <td>{student?.gender}</td>
                        <td>{student?.profile?.enrolmentNo}</td>
                        <td>{student?.phoneNo}</td>
                        <td>{student?.profile?.branch}</td>
                        <td className="text-right">
                         
                          <Button className="rounded"><i className="fa-solid fa-trash"></i></Button>
                        </td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      
      </>
    
  );
}

export default Tables;
