import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    
    const taskArray = JSON.parse(localStorage.getItem('taskArray'));

    
    const [items, setItems] = useState(taskArray)

    const removeItem = (id) => {
        // const updatedItems = items.filter((item) => item.id !== id);
        // setItems(updatedItems);
        setItems(items.filter((item)=>item.id != id))
        console.log(items)
        alert("delete")
        // let finddata = items.find(function(item){
        //     return item.id === id;
        //  })
        //  if(finddata){
        //     let updateobject = items.filter(function(item){
        //         return item.id !== id;
    
        //     });
        //     setItems(updateobject);
        //     console.log(items)
            
        //  }
      };

    //go to form function
    let navigate=useNavigate();
    const gotoForm=()=>{
       navigate("/Form")
    }

  return (
    <div>list Of task:
      
        <table border="1">
            <thead>
            <tr>
                {/* <th>Id</th> */}
                <th>TaskName</th>
                <th>Description</th>
                <th>IsCompleted</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
           
        {taskArray.map((item)=>( <tr key={item.id}>
             {/* <td>{item.id}</td> */}
                <td >{item.name}</td>
                <td>{item.des}</td>
                <td>{item.iscomplete}</td>
                <td><button>Edit</button></td>
                <td><button onClick={() => removeItem(item.id)}>Delete</button></td>
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