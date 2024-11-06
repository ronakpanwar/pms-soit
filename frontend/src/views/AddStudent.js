import React, { useContext, useState } from 'react';
import NoteContext from 'context/notes/noteContext';
import User from './User';
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

function AddStudent() {

  const Add = useContext(NoteContext);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    branch: '',
    enrollmentno: '',
    year: '',
    gender: '',
    phonenumber: '',
    password: '', 
    aboutme: null,
    skills: null ,
    experience:null,
    resume:null

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData); // Here, you can do whatever you want with the formData
    // For example, you can send the formData to a server using fetch or axios
    Add.addStudent(formData);

  };

  return (
    <Form className='content' onSubmit={handleSubmit}>
      <Row>
        <Col md="12">
          <Card className="card-user">
            <CardHeader>
              <CardTitle tag="h5" >Add Students</CardTitle>
            </CardHeader>
            <CardBody>
              <FormGroup>
                <Label for="firstname">First Name</Label>
                <Input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="lastname">Last Name</Label>
                <Input
                  type="text"
                  name="lastname"
                  id="lastname"
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
                <Label for="enrollmentno">Enrollment No.</Label>
                <Input
                  type="text"
                  name="enrollmentno"
                  id="enrollmentno"
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
                <Label for="phonenumber">Phone Number</Label>
                <Input
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  placeholder="Phone Number"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <Button type="submit" color="primary">Add Student</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};

export default AddStudent;
