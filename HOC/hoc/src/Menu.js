/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import {withToggler} from "./HOCs/withToggler"

function Menu(props) {
    return (
        <div>
            <button onClick={props.toggle}>{props.on ? "Hide" : "Show"} Menu </button>
            <nav style={{display: props.on ? "block" : "none"}}>
                <h4>Signed in as Coder123</h4>
                <ul>
                    <li>Your Profile</li>
                    <li>Your Repositories</li>
                    <li>Your Stars</li>
                    <li>Your Gists</li>
                </ul>
               
            </nav>
        </div>
    ) 
}

export default withToggler(Menu, {defaultOnValue: true})