import React, { useState , useContext } from 'react';
import NoteContext from 'context/notes/noteContext';
import { companyApi } from '../utils/utils';
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
import axios from 'axios';

function AddCompany()  {

  const context = useContext(NoteContext);
  const {addCompany} = context;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
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
      const res = await axios.post(`${companyApi}/create` , formData , {
        headers:{
          'Content-Type':'application/json'
        },
        withCredentials:true
      })
      if(res.data.success){
        toast.success(res.data.message);
      }
      
     } catch (error) {
      toast.error(error.response.data.message)
     }
   
  };
    
  return (
    <Form className=' content' onSubmit={handleSubmit}>
      <Row>
        <Col md="12">
          <Card className="card-user">
            <CardHeader>
              <CardTitle tag="h5" >Add Company</CardTitle>
            </CardHeader>
            <CardBody>
              <FormGroup>
                <Label for="companyname">Company Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="CompanyName"
                  value={formData.name}
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
