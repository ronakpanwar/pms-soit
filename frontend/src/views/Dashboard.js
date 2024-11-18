
import React , {useContext} from "react";
import noteContext from "context/notes/noteContext";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import { useSelector } from "react-redux";
// core components


function Dashboard() {
  
  const context = useContext(noteContext);
  const {allSelected }  = useSelector(store=>store.user);
  const {companys} = useSelector(store=>store.user)
  const {students}  = useSelector(store=>store.user)



  return (
    <>
      <div className="content">
        <Row>
          <Col lg="4" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Students</p>
                    <CardTitle tag="p">{students.length}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                {/* <div className="stats ">
                  <i className="fas fa-sync-alt mx-2" /><a href="/tables" className="mx-4">Add student</a>
                </div> */}
              </CardFooter>
            </Card>
          </Col>
          <Col lg="4" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                    <i className="fa-regular fa-building text-primary"></i>
                      {/* <i className="nc-icon nc-money-coins text-success" /> */}
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Company</p>
                      <CardTitle tag="p">{companys.length}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                {/* <div className="stats">
                  <i className="far fa-calendar" /> <a href="#" className="mx-4"> Add Company</a>
                </div> */}
              </CardFooter>
            </Card>
          </Col>
          <Col lg="4" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                    <i className="fa-solid fa-graduation-cap text-success"></i> 
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Selected Students</p>
                      <CardTitle tag="p">{allSelected.length}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                {/* <div className="stats">
                <a href="#" className="mx-2"> see Selected students</a>
                </div> */}
              </CardFooter>
            </Card>
          </Col>
       
        </Row>
       
      </div>
    </>
  );
}

export default Dashboard;
