import { useState } from "react";
import { ListTask } from "./components/List";

export const App=()=>{
  const [test,setTest]=useState(0);
  const [formData,setformData]=useState({
    name:"",
    email:"",
    password:""
  })
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setformData({
      ...formData,[e.target.name]:e.target.value,
    })
  }
  const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(formData);

    try {
      const response=await fetch("http://localhost:3000/api/v1/signup",{
        method:"POST",
        headers:{
          "content-Type":"application/json"
        },
        body:JSON.stringify(formData),
      })
      const data=await response.json();
      console.log(data);
      
    } catch (error) {
      console.error(error)
      
    }
  }

    {/*  Conditional Rendering ...   1. if   2. &&  3. ?,:*/}

  function  Dashboard({isLoding,isLoggedIn,username}) {

  // 1. if condition
  if(isLoding){
    return <div className="spinner"> Loding...</div> 
  }
  return (
    <div className="dashboard">
      {/* 2. condition ternary operator  */}
      {isLoggedIn ? <h1>Welcome,{username}</h1> : <h1>Please log In</h1>}
    
    {/* 3. && conditon  */}
    {isLoggedIn && <button>Go to Setting</button>}   
    </div>
  )
    
  }
  return <>
  <h1 className="bg-amber-50">Hello hiii</h1>
  <p>{test}</p>
  <button onClick={()=>setTest(test => test +1)}>increment</button>
  <form onSubmit={handleSubmit}>
    {/*  One way to get the form value and we have to use in multiple input field separtley
     <input type="text" placeholder="Name" name="name" value={formData.name} onChange={(e)=>setformData({
      ...formData,name:e.target.value,})
      }/> */}

    <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange}/>
    <input type="text"  placeholder ="email" name="email" value={formData.email} onChange={handleChange}/>
    <input type="password" placeholder="password"  name="password" value={formData.password} onChange={handleChange}/>
    <button type="submit">Submit</button>
  </form>

  <ListTask />

  </>
}