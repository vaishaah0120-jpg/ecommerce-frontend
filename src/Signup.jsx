import { useState } from "react"

function Signup() {
  const [username, setuername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [role, setrole] = useState('')

  let senddetails = async (event) => {
    event.preventDefault()
    let data = await fetch('https://backend-ecomm-zawk.onrender.com/api/register', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ username, password, email, role })
    })

    let finaldata = await data.json()
    alert(finaldata.msg)
    localStorage.setItem('token: finaldata.token')
  }

  return (
    <section className="form-card">
      <p className="card-badge">Join now</p>
      <h2>Create your account</h2>
      <p>Register to start exploring our curated experience.</p>

      <form onSubmit={senddetails}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={(e) => { setuername(e.target.value) }} placeholder="username" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="text" onChange={(e) => { setpassword(e.target.value) }} placeholder="password" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" onChange={(e) => { setemail(e.target.value) }} placeholder="email" />
        </div>

        <div className="form-group">
          <label htmlFor="role">Role</label>
          <input id="role" type="text" onChange={(e) => { setrole(e.target.value) }} placeholder="role" />
        </div>

        <button className="form-submit" type="submit">Register</button>
      </form>
    </section>
  )
}

export default Signup