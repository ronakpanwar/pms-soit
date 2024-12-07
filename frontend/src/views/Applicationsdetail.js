import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { applicationApi } from "../utils/utils";

import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Button, Badge } from "reactstrap";
import { setApplicants } from "../redux/companySlice";
import { toast } from "sonner";
import userImage from 'user.png';
import ApplicantCart from "./ApplicantCart";


function ApplicationsDetail() {
    const navigate = useNavigate();
    const [status, setStatus] = useState()
    const params = useParams()
    const jobId = params.id;
    const { applicants } = useSelector(store => store.company)
    const dispatch = useDispatch();
    const color = {
        accepted:'success',
        rejected:'danger'
    }
    const handleBack = ()=>{
        navigate(-1);
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
                            <p className="mx-4 fs-5 " onClick={handleBack} style={{ cursor:'pointer'}}><i class="fa-solid fa-arrow-left"></i> </p>
                                <CardTitle tag="h4" className="mx-4"> Applicant</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    {/* <thead className="text-primary">
                                        <tr>
                                        <th>Photo</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Branch</th>
                                            <th>Cgpa</th>
                                            <th>resume</th>

                                            <th className="text-end">Action</th>
                                        </tr>
                                    </thead> */}
                                    <tbody>
                                        {applicants?.map((job, key) => {
                                            return (
                                                <tr key={key} className="border-bottom py-2">

                                                <ApplicantCart data={job?.applicant} status = {job?.status} id = {job?._id}/>

                                                {/* <td><img className='' src={job?.applicant?.profile?.profileImg ? (job?.applicant?.profile?.profileImg):(userImage)} alt=""  style={{ width: '45px', height: '45px', border: '1px solid ', borderRadius: '50%' ,objectFit: 'cover'}} /></td>
                                                    <td>{job?.applicant?.fullname}</td>
                                                    <td>{job?.applicant?.email}</td>
                                                    <td>{job?.applicant?.profile?.branch}</td>

                                                    <td>{job?.applicant?.profile?.cgpa}</td>
                                                    <td><a href={job?.applicant?.profile?.resume ? job?.applicant?.profile?.resume : '#'}>{job?.applicant?.profile?.resumeName}</a></td>*/}

                                                   
                                                      <div className="d-flex justify-content-end mx-4 ">
                                                       {job?.status !== 'pending' ? (
                                                            // If status is not 'pending', don't show the form
                                                           <h6> <Badge color={color[job?.status]} >
                                                                {job?.status}
                                                            </Badge></h6>
                                                        ) : (
                                                            // If status is 'pending', show the form with buttons
                                                            <form className="d-flex  gap-4" onSubmit={()=>handleStatus(job?._id)}>
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
                                                        </div> 

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
