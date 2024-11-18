import axios from 'axios';
import React, { useEffect } from 'react'
import userImage from 'user.png';
import { useDispatch, useSelector } from 'react-redux';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
} from "reactstrap";
import { jobApi } from '../utils/utils';
import { setJobs, setSelectedJob } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';



function TablesOp(props) {
  const { jobs  ,user} = useSelector(store => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const getAllJobs = async () => {
      try {
        const res = await axios.get(`${jobApi}/alljobs`, {
          withCredentials: true
        })
        if (res.data.success) {
          dispatch(setJobs(res.data.job))
        }
      } catch (error) {
        console.log(error)
      }
    }
    getAllJobs()
  }, [dispatch])

  const handleSelect = (job)=>{
    dispatch(setSelectedJob(job))
    navigate('/user-layout/detail-job')
  }

  let cheak = false;
  if (props.Name === 'Student') {
    cheak = true;
  }

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
                  
                      <th>Company Name</th>
                      <th>Position</th>
                      <th>Min. cgpa</th>
                      <th>Pakage</th>

                      <th className="text-end ">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      jobs?.map((job, key) => {
                        return (
                          <tr key={key}>
                         
                            <td><img className='' src={job?.company?.Logo ? (job?.company?.Logo):(userImage)} alt=""  style={{ width: '40px', height: '40px', border: '1px solid ', borderRadius: '50%' ,objectFit: 'cover'}} /> {job?.company?.name}</td>
                            <td>{job?.title}</td>
                            <td>{job?.cgpa}</td>
                            <td>{job?.salary}</td>
                            <td className="text-end">
                             
                                <Button onClick={()=>{
                                  dispatch(setSelectedJob(job))
                                 user?.role === 'student' ? 
                                  navigate('/user-layout/detail-job'):
                                  navigate('/admin/detail-job')
                                }} color="primary"
>
                                   Detail
                                </Button>

                           
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

export default TablesOp
