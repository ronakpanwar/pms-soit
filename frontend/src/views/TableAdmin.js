
import React, { useContext, useEffect } from "react";
import NoteContext from "context/notes/noteContext";
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";
import axios from "axios";
import { userApi } from '../utils/utils'
import { useDispatch, useSelector } from "react-redux";
import { setAdmins } from "../redux/userSlice";
import { toast } from "sonner";

function TableAdmin() {
    const dispatch = useDispatch()
    const { admins } = useSelector(store => store.user)
    useEffect(() => {
        const getAllAdmins = async () => {
            try {
                const res = await axios.get(`${userApi}/get/admin`, {
                    withCredentials:true
                })
                if (res.data.success) {

                    dispatch(setAdmins(res.data.admins))
                }
            } catch (error) {
                console.log(error)
            }
        }
        getAllAdmins()
    }, [dispatch])


    const handleDelete = async(id) => {
        // Confirm deletion
        const confirmDelete = window.confirm("Are you sure you want to delete this admin?");
        if (!confirmDelete) return;
    
        try {
            const res = await axios.post(`${userApi}/delete/${id}`, {
               withCredentials:true
            });
    
            if (res.data.success) {
                toast.success(res.data.message);
    
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred.");
        }
    };
    

    return (

        <>

            <div className="content ">
                <Navbar className="px-4" color="dark" light expand="md">
                    <NavbarBrand className="" href="#">Placement Management System</NavbarBrand>
                    <Nav className="ms-auto" navbar></Nav>
                    <NavItem>
                        <a href="/admin/add-admin">
                            <Button color="primary mx-2">Add Admin</Button>
                        </a>
                    </NavItem>
                </Navbar>
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Admins</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>Name</th>
                                            <th>Gender</th>
                                            <th>email</th>
                                            <th>Mobile No.</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {admins?.map((admin, index) => (
                                            <tr key={index}>
                                                <td>{admin?.fullname}</td>
                                                <td>{admin?.gender}</td>
                                                <td>{admin?.email}</td>
                                                <td>{admin?.phoneNo}</td>

                                                <td className="text-center">

                                                    <Button type="submit" onClick={()=>handleDelete(admin?._id)} className="rounded"><i className="fa-solid fa-trash"></i></Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>

        </>

    );
}

export default TableAdmin;
