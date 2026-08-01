
import { useState } from "react"
function Signup() {
  const [username,setuername]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [role,setrole]=useState('')


  let senddetails= async(event)=>{
    event.preventDefault()
    let data= await fetch('http://localhost:3000/api/register',{
      method:'POST',
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify({ username,password,email,role})
    })

    let finaldata=await data.json()
    alert (finaldata.msg)
    localStorage.setItem('token: finaldata.token')
  }
  return (
    <>
    <form onSubmit={senddetails}>
    <input type="text"  onChange={(e)=>{setusername(e.target.value)}} placeholder="username"/>
    <input type="text"  onChange={(e)=>{setpassword(e.target.value)}} placeholder="password"/>
    <input type="text"  onChange={(e)=>{setemail(e.target.value)}} placeholder="email"/>
    <input type="text"  onChange={(e)=>{setrole(e.target.value)}} placeholder="role"/>
    <button type="submit"> Register</button>
    </form>
    </>
  )
}

export default Signup