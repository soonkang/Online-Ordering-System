import React, {useState} from 'react'
import {db} from'./firebase'
import './style.css'
import {Link} from 'react-router-dom'
import {getDocs, addDoc, collection, where, query} from 'firebase/firestore'
const Sign_up = () => {
  const[name, SetName] = useState('')
  const[email, SetEmail] = useState('')
  const[password, SetPassword] = useState('')
  const dbref = collection(db, "csad")
  const signup = async () => 
  {
    const matchEmail = query(dbref, where('Email', '==', email))
    try 
    {
      const snapshot = await getDocs(matchEmail)
      const emailMatchingArray = snapshot.docs.map((doc) => doc.data())

    if (emailMatchingArray.length > 0) 
    {
      alert("This Email Address Already Exist")
    } 
    else 
    {
      await addDoc(dbref, {Name: name, Email: email, Password: password})
      alert("Sign Up Successful")
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
        <h2>Sign Up</h2>
        <div className='box'>
          <input type='text' placeholder='UserName' onChange={(e) => SetName(e.target.value)}></input>
        </div>
        <div className='box'>
          <input type='email' placeholder='E-mail' onChange={(e) => SetEmail(e.target.value)}></input>
        </div>
        <div className='box'>
          <input type='password' placeholder='Password' onChange={(e) => SetPassword(e.target.value)}></input>
          </div>
          <p >Already Have An Account</p><p style={{ textDecoration: 'underline' , color: 'blue'}}> <Link to='/login'>Sign In</Link></p>
        <button onClick={signup}>Sign Up</button>
      </div>
    </div>
    </>
  )
}

export default Sign_up