import React from "react";
import ProcessInstance from "./component/ProcessInstance";
import ProcessDefsInfo from "./component/ProcessDefsInfo";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-sm-2">
          <ProcessDefsInfo />
        </div>
        <div className="col-sm-10">
          <ProcessInstance />
        </div>
      </div>
    </div>
  );
}

export default App;
