import axios from 'axios';
import React, { useEffect } from 'react'
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Button, Badge } from "reactstrap";
import { applicationApi } from '../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { setAppliedJobs } from '../redux/userSlice';
import userImage from 'user.png';
const AppliedStudent = () => {

  const dispatch = useDispatch()
  const { appliedJobs } = useSelector(store => store.user)
  const color = {
    accepted:'success',
    rejected:'danger',
    pending:'primary'
}

  useEffect(() => {
    const getAllAppliedJobs = async () => {
      try {
        const res = await axios.get(`${applicationApi}/applied/jobs`, {
          withCredentials: true
        })
        if (res.data.success) {
          dispatch(setAppliedJobs(res.data.applieds))
        }
      } catch (error) {
        console.log(error)
      }
    }
    getAllAppliedJobs()
  }, [dispatch])



  return (

    <div className="content">
      {/* <Navbar color="dark" light expand="md">
      <NavbarBrand href="/">Placement Management System</NavbarBrand>
      <Nav className="mr-auto" navbar></Nav>
      <NavItem>
        <a href="/admin/add-student">
        <Button color="primary mx-2">Add Student</Button>
        </a>
      </NavItem>
    </Navbar> */}
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Applied </CardTitle>
            </CardHeader>
            <CardBody>
              <Table responsive>
                <thead className="text-primary">
                  <tr>
                    <th>Company Name</th>
                    <th>Title</th>
                    <th>Position</th>
                    <th>Pakage</th>
                    <th className='text-end'>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    appliedJobs?.map((job, key) => {
                      return (
                        <tr key={key}>
                          <td><img className='' src={job?.job?.company?.Logo ? (job?.job?.company?.Logo):(userImage)} alt=""  style={{ width: '40px', height: '40px', border: '1px solid ', borderRadius: '50%' ,objectFit: 'cover'}} /> {job?.job?.company?.name}</td>
                          <td>{job?.job?.title}</td>
                          <td>{job?.job?.position}</td>
                          <td>{job?.job?.salary}</td>
                          <td className='text-end'>
                            <h6> <Badge className='py-2 px-3' color={color[job?.status]
                            }>
                              {job?.status  }
                            </Badge></h6>
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


  )
}

export default AppliedStudent