import {useState} from 'react'

export const NewUser =(props)=>{
    const [userState, setUserState]= useState({
        username:'',
        email:'',
        password:''
    })

    const handleSubmit =(e)=>{
         e.preventDefault()
         props.handleSubmit(userState)
    }

    const handleChange =(e)=>{
        let newUser ={...userState}
        newUser[e.target.name]=e.target.value
        setUserState(newUser)
        console.log('newUser', newUser)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor ='username'>Username:</label>
            <input type ='text' id ='username' name ='username' value={userState.username} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor ='email'>Email Address:</label>
                <input type ='text' name ='email' value={userState.email} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor ='password'> Password(6 characters minimum):</label>
                <input type='password' name='password' value={userState.password} onChange={handleChange} minLength='6' required />
            </div>
            <input type ='submit' value ='sign in'/>

        </form>
        </>
    )
}