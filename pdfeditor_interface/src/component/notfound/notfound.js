import React, { useState,useEffect,useCallback } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./style.css";

const NotFound = props => {

    const type = props.location.pathname === "/editor/file_not_found" ? "File" : "Page";
    const [count,setCount] = useState(0);
    const history = useHistory();

    useEffect(() => {
        if(count !== 404)
            setTimeout(() => setCount(() => count + 1), 1);
    },[count])

    const redirectClickHandler = useCallback(
        () => {
            history.push("/upload_file");
        }
        ,
        []
    )

    return( 
        <div className="page-notfound"> 
            <div className="countUp">
                <div className="number" data-count="404">{count}</div>
                <div className="text">{type} not found</div>
                <div className="text">This may not mean anything.</div>
                <div className="text">I'm probably working on something that has blown up.</div>
                <div className="button-wrapper">
                    <Button color="primary" variant="contained" onClick={redirectClickHandler}>Home</Button>
                </div>
            </div>
        </div>             
    )
}

export default NotFound;