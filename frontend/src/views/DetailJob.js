import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';
import { Button, Badge, Card, CardBody } from 'reactstrap';
import { applicationApi } from '../utils/utils';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';


  const DetailJob = () => {
    const navigate = useNavigate();
    const { selectedJob ,user } = useSelector(store => store.user);
    const jobId = selectedJob?._id

    const handleApply = async()=>{
        try {
            const res = await axios.post(`${applicationApi}/apply/${jobId}` , {} , {
                withCredentials:true
            })
            if(res.data.success){
                toast.success(res.data.message)
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    
    const handleBack = ()=>{
      navigate(-1);
  }

    
  
    return (
        <div className="content ">
        {/* Job Card with cleaner layout */}
        <Card className="shadow-sm border-0 rounded-lg bg-white">
      
          <CardBody>
          <p className="mx-2 fs-5 " onClick={handleBack} style={{ cursor:'pointer'}}><i class="fa-solid fa-arrow-left"></i> </p>
            {/* Job Title and Badges */}
            {/* <div className="d-flex justify-content-between align-items-center mb-4">
             
              <Button
                disabled={false} // Set to true if applied already
                onClick={() => alert('Apply Job Logic')}
                color={false ? 'secondary' : 'primary'}
                className="rounded-lg px-4 py-2"
              >
                {false ? 'Already Applied' : 'Apply Now'}
              </Button>
            </div> */}
  
            {/* Job Description Section */}
            <h2 className="font-weight-bold text-dark mb-3 border-bottom pb-2">Job Description</h2>
            <div className="mb-3 d-flex align-items-end gap-3">
              <h5 className="font-weight-bold">Title:</h5>
              <p className="text-muted ">{selectedJob?.title}</p>
            </div>
            <div className="mb-3 d-flex align-items-end gap-3">
              <h5 className="font-weight-bold">Location:</h5>
              <p className="text-muted">{selectedJob?.location}</p>
            </div>
            <div className="mb-3 d-flex align-items-end gap-3">
              <h5 className="font-weight-bold">Description:</h5>
              <p className="text-muted">{selectedJob?.description}</p>
            </div>
            <div className="mb-3 d-flex align-items-end gap-3">
              <h5 className="font-weight-bold">Package:</h5>
              <p className="text-muted">{selectedJob?.salary} </p>
            </div>
            <div className="mb-3 d-flex align-items-end gap-3">
              <h5 className="font-weight-bold">Position:</h5>
              <p className="text-muted">{selectedJob?.position}</p>
            </div>
            <div className="mb-3 d-flex align-items-end gap-3">
              <h5 className="font-weight-bold">Minimum CGPA:</h5>
              <p className="text-muted">{selectedJob?.cgpa}</p>
            </div>
            <div className="mb-3 d-flex align-items-end gap-3">
              <h5 className="font-weight-bold">Requirements:</h5>
              <p className="text-muted">
                {selectedJob?.requirments?.map((requirement, key) => (
                  <span className='mx-2' key={key}>{requirement}</span>
                ))}
              </p>
            </div>
            <div className="mb-3 d-flex align-items-end gap-3">
              <h5 className="font-weight-bold">Total Applicants:</h5>
              <p className="text-muted">{selectedJob?.applications?.length}</p>
            </div>
            <div className="mb-3 d-flex align-items-end gap-3">
              <h5 className="font-weight-bold">Posted Date:</h5>
              <p className="text-muted">
                            {selectedJob?.createdAt
                                ? format(new Date(selectedJob.createdAt), 'dd-MM-yyyy')
                                : 'Not available'}
                        </p>
            </div>{
              user?.role === 'student'? (
                <div className='text-end mx-4'>
                       <Button onClick={handleApply} color='primary'>Apply Now</Button>
               </div>
              ):('')
            }
               
          </CardBody>
        </Card>
      </div>
    );
  };
  
  export default DetailJob;