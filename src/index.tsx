import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.render(
    <div>
        <Hello framework="y" compiler="x"/>
        <button>ummm</button>
    </div>,
    document.getElementById("example")
);

