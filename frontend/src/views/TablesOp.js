import React from 'react'
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";



function TablesOp(props) {

  let cheak = false;
  if(props.Name === 'Student'){
    cheak = true;
  }
   
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Opnings</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Company Name</th>
                      <th>Requirment</th>
                      <th>Graduation cgpa</th>
                      <th>Pakage</th>

                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>flipcart</td>
                      <td>frontend developer</td>
                      <td>6</td>
                      <td>6lpa</td>
                      <td className="text-right">
                      {cheak === true ? (
                        <button className="mx-1 border-success rounded" >Apply</button>
                     
                      ): ('')}
                      <button className="mx-1 border-success rounded">View</button>
                      </td>
                    </tr>

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

export default TablesOp
