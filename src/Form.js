import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const[taskName,setTaskname]=useState("");
    const[description,setDescription]=useState("");
    const[completed,setCompleted]=useState();
    const[taskArray,setArray]=useState([]);
    const[errorShow,setError]=useState(false);
    // const [formValues, setFormValues] = useState(selectedData || {});
    const editarr = JSON.parse(localStorage.getItem('edit'));
    const[formvalue,setForm]=useState(editarr || {})
    console.log(formvalue)

   
    const getTaskname=(e)=>{
        console.log("tasktname",e.target.value)
        setTaskname(e.target.value)
        // setForm((prevData) => ({ ...prevData, name:e.target.value }));
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
       console.log(taskArray)
       const data=JSON.parse(localStorage.getItem('taskArray'))
       if(data===null||undefined){
        localStorage.setItem("taskArray",JSON.stringify(taskArray))
       }else{
        const temp = [...data,{name:taskName,des:description,iscomplete:completed}]
        localStorage.setItem("taskArray",JSON.stringify(temp))
       }
    //   updateval()
       
    }
    const pusharr=()=>{
        setArray([...taskArray, {name:taskName,des:description,iscomplete:completed}]);
        //console.log(taskArray)
    }
    // useEffect(() => {
    //    setForm((prevData) => ({ ...prevData,name:formvalue.taskname,des:formvalue.description }))
    //    localStorage.setItem('edit',JSON.stringify(formvalue))
    //   }, [formvalue]);
    // const updateval=()=>{
    //     setForm([...formvalue,{name:formvalue.name}])
    //     // localStorage.setItem('edit',JSON.stringify(formvalue))
    // }
     //localStorage.setItem('taskArray', JSON.stringify(taskArray));

    
   
   
    // const displayArray = JSON.stringify(taskArray);
    // localStorage.setItem('taskArray', displayArray);
    //go to home function
    let navigate=useNavigate();
    const gotohome=()=>{
       navigate("/Home")
    }

  return (
    
    <div>

        <form onSubmit={handlesubmit}>
            <label >TaskName:</label>
            <input type="text" placeholder="Taskname" value={formvalue.name} onChange={getTaskname}/><br/>
            {taskName === "" && errorShow &&<p>Task name is required</p>}
            <label >Description:</label>
            <input type="text" placeholder="description" value={formvalue.des} onChange={getDesvalue}/><br/>
            {description === ""&& errorShow &&<p>Description is required</p>}
            <label >isCompleted:</label>
            <input type="checkbox" value={formvalue.iscomplete} onChange={getCompleted}/>
            <input type="submit"/>
        </form>
        <div>
            <button onClick={()=>gotohome()}>HOME</button>
        </div>
    
       
         
           
    </div>
  )
}


export default Form