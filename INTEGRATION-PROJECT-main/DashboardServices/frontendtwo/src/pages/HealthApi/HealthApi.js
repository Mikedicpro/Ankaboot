import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Table,
  Modal,
  InputGroup,
  Form,
} from "react-bootstrap";
import { UserContext } from "../../App";
import Header from "../../components/header/Header";
import { getHealthData, addApi } from "../../services/mainService";

export default function HealthApi() {
  const {
    report,
    setReport,
    health,
    setHealth,
    unsure,
    setUnsure,
    action,
    setAction,
  } = React.useContext(UserContext);

  const [show, setShow] = useState(false);
  const handleClose = (url) => setShow(false);
  const handleShow = (url) => setShow(true);

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Button
            style={{ marginBottom: "5px" }}
            variant="primary"
            onClick={handleShow}
          >
            Add New API
          </Button>
        </div>

        <Row>
          <Col>
            <Table striped bordered hover variant="light" size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>URL</th>
                  <th>API-KEY</th>
                  <th style={{ textAlign: "center" }}>IS-NEEDS-KEY</th>
                </tr>
              </thead>
              <tbody>
                {health.map((item, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{item.url}</td>
                    <td>{item.apiKey}</td>
                    <td style={{ textAlign: "center" }}>
                      {item.needsKey ? <p>&#9989;</p> : <p>&#x2717;</p>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New API</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">API URL:</InputGroup.Text>
            <Form.Control
              id="basic-url"
              aria-describedby="basic-addon3"
              defaultValue={action.url}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">API Key:</InputGroup.Text>
            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>
          <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            label="Is Needs Key"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addApi()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
