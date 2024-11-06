import React, { useState , useContext } from 'react';
import NoteContext from 'context/notes/noteContext';
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

function AddCompany()  {

  const context = useContext(NoteContext);
  const {addCompany} = context;

    const [formData, setFormData] = useState({
        companyname: '',
       address: '',
        email: '',
        website: '',
        phone: '',
        password: ''
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
    addCompany(formData);
    // setFormData({
    //   CompanyName: '',
    //    address: '',
    //     email: '',
    //     Website: '',
    //     phone: '',
    //     password: ''
    // })
  };
    
  return (
    <Form className=' content' onSubmit={handleSubmit}>
      <Row>
        <Col md="12">
          <Card className="card-user">
            <CardHeader>
              <CardTitle tag="h5" >Add Companys</CardTitle>
            </CardHeader>
            <CardBody>
              <FormGroup>
                <Label for="companyname">Company Name</Label>
                <Input
                  type="text"
                  name="companyname"
                  id="companyname"
                  placeholder="CompanyName"
                  value={formData.companyname}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="address">Company Address</Label>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="location"
                  value={formData.address}
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
                <Label for="website">Website</Label>
                <Input
                  type="link"
                  name="website"
                  id="website"
                  placeholder="www.xyz"
                  value={formData.website}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Phone No.</Label>
                <Input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="phone no"
                  value={formData.phone}
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
              <Button type="submit" color="primary">Add Company</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};

export default AddCompany;
