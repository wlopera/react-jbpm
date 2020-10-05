import React, { Component } from "react";
import "./App.css";

class ProcessInstancesInfo extends Component {
  componentDidMount() {
    //setInterval(this.getProcessInstancesData, 2000);
    fetch("/processinstances", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          instances: data,
        });
      });
  }

  //   getProcessInstancesData = () => {
  //     fetch("/processinstances", {
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         this.setState({
  //           instances: data,
  //         });
  //       });
  //   };

  render() {
    const haveData = this.state && this.state.instances;
    return (
      <div class="card mb-3">
        <div class="view overlay" className="ReactTitleStyle3">
          <center>
            <strong>Instancias de Procesos</strong>
          </center>
        </div>
        <div class="card-body jbpm-card-body">
          {haveData ? (
            <table class="table mb-0">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nombre</th>
                </tr>
              </thead>
              <tbody>
                {this.state.instances.map((processinst) => (
                  <tr>
                    <td>
                      <small>{processinst.id}</small>
                    </td>
                    <td>
                      <small>{processinst.processName}</small>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
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

export default ProcessInstancesInfo;
