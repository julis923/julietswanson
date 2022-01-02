import { useEffect } from "react";
import {React, useState} from "react";
import { Link } from "react-router-dom";

const GeneralHeader = ({ resizing }) => {

    const [opacity, setOpacity] = useState(false)

    useEffect(() => {
        if (!opacity) {
            setTimeout(() => {
                setOpacity(true)
            }, 500)
        }
    }, [opacity])

    return (
        <div className={`nav-name-general ${resizing ? "no-transition" : ""} ${!opacity ? "" : "opaque"}`}>
            <Link to="/">
                <h1>juliet swanson</h1>
            </Link>
            <div className="nav-title">
                <h2>front-end.</h2>
                <h2>ux/ui.</h2>
            </div>
        </div>
    )
}

export default GeneralHeader;