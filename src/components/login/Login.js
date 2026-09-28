import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import {getDocs, collection, where, query} from 'firebase/firestore'
import {db} from './firebase'
const Login = () => {
    const [username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const Login = async () =>
    {
        const dbref = collection(db, 'csad')
        try 
        {
            const emailMatch = query(dbref, where('Email', '==', username))
            const passwordMatch = query(dbref, where('Password', '==', password))
            const emailSnapshot = await getDocs(emailMatch)
            const emailArray = emailSnapshot.docs.map((doc) => doc.data())
            const passwordSnapshot = await getDocs(passwordMatch)
            const passwordArray = passwordSnapshot.docs.map((doc) => doc.data())
            if (emailArray.length > 0 && passwordArray.length> 0) 
            {
                alert("Login successfully")
            } 
            else 
            {
                alert("Check Your Email and Password or Create Account")
            }
        } 
        catch (error) 
        {
            alert(error)
        }
    }
  return (
    <>
    <div className='container'>
      <div className='form'>
        <h2>Login</h2>
        <div className='box'>
          <input type='text' placeholder='UserName' onChange={(e) => setUsername(e.target.value)}></input>
        </div>
        <div className='box'>
          <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <p>Don't Have An Account</p><p style={{ textDecoration: 'underline' , color: 'blue'}}> <Link to='/signup'>Sign Up</Link></p>
        <button onClick={Login}>Login</button>
      </div>
    </div>
    </>
  )
}

export default Login