import { Link, useLocation } from "react-router-dom"

const Contact = () => {
    const location = useLocation()
   

const user = location.state.values
    
    return (
      <div >
          <h3> Name: {user.name}</h3>
          <h3> Age:{user.age}</h3>
          <h3> Email id:{user.email}</h3>
          <h3> Mobile no:{user.mobile}</h3>

          <Link to='/success'><button className="btn"> confirm</button></Link>
      </div>
    )
  }
  
  export default Contact