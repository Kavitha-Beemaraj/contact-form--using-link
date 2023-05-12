import { useState } from "react"
import { Link } from "react-router-dom"

const AddContact = () => {

    const [name,setName]=useState('')
    const [age,setAge]=useState(0)
    const [email,setEmail]=useState('')
    const [mobile,setMobile]=useState('')

    const onSubmit=(e) =>{
        e.preventDefault()
        
        if(!name){
            alert('please enter your name')
            return
        }
    }

    const values={name, age, email, mobile}

  return (
    <form className="add-form " onSubmit={onSubmit}>
            <h2 className="heading"> Fill your details:</h2>
            
                <div className='form-control'>
                    <label><strong>Name:</strong></label>
                    <input type='text' placeholder='Enter your name'
                    value={name} onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label><strong> Age:</strong></label>
                    <input type='number' placeholder='Enter your age' 
                    value={age} onChange={(e)=> setAge(e.target.value)}
                    />
                    </div>
                <div className='form-control'>
                    <label><strong>Email:</strong></label>
                    <input type='email' placeholder='Enter your email id' 
                    value={email} onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label><strong> Mobile Number:</strong></label>
                    <input type='text' placeholder='enter your mobile number' 
                    value={mobile} onChange={(e)=> setMobile(e.target.value)}
                    />
                </div>
                
                <input type='submit' value='Save' className='btn'/>

                <Link to="/confirm" state={{values: values}}>
                    <button className="btn"> Next</button></Link>
                
        </form>
    )

}

export default AddContact