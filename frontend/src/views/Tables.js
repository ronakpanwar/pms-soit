
import React ,{useContext} from "react";
import NoteContext from "context/notes/noteContext";
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";

function Tables() {

  const student = useContext(NoteContext);

  return (
    
      <>
     
        <div className="content ">
          <Navbar color="dark" light expand="md">
            <NavbarBrand href="#">Placement Management System</NavbarBrand>
            <Nav className="mr-auto" navbar></Nav>
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
                    {student.student.map((student, index) => (
                      <tr key={index}>
                        <td>{student.firstname }{student.lastname} </td>
                        <td>{student.gender}</td>
                        <td>{student.enrollmentno}</td>
                        <td>{student.phonenumber}</td>
                        <td>{student.branch}</td>
                        <td className="text-right">
                          <Button className="mx-1 border-success rounded"><i className="fa-solid fa-pen-to-square"></i></Button>
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
