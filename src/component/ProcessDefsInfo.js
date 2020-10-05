import React, { Component } from "react";

class ProcessDefsInfo extends Component {
  componentDidMount() {
    // setInterval(this.getProcessDefsData, 2000);

    const url = "http://jbpm.pranical.com:8080/kie-server/services/rest/server/containers/evaluation/processes";
    const username = "yenny";
    const password = "guerrero";

    const headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.set("Authorization", "Basic " + Buffer.from(username + ":" + password).toString("base64"));

    fetch(url, { method: "GET", headers: headers })
      .then((response) => response.json())
      .then((data) => {
        this.setState(data);
      });
  }

  // getProcessDefsData = () => {
  //   fetch("/rest/server/containers/sample-react-kjar/processes", {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.setState(data);
  //     });
  // };

  handleStartProcess = (cid, pid) => {
    console.log("##=> cid: " + cid);
    console.log("##=> pid: ", pid);

    const url =
      "http://jbpm.pranical.com:8080/kie-server/services/rest/server/containers/" +
      cid +
      "/processes/" +
      pid +
      "/instances";
    const username = "yenny";
    const password = "guerrero";

    const headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.set("Authorization", "Basic " + Buffer.from(username + ":" + password).toString("base64"));

    fetch(url, { method: "POST", headers: headers });
  };

  render() {
    const haveData = this.state && this.state.processes;
    return (
      <div className="card mb-3">
        <div className="p-3 mb-2 bg-success text-white">
          <center>
            <strong>Definición de Procesos</strong>
          </center>
        </div>
        <div className="card-body jbpm-card-body">
          {haveData ? (
            <table className="table mb-0">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                {this.state.processes.map((processdef, index) => (
                  <tr key={index}>
                    <td>
                      <small>{processdef["process-name"]}</small>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => this.handleStartProcess(processdef["container-id"], processdef["process-id"])}
                      >
                        Iniciar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Version</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody />
            </table>
          )}
        </div>
      </div>
    );
  }
}

export default ProcessDefsInfo;
