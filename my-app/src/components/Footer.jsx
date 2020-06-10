import React from "react";
import ReactDOM from "react-dom";

let date = new Date();
let year = date.getFullYear();

function Footer() {
return (
    <footer>
<p className="footer"> Copyright © {year} </p>
    </footer>

)
}

export default Footer;