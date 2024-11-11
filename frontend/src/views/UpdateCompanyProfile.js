import React, { useState, useContext, useEffect } from 'react';
import User from './User';
import noteContext from 'context/notes/noteContext';
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
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import axios from 'axios';
import { setUser } from '../redux/userSlice';
import { setCompany } from '../redux/companySlice';

function UpdateCompanyProfile(props) {

    const context = useContext(noteContext);

    const { company } = useSelector(store => store.company)
    const dispatch = useDispatch()


    const [formData, setFormData] = useState({
        name: company?.name,
        about: '',
        address: "",
        website: ""
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${companyApi}/update`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            if (res.data.success) {
                toast.success(res.data.message)
                dispatch(setCompany(res.data.company))
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
                                <Label for="email">About</Label>
                                <Input
                                    type="text"
                                    name="about"
                                    id="about"
                                    placeholder="Enter about your company"
                                    value={formData.about}
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
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>



                            <FormGroup>
                                <Label for="phoneNumber">Website</Label>
                                <Input
                                    type="text"
                                    name="website"
                                    id="website"
                                    placeholder="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>



                            {/* <FormGroup>
                <Label for="resume">Uplode your Resume</Label>
                <Input
                  type="file"
                  name="resume"
                  id="resume"
                  
                  value={resume}
                  onChange={(e)=>setResume(e.target.value)}
                  required
                /> 
              </FormGroup> */}

                            <Button type="submit" color="primary"> Update Profile</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Form>
    );
};

export default UpdateCompanyProfile;
