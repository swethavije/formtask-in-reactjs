import React, { useState } from 'react'

const Form = () => {

    const[taskName,setTaskname]=useState("");
    const[description,setDescription]=useState("");
    const[completed,setCompleted]=useState();
    const[taskArray,setArray]=useState([]);
    const[errorShow,setError]=useState(false);

    const getTaskname=(e)=>{
        console.log("tasktname",e.target.value)
        setTaskname(e.target.value)
    }
    const getDesvalue=(e)=>{
        console.log("description",e.target.value)
        setDescription(e.target.value)
    }
    const getCompleted=(e)=>{
        console.log("completed",e.target.checked)
        setCompleted(e.target.checked ? "YES":"NO")
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        setError(true);
        if(taskName==="" || description==="")return;
        
        console.log(taskName,description,completed)
       pusharr();
       //console.log(taskArray)
    }
    const pusharr=()=>{
        setArray([...taskArray, taskName,description,completed]);
        
    }
    
    // let taskArray=[];
    // const pusharr=()=>{
    //    taskArray.push(taskName,description,completed)
    //    console.log(taskArray)
    // }
   
    
    // let task
    // const taskarr=()=>{
    //     task.push(taskName,description,completed)
    //     console.log(task)
    // }
    // taskarr();

  return (
    <div>

        <form onSubmit={handlesubmit}>
            <label >TaskName:</label>
            <input type="text" placeholder="Taskname"  onChange={getTaskname}/><br/>
            {taskName === "" && errorShow &&<p>Task name is required</p>}
            <label >Description:</label>
            <input type="text" placeholder="description"  onChange={getDesvalue}/><br/>
            {description === ""&& errorShow &&<p>Description is required</p>}
            <label >isCompleted:</label>
            <input type="checkbox" onChange={getCompleted}/>
            <input type="submit"/>
        </form>
        <ul>list of task:
            {taskArray.map((item,index)=>(
                <li key={index}>{item}</li>
               
            ))}
        </ul>
        
       
         
           
    </div>
  )
}

export default Form