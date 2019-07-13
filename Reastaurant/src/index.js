import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Routers from "./Components/Routers";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Routers />, document.getElementById("root"));

serviceWorker.unregister();
