import React from "react";

import axios from 'axios';

const getStudents = () => {
    
    axios.get("http://localhost:8000/get-students").then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
}

const addStudents = () => {

    axios.post("http://localhost:8000/post-students",{"name" : "Tulasiii"}).then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
}
const GetData = () => {
    return (
        <>
            <h1>Hello this is frontend</h1>
            <button onClick={getStudents}>Get Data</button>
            <button onClick={addStudents}>Add Students</button>
        </>
    )
}

export default GetData;