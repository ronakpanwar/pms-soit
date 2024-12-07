
import React, { useState } from 'react'
import { Badge, Button } from 'reactstrap';
import userImage from 'u.jpg';
import { applicationApi } from "../utils/utils";
import axios from 'axios';
import { toast } from 'sonner';

const ApplicantCart = ({ data, status , id}) => {
    const [cheakStatus, setCheakStatus] = useState()

    const color = {
        accepted: 'success',
        rejected: 'danger'
    }
    const handleStatus = async (id) => {
        
        try {
            const res = await axios.post(`${applicationApi}/status/${id}`, { cheakStatus }, {
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
        <div className='my-4'>
            <div className='d-flex gap-4 mx-4'>
                <div className='mx-4'>
                    <img src={data?.profile?.profileImg ? (data?.profile?.profileImg) : (userImage)} style={{ width: '200px', height: '240px', border: '1px solid ', borderRadius: '5%', objectFit: 'cover', }} alt="" />
                </div>
                <div className='d-flex flex-column  mx-2'>
                    <div className='d-flex gap-2 align-items-end'>
                        <p className='fw-bold '>Full Name:</p>
                        <p>{data?.fullname}</p>
                    </div>
                    <div className='d-flex gap-2 align-items-center'>
                        <p className='fw-bold '>Email:</p>
                        <p>{data?.email}</p>
                    </div>
                    <div className='d-flex gap-2 align-items-center'>
                        <p className='fw-bold '>Branch:</p>
                        <p>{data?.profile?.branch}</p>
                    </div>
                    <div className='d-flex gap-2 align-items-center'>
                        <p className='fw-bold '>Semester:</p>
                        <p>{data?.profile?.semister}</p>
                    </div>
                    <div className='d-flex gap-2 align-items-center'>
                        <p className='fw-bold '>CGPA:</p>
                        <p>{data?.profile?.cgpa}</p>
                    </div>
                    <div className='d-flex gap-2 align-items-center'>
                        <p className='fw-bold '>Phone No.:</p>
                        <p>{data?.phoneNo}</p>
                    </div>
                    <div className='d-flex gap-2 align-items-center'>
                        <p className='fw-bold '>Resume:</p>
                        <a href={data?.profile?.resume} target='_main'><p>{data?.profile?.resumeName}</p></a>
                    </div>
                </div>
            </div>
            <div className='d-flex  justify-content-end '>
                {/* {
                    status && status !== "pending" ? (
                        <Badge
                        size='lg'
                        color="success"
                      
                    >
                        <p className=''>{status}</p>
                    </Badge>) : (
                        <form action="" className='d-flex gap-4 mx-4 '  onSubmit={()=>{handleStatus(id)}}>
                            <Button type="submit"
                                onClick={() => setCheakStatus('accepted')}
                                className="px-1"
                                color="success"
                                size="sm">
                                Accepted
                            </Button>
                            <Button type="submit"
                                onClick={() => setCheakStatus('rejected')}
                                className="px-1"
                                color="danger"
                                size="sm">
                                Rejected
                            </Button>
                        </form>
                    )
                } */}
            </div>
         
        </div>
        
    )
}

export default ApplicantCart
