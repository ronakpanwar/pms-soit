import React, { useContext, useEffect } from 'react'
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";
import NoteContext from 'context/notes/noteContext';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { companyApi, jobApi } from '../utils/utils';
import { setCompanys } from '../redux/userSlice';
import { setCompanyJobs } from '../redux/companySlice';


function CompanyJobs() {


    const { companyJobs } = useSelector(store => store.company)
    const dispatch = useDispatch()

    useEffect(() => {
        const getCompanyJob = async () => {
            try {
                const res = await axios.get(`${jobApi}/company/jobs`, {
                    withCredentials: true
                })
                if (res.data.success) {
                    dispatch(setCompanyJobs(res.data.job))
                }
            } catch (error) {
                console.log(error)
            }
        }
        getCompanyJob()
    }, [dispatch])

    return (
        <>
            <div className="content">
                <Navbar className='px-4' color="dark" light expand="md">
                    <NavbarBrand href="/">Placement Management System</NavbarBrand>
                    <Nav className="ms-auto" navbar></Nav>
                    <NavItem>
                        <a href="/company-layout/create-job">
                            <Button color="primary mx-2">Create Openings</Button>
                        </a>
                    </NavItem>
                </Navbar>
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
                                            <th className="py-3 px-2">Title</th>
                                            <th className="py-3 px-2">Description</th>
                                            <th className="py-3 px-2">Requirements</th>
                                            <th className="py-3 px-2">Package</th>
                                            <th className="py-3 px-2">Location</th>
                                            <th className="py-3 px-2">Position</th>
                                            <th className="py-3 px-2">Min CGPA</th>
                                            <th className="py-3 px-2">Job Type</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody  >
                                        {companyJobs?.map((company, index) => (
                                            <tr key={index} className="align-middle">
                                                <td className="py-2 px-2">{company?.title}</td>
                                                <td className="py-2 px-2">{company?.description}</td>
                                                <td className="py-2 px-2">
                                                    {company?.requirments.map((req, idx) => (
                                                        <span key={idx}>{req} , </span> // Add key to avoid React warning about missing keys
                                                    ))}
                                                </td>
                                                <td className="py-2 px-2">{company?.salary}</td>
                                                <td className="py-2 px-2">{company?.location}</td>
                                                <td className="py-2 px-2">{company?.position}</td>
                                                <td className="py-2 px-2">{company?.cgpa}</td>
                                                <td className="py-2  px-2">{company?.jobType}</td>
                                               
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
    )
}

export default CompanyJobs
