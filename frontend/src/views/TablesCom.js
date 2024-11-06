import React , {useContext} from 'react'
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";
import NoteContext from 'context/notes/noteContext';


function TablesCom() {

  const company = useContext(NoteContext);


  return (
    <>
      <div className="content">
      <Navbar color="dark" light expand="md">
            <NavbarBrand href="/">Placement Management System</NavbarBrand>
            <Nav className="mr-auto" navbar></Nav>
            <NavItem>
              <a href="/admin/add-company">
              <Button color="primary mx-2">Add Company</Button>
              </a>
            </NavItem>
          </Navbar>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Companys</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Addres</th>
                      <th>website</th>
                      <th>Email ID</th>
                      <th>phone no.</th>
                    
                      <th className="text-right">Actions</th>
                    </tr>
                  </thead>
                 
                  <tbody>

                  { company.company.map((company , index) =>(
                    <tr key={index}>
                      <td>{company.companyname}</td>
                      <td>{company.address}</td>
                      <td>{company.website}</td>
                      <td>{company.email}</td>
                      <td>{company.phone}</td>
                      
                      <td className="text-right">
                      <button className="mx-1 border-success rounded"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button className="rounded"><i class="fa-solid fa-trash"></i></button>
                      </td>
                    </tr>
                  ))
                  } 
                  </tbody>
               
                </Table>
              </CardBody>
            </Card>
          </Col>
         </Row>
         </div>
    </>
  )
}

export default TablesCom
