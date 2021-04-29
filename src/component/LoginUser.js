import {useState} from 'react'

export const LoginUser =(props)=>{
    const [userState, setUserState]= useState({
        login:'',
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
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor ='username or email'>Username or Email Address:</label>
            <input type ='text'  name ='login' value={userState.login} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor ='password'> Password:</label>
                <input type='password' name='password' value={userState.password} onChange={handleChange} required />
            </div>
            <input type ='submit' value ='sign in'/>

        </form>
        </>
    )
}