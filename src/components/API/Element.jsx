import { useState, useEffect } from "react"


export default function Element(props) { 

     return (
          <div className="card">
            {props.type}
          </div>
     )
}