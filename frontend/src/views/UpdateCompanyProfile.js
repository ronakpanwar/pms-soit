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
    Spinner,
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

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        name: company?.name,
        about: company?.about || '',
        address: company?.address || '',
        website: company?.website || '',
        logo: ""
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleLogoChange = (e) => {
        const logo = e.target.files?.[0];
        setData({
            ...data,
            logo
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('about', data.about);
        formData.append('address', data.address);
        formData.append('website', data.website);
        if (data.logo) {
            formData.append('file', data.logo);
        }

        try {
            setLoading(true)
            const res = await axios.post(`${companyApi}/update`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            })
            if (res.data.success) {
                toast.success(res.data.message)
                dispatch(setCompany(res.data.company))
            }

        } catch (error) {
            toast.error(error.response?.data?.message)
        } finally {
            setLoading(false)
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
                                    value={data.about}
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
                                <Label for="phoneNumber">Website</Label>
                                <Input
                                    type="text"
                                    name="website"
                                    id="website"
                                    placeholder="website"
                                    value={data.website}
                                    onChange={handleChange}
                                    required
                                />
                            </FormGroup>



                            <FormGroup>
                                <Label for="logo">Uplode your Company Logo</Label>
                                <Input
                                    type="file"
                                    name="logo"
                                    id="logo"
                                    accept='image/*'
                                    onChange={handleLogoChange}
                                    required
                                />
                            </FormGroup>


                            <div className=" ">{
                                loading ? (
                                    <Button type="submit" color="primary" className=" py-2 mt-3">
                                        <div className="spinner-border spinner-border-sm" role="status" style={{ width: '1rem', height: '1rem' }}>
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </Button>

                                ) : (<Button type="submit" color="primary" className=" py-2 mt-3">Update profile</Button>)
                            } </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Form>
    );
};

export default UpdateCompanyProfile;
