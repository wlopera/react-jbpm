import React, { Component } from "react";

class ProcessInstance extends Component {
  componentDidMount() {
    const url =
      "http://jbpm.pranical.com:8080/kie-server/services/rest/server/containers/evaluation_1.0.0-SNAPSHOT/processes/instances";
    const username = "yenny";
    const password = "guerrero";

    const headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.set("Authorization", "Basic " + Buffer.from(username + ":" + password).toString("base64"));

    fetch(url, { method: "GET", headers: headers })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data["process-instance"] });
        console.log("Data: ", this.state.data);
      });
  }

  render() {
    const haveData = this.state && this.state.data && this.state.data !== undefined;

    return (
      <div className="card mb-4">
        <div className="p-3 mb-2 bg-primary text-white">
          <center>
            <strong>Instancias de Procesos Pranical</strong>
          </center>
        </div>
        {haveData && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>process-instance-id</th>
                <th>process-id</th>
                <th>process-name</th>
                {/* <th>process-version</th>
                <th>process-instance-state</th> */}
                <th>container-id</th>
                <th>initiator</th>
                <th>process-instance-desc</th>
                <th>correlation-key</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((element, index) => (
                <tr key={index}>
                  <td> {element["process-instance-id"]}</td>
                  <td> {element["process-id"]} </td>
                  <td> {element["process-name"]} </td>
                  {/* <td> {element["process-version"]} </td>
                  <td> {element["process-instance-state"]} </td> */}
                  <td> {element["container-id"]} </td>
                  <td> {element["initiator"]} </td>
                  <td> {element["process-instance-desc"]} </td>
                  <td> {element["correlation-key"]} </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default ProcessInstance;
