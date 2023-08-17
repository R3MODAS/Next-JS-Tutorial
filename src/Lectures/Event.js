"use client" // This is used to specify that the code is for client side not server side

import { useState } from "react"

function Event() {

    const [name, setName] = useState("Remo")
    const changeName = () => {
        setName("Rimo")
    }
  return (
    <>
        <h1>Events, Function and State</h1>
        <button onClick={changeName}>Click me</button>
        <h2>My Name is {name}</h2>
        {/* <InnerComp /> */}
        {/* {InnerComp()} */}
    </>
  )
}

function InnerComp(){
    return(
        <h1>Inner Comp</h1>
    )
}



export default Event