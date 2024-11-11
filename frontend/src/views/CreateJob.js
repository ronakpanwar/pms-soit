import axios from 'axios';
import React, { useState } from 'react';
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
import { toast } from 'sonner';
import { jobApi } from '../utils/utils';

function CreateJob() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirments: "",
    location: "",
    jobType: '',
    cgpa: '',
    position: '',
    salary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${jobApi}/postjob` , formData , {
        headers:{
          'Content-Type':'application/json'
        },
        withCredentials:true
      })
      if(res.data.success){
        toast.success(res.data.message)
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
              <CardTitle tag="h5" >Create job</CardTitle>
            </CardHeader>
            <CardBody>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Job title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="about job"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="location">Location</Label>
                <Input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="jobType">Job Type</Label>
                <Input
                  type="text"
                  name="jobType"
                  id="jobType"
                  placeholder=""
                  value={formData.jobType}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="position">Position</Label>
                <Input
                  type="text"
                  name="position"
                  id="position"
                  placeholder="postion"
                  value={formData.position}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="cgpa">CGPA</Label>
                <Input
                  type="text"
                  name="cgpa"
                  id="cgpa"
                  placeholder="cgpa"
                  value={formData.cgpa}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            
              <FormGroup>
                <Label for="pakage">Pakage</Label>
                <Input
                  type="text"
                  name="salary"
                  id="salary"
                  placeholder=" in lpa"
                  value={formData.salary}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="skills">Requirments</Label>
                <Input
                  type="textarea"
                  name="requirments"
                  id="requirments"
                  placeholder="Require Skills"
                  value={formData.requirments}
                  onChange={handleChange}
                  required
                />
              </FormGroup>




              <Button type="submit" color="primary">create job</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};

export default CreateJob;