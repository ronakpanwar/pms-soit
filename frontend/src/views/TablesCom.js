import React , {useContext, useEffect} from 'react'
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";
import NoteContext from 'context/notes/noteContext';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { companyApi } from '../utils/utils';
import { setCompanys } from '../redux/userSlice';


function TablesCom() {


  const {companys} = useSelector(store=>store.user)


  return (
    <>
      <div className="content">
      <Navbar className='px-4' color="dark" light expand="md">
            <NavbarBrand href="/">Placement Management System</NavbarBrand>
            <Nav className="ms-auto" navbar></Nav>
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
                      
                    
                      <th className="text-right">Actions</th>
                    </tr>
                  </thead>
                 
                  <tbody>

                  { companys?.map((company , index) =>(
                    <tr key={index}>
                      <td>{company?.name}</td>
                      <td>{company?.address}</td>
                      <td>{company?.website}</td>
                      <td>{company?.email}</td>
                     
                      
                      <td className="text-right">
                      
                      <Button className="rounded"><i className="fa-solid fa-trash"></i></Button>
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
