import React from 'react'
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";

const AppliedStudent = () => {
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
            <CardTitle tag="h4">Applied </CardTitle>
          </CardHeader>
          <CardBody>
            <Table responsive>
              <thead className="text-primary">
                <tr>
                  <th>Name</th>
                  <th>Company </th>
                  <th>Branch</th>
                  
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dakota Rice</td>
                  <td>Flipcart</td>
                  <td>csbs</td>
                  
                  {/* <td className="text-right">
                   <button className='rounded '><a href="#" className='bold'>view</a></button>
                  </td> */}
                </tr>
               
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>


  )
}

export default AppliedStudent