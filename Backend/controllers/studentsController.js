const total_data = [
    {
        name : "Tulasi",
        rollno : "C5"
    }
]

const getStudentsDetails = (req,res) => {
    // const mydata = {name : "Tulasi",rollno : "C5"};
    res.send(total_data);
};

const addStudents = (req,res) => {
    const data = req.body;
    total_data.push(data);
    res.send("Data added successfully");
}

export {getStudentsDetails,addStudents};