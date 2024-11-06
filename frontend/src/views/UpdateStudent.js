import React, { useState , useContext } from 'react';
import User from './User';
import noteContext from 'context/notes/noteContext';

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

function UpdateStudent(props) {

  const context = useContext(noteContext);


  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const [formData, setFormData] = useState(context.sData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Here, you can do whatever you want with the formData
    context.updateStudent(formData);
    context.studentdata(formData);
    // For example, you can send the formData to a server using fetch or axios
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
                <Label for="firstName">First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email address</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
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
                  placeholder="Address"
                  value={formData.address}
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
                  value={formData.branch}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="enrollmentNo">Enrollment No.</Label>
                <Input
                  type="text"
                  name="enrollmentNo"
                  id="enrollmentNo"
                  placeholder="Enrollment No."
                  value={formData.enrollmentno}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="year">Year</Label>
                <Input
                  type="text"
                  name="year"
                  id="year"
                  placeholder="Year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="gender">Gender</Label>
                <Input
                  type="select"
                  name="gender"
                  id="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="phoneNumber">Phone Number</Label>
                <Input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="about-me">About Me</Label>
                <Input
                  type="textarea"
                  name="about"
                  id="about-me"
                  placeholder="About your self"
                  value={formData.about}
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
                  placeholder="Enter your skills"
                  value={formData.skills}
                  onChange={handleChange}
                  required
                /> 
              </FormGroup>
              <FormGroup>
                <Label for="experience">Experience</Label>
                <Input
                  type="textarea"
                  name="experience"
                  id="experience"
                  placeholder="Enter your experience"
                  value={formData.experience}
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
                  
                  value={formData.resume}
                  onChange={handleChange}
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
