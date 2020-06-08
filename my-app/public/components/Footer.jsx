import React from "react";
import ReactDOM from "react-dom";

let date = new Date();
let year = date.getFullYear();

function Footer() {
return (
<p className="footer"> Copyright {year} </p>
)
}

export default Footer;