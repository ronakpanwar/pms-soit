import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { applicationApi } from "../utils/utils";

import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Button, Badge } from "reactstrap";
import { setApplicants } from "../redux/companySlice";
import { toast } from "sonner";

function ApplicationsDetail() {
    const [status, setStatus] = useState()
    const params = useParams()
    const jobId = params.id;
    const { applicants } = useSelector(store => store.company)
    const dispatch = useDispatch();
    const color = {
        accepted:'success',
        rejected:'danger'
    }

    useEffect(() => {
        const getApplicant = async () => {
            try {
                const res = await axios.get(`${applicationApi}/all/${jobId}`, {
                    withCredentials: true
                })
                if (res.data.success) {
                    dispatch(setApplicants(res.data.applications?.applications))
                }
            } catch (error) {
                console.log(error)
            }
        }
        getApplicant()
    }, [dispatch])

    
    const handleStatus = async (id) => {
        
        try {
            const res = await axios.post(`${applicationApi}/status/${id}`, { status }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            if (res.data.success) {
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message)
        }
    }

    return (

        <>

            <div className="content">

                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4"> Applicant</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Branch</th>
                                            <th>Cgpa</th>
                                            <th>resume</th>

                                            <th className="text-end">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {applicants?.map((job, key) => {
                                            return (
                                                <tr key={key}>
                                                    <td>{job?.applicant?.fullname}</td>
                                                    <td>{job?.applicant?.email}</td>
                                                    <td>{job?.applicant?.profile?.branch}</td>

                                                    <td>{job?.applicant?.profile?.cgpa}</td>
                                                    <td><a href="#">{job?.applicant?.profile?.resumeName}</a></td>

                                                    <td className="text-end">
                                                        {job?.status !== 'pending' ? (
                                                            // If status is not 'pending', don't show the form
                                                           <h6> <Badge color={color[job?.status]} >
                                                                {job?.status}
                                                            </Badge></h6>
                                                        ) : (
                                                            // If status is 'pending', show the form with buttons
                                                            <form className="d-flex flex-column gap-1" onSubmit={()=>handleStatus(job?._id)}>
                                                                <Button
                                                                    type="submit"
                                                                    onClick={() => setStatus('accepted')}
                                                                    className="px-1"
                                                                    color="primary"
                                                                    size="sm"
                                                                >
                                                                    Accepted
                                                                </Button>
                                                                <Button
                                                                    type="submit"
                                                                    onClick={() => setStatus('rejected')}
                                                                    className="px-1"
                                                                    color="danger"
                                                                    size="sm"
                                                                >
                                                                    Rejected
                                                                </Button>
                                                            </form>
                                                        )}
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

export default ApplicationsDetail;
