import React from 'react'
import { useState } from 'react';
import { Link, json, useNavigate } from 'react-router-dom';

const Home = () => {

    
    const taskArray = JSON.parse(localStorage.getItem('taskArray'));
    // localStorage.removeItem('taskArray')
    console.log(taskArray)

    
    const [items, setItems] = useState(taskArray)
    // const[editData,setEdit]=useState(null)

    const removeItem = (id) => {
        setItems(()=>items.filter((item,index)=>index != id))
        console.log(items)

      };
      localStorage.setItem('taskArray', JSON.stringify(items));
    // const editItem = (editobj)=>{
    //     console.log(editobj)
    //     setEdit(editobj)
    //    if(editData !== null){
    //     localStorage.setItem("edit",JSON.stringify(editData))
    //    gotoForm(editData); 
    //    }else{
    //     return
    //    }
    // // }
    // const editItem =(obj)=>{
       
    //     localStorage.setItem("edit",JSON.stringify(obj))
    //     gotoForm();
    //  }
    const editItem =(obj)=>{
        navigate(`/Form?name=${obj.name}`)
    }
    
    

    //go to form function
    let navigate=useNavigate();
    const gotoForm=()=>{
       navigate("/Form")
    }
    // let navie=useNavigate();
    // const gotoEdit=()=>{
    //    navie("/edit")
    // }

  return (
    <div>list Of task:
      
        <table border="1">
            <thead>
            <tr>
                <th>Id</th>
                <th>TaskName</th>
                <th>Description</th>
                <th>IsCompleted</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
           
        {items?.map((item,index)=>( <tr key={index}>
             <td>{index+1}</td>
                <td >{item.name}</td>
                <td>{item.des}</td>
                <td>{item.iscomplete}</td>
                <td><button onClick={()=>editItem(item)}>Edit</button></td>
               {/* <td> <Link to={`/Form/${editData.name}`}>Edit</Link></td> */}
                <td><button onClick={()=>removeItem(index)}>Delete</button></td>
               
            </tr>))  } 
            </tbody>
           

        </table>
        <div>
            <button onClick={()=>gotoForm()}>Go To Form</button>
        </div>
    </div>
  )
}

export default Home