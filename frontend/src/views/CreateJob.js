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

function CreateJob()  {
    const [formData, setFormData] = useState({
          position:'',
          cgpa:'',
          work:'',
          pakage:'',
          skills:'',
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
    console.log(formData); // Here, you can do whatever you want with the formData
    // For example, you can send the formData to a server using fetch or axios
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
                <Label for="work">Work Duration</Label>
                <Input
                  type="textarea"
                  name="work"
                  id="work"
                  placeholder="Time of work and month"
                  value={formData.work}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="pakage">Pakage</Label>
                <Input
                  type="text"
                  name="pakage"
                  id="pakage"
                  placeholder=" in lpa"
                  value={formData.pakage}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="skills">Skills</Label>
                <Input
                  type="textarea"
                  name="skills"
                  id="skills"
                  placeholder="Require Skills"
                  value={formData.skills}
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