import React, { Component } from "react";
import "../App.css";

class ServerInfo extends Component {
  componentDidMount() {
    // setInterval(this.getServerData, 2000);
    fetch("/rest/server", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response server info: ", data);
        this.setState(data);
      });
  }

  render() {
    const haveData =
      this.state && this.state.result && this.state.result !== undefined && this.state.result["kie-server-info"];
    return (
      <div className="card mb-6">
        <div className="view overlay" className="ReactTitleStyle4">
          <center>
            <strong>Información Servidor Kie</strong>
          </center>
        </div>
        <div className="card-body jbpm-card-body">
          <dl className="row">
            <dt className="col-sm-5">Nombre</dt>
            {haveData ? (
              <dd className="col-sm-7">{this.state.result["kie-server-info"].name}</dd>
            ) : (
              <dd className="col-sm-9" />
            )}

            <dt className="col-sm-5">Id</dt>
            {haveData ? (
              <dd className="col-sm-7">{this.state.result["kie-server-info"].id}</dd>
            ) : (
              <dd className="col-sm-9" />
            )}

            <dt className="col-sm-5">Versión</dt>
            {haveData ? (
              <dd className="col-sm-7">{this.state.result["kie-server-info"].version}</dd>
            ) : (
              <dd className="col-sm-7" />
            )}

            <dt className="col-sm-5">Localización</dt>
            {haveData ? (
              <dd className="col-sm-7">{this.state.result["kie-server-info"].location}</dd>
            ) : (
              <dd className="col-sm-7" />
            )}

            <dt className="col-sm-5">Capacidades</dt>
            {haveData ? (
              <dd className="col-sm-7">
                <ul>
                  {this.state.result["kie-server-info"].capabilities.map((capability) => (
                    <li>{capability}</li>
                  ))}
                </ul>
              </dd>
            ) : (
              <dd className="col-sm-7" />
            )}
          </dl>
        </div>
      </div>
    );
  }
}

export default ServerInfo;
