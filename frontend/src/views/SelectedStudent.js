import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Button, Badge } from "reactstrap";
import { applicationApi } from '../utils/utils';
import { setAllSelected } from '../redux/userSlice';

const SelectedStudent = () => {

   const {allSelected }  = useSelector(store=>store.user);



  return (
       
    <div className="content">
    {/* <Navbar color="dark" light expand="md">
      <NavbarBrand href="/">Placement Management System</NavbarBrand>
      <Nav className="mr-auto" navbar></Nav>
      <NavItem>
        <a href="/admin/add-student">
        <Button color="primary mx-2">Add Student</Button>
        </a>
      </NavItem>
    </Navbar> */}
    <Row>
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h4">Selected Students</CardTitle>
          </CardHeader>
          <CardBody>
            <Table responsive>
              <thead className="text-primary">
                <tr>
                  <th>Name</th>
                  <th>Enroolment No.</th>
                  <th>Branch</th>
                  <th>Company Name</th>
                  <th>title</th>
                  <th>position</th>
                  
                  <th className="text-right">status</th>
                </tr>
              </thead>
              <tbody>
                {
                  allSelected?.map((all , key)=>{
                    return (
                      <tr key={key}>
                  <td>{all?.applicant?.fullname}</td>
                  <td>{all?.applicant?.profile?.enrolmentNo}</td>
                  <td>{all?.applicant?.profile?.branch}</td>
                  <td>{all?.job?.company?.name}</td>
                  <td>{all?.job?.title}</td>
                  <td>{all?.job?.position}</td>
                  <td>
                    <h6><Badge color='success'>
                      {all?.status}
                    </Badge></h6>
                  </td>
                </tr>
                    )
                  })
                }
               
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>


  )
}

export default SelectedStudent
