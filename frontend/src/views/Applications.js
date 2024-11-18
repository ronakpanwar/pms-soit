import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";

function Applications() {
   const navigate = useNavigate()
   const {companyJobs} =  useSelector(store=>store.company)
  
  return (
    
      <>
     
        <div className="content">
       
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Openings</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Title</th>
                        <th>Position</th>
                        <th>Pakage</th>
                        <th>Cgpa</th>
                    
                        <th className="text-end">Applications</th>
                      </tr>
                    </thead>
                    <tbody>
                    { companyJobs?.map((job , key)=>{
                      return (
                      <tr key={key}>
                        <td>{job?.title}</td>
                        <td>{job?.position}</td>
                        <td>{job?.salary}</td>
               
                        <td>{job?.cgpa}</td>
                        <td className="text-end">
                          
                          <Button className="rounded px-2" onClick={()=>{
                            navigate(`/company-layout/applicant-detail/${job?._id}`)
                          }}><a className="text-decoration-none text-white" href=""><span className="px-1 text-primary fs-6">{job?.applications?.length}</span> Applicant</a></Button>
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
      
      </>
    
  );
}

export default Applications;
