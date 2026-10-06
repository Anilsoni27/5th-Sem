const root = ReactDOM.createRoot(
    document.getElementById("root")
);

const ChildComponent = (props) => {
    const {name,email,section,isStudent} = props;
    return (<div>
        <h1>Hello{name}</h1>
        <h1>{email}</h1>
        <h2>{section}</h2>
        {isStudent?<p>Student</p>:<p>Not Student</p>}
    </div>)
}

const ParentComponent = () => {
    let user = [{
        name : "Anil",
        email : "anilsonar4002@gmail.com",
        section : "CSE 16"
    },
    {
        name : "XYZ",
        email : "aabc4002@gmail.com",
        section : "CSE 16"
    }]


    return(<div>
        <ChildComponent {...user[0]}  isStudent={true}/>
        <ChildComponent {...user[1]} section="cse-27" isStudent={true}/>
       {/* { <ChildComponent name={name} email={email} section={section}/>} */}
    </div>)
}
root.render(<ParentComponent/>)