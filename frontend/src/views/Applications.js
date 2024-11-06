import React from "react";

import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";

function Applications() {
  return (
    
      <>
     
        <div className="content">
       
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
                      <tr>
                        <td>Dakota Rice</td>
                        <td>male</td>
                        <td>0002cb211043</td>
                        <td></td>
                        <td>Csbs</td>
                        <td className="text-right">
                          <button className="mx-1 border-success rounded">Select</button>
                          <button className="rounded"><a href="#">View</a></button>
                        </td>
                      </tr>
                     
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

export default Applications;
