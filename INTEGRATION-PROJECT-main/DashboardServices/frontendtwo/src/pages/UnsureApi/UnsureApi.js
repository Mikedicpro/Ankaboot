import React, { useContext, useState } from "react";
import {
  Col,
  Container,
  Row,
  Table,
  Button,
  Modal,
  InputGroup,
  Form,
} from "react-bootstrap";
import Header from "../../components/header/Header";
import { UserContext } from "../../App";

export default function UnsureApi() {
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
  const handleShow = (url) => {
    setShow(true);
    setAction({
      url: url,
      key: "",
    });
  };

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>#</th>
                  <th>URL</th>
                  <th>Extra-Info</th>
                  <th style={{ width: "50px" }}> Action</th>
                </tr>
              </thead>
              <tbody>
                {unsure.map((item, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{item.url}</td>
                    <td>{item.extraInfo}</td>
                    <td>
                      <Button size="sm" onClick={() => handleShow(item.url)}>
                        <i className="fas fa-plus">Submit</i>
                      </Button>
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
          <Modal.Title>Update API</Modal.Title>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Send Action</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
