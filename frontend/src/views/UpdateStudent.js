import React, { useState , useContext, useEffect } from 'react';
import User from './User';
import noteContext from 'context/notes/noteContext';
import { userApi } from '../utils/utils';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Label,
} from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import axios from 'axios';
import { setUser } from '../redux/userSlice';

function UpdateStudent(props) {

  const context = useContext(noteContext);
 
  const {user}  = useSelector(store=>store.user)
  const dispatch = useDispatch()


  const [data, setData] = useState({
 fullname:user?.fullname,
        phoneNo:user?.phoneNo,
        branch: '',
        cgpa:'',
        address: '',
        semister: '',
        skills: '',
        resume:''
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };
  const handleFileChange = (e)=>{
    const resume = e.target.files?.[0];
    setData({
          ...data,
          resume

    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('fullname', data.fullname)
    formData.append('phoneNo', data.phoneNo)
    formData.append('branch', data.branch)
    formData.append('cgpa', data.cgpa)
    formData.append('address', data.address)
    formData.append('semister', data.semister)
    formData.append('skills', data.skills)
    if(data.resume){
      formData.append('file', data.resume)
    }
    
    try {
      const res = await axios.post(`${userApi}/update/student`, formData , {
        headers:{
         "Content-Type":"multipart/form-data"
        },
        withCredentials:true
      })
      if(res.data.success){
        toast.success(res.data.message)
        dispatch(setUser(res.data.user))
      }
      
    } catch (error) {
      toast.error(error.response?.data?.message)
    }
    
  };

  return (
    <Form className='content' onSubmit={handleSubmit}>
      <Row>
        <Col md="12">
          <Card className="card-user">
            <CardHeader>
              <CardTitle tag="h5" >Update Profile</CardTitle>
            </CardHeader>
            <CardBody>
            
              
              
              <FormGroup>
                <Label for="email">Full Name</Label>
                <Input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Enter your full name"
                  value={data.fullname}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter your Local Address"
                  value={data.address}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="branch">Branch</Label>
                <Input
                  type="text"
                  name="branch"
                  id="branch"
                  placeholder="Branch"
                  value={data.branch}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
         
              <FormGroup>
                <Label for="year">Semister</Label>
                <Input
                  type="text"
                  name="semister"
                  id="semister"
                  placeholder="current semister"
                  value={data.semister}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="year">CGPA</Label>
                <Input
                  type="text"
                  name="cgpa"
                  id="cgpa"
                  placeholder="current cgpa"
                  value={data.cgpa}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            
              <FormGroup>
                <Label for="phoneNumber">Phone Number</Label>
                <Input
                  type="text"
                  name="phoneNo"
                  id="phoneNo"
                  placeholder="Phone Number"
                  value={data.phoneNo}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            
              <FormGroup>
                <Label for="skills">Skills</Label>
                <Input
                  type='textarea'
                  name="skills"
                  id="skills"
                  placeholder="HTML , CSS ,..."
                  value={data.skills}
                  onChange={handleChange}
                  required
                /> 
              </FormGroup>
           
              <FormGroup>
                <Label for="resume">Uplode your Resume</Label>
                <Input
                  type="file"
                  name="resume"
                  id="resume" 
                   accept="application/pdf"
                  onChange={handleFileChange}
                  required
                /> 
              </FormGroup>
              
              <Button type="submit" color="primary"> Update Profile</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};

export default UpdateStudent;
