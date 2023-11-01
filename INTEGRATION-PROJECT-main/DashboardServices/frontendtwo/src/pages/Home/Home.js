import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Header from "../../components/header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover variant="light" size="sm">
              {/* <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>URL</th>
                  <th>Created At</th>
                  <th>Updated At</th>
                </tr>
              </thead> */}
              <tbody>
                {/* <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr> */}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
