import React, { useContext } from "react";
import { UserContext } from "../../App";
import Header from "../../components/header/Header";
import { Col, Container, Row, Table } from "react-bootstrap";
import { getReportData } from "../../services/mainService";

export default function Report() {
  const { report, setReport } = useContext(UserContext);

  React.useEffect(() => {
    getReportData()
      .then((res) => {
        console.log(res.data.data, "this is report");
        setReport(res.data.data);
      })
      .catch((error) => {
        console.error("AxiosError 444:", error);
      });
  }, []);
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <input type="date" id="start" name="trip-start" />
            <input
              type="date"
              id="start"
              name="trip-start"
              value="2018-07-22"
              min="2018-01-01"
              max="2018-12-31"
            />
            <Table striped bordered hover variant="light" size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Topic</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>NSI</th>
                </tr>
              </thead>
              <tbody>
                {report.map((item, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{item.topic}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    <td>{item.average}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
