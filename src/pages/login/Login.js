import { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import login from './Login.module.css';

const Login = () => {
    const auth = useContext(AuthContext)
    const [buttonClick, setButtonClick] = useState(false)
    const navigateTo = useNavigate()
    const email = useRef()
    const password = useRef()

    const submitHandler = (e) => {
        e.preventDefault();
        const userEmail = email.current.value;
        const userPassword = password.current.value;
        
        setButtonClick(true)
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCBK8Alre00hDm4NyzKDrAaPsW6h4gzcJs', 
        {
            method: "POST",
            body: JSON.stringify({
                email: userEmail,
                password: userPassword,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setButtonClick(false)
            if (res.ok) {
                return res.json()
            } else {
                return res.json().then(err => {
                    let error = 'Signup failed!'
                    if(err && err.error && err.error.message){
                        error = err.error.message
                    }
                    alert(error)
                    throw new Error(error)
                })
            }
        }).then(data => {
            console.log(data) 
            auth.login(data.idToken)
            auth.userData(data.displayName, data.profilePicture)
            navigateTo('/inbox')
        }).catch((err => {
            alert(err.message)
            setButtonClick(false)
          }))//if connection failed
    }

    return <>
        <div className={login.container}>
            <div className={login.content}>
                <h3>Login</h3>
                <form onSubmit={submitHandler}>
                    <input type='email' placeholder='email' ref={email} />
                    <input type='password' placeholder='password' ref={password} />
                    <button type='submit'>{!buttonClick && <p>Login</p>}
                    {buttonClick && <p>please wait....</p>}
                    </button>
                    <h6>forgot password?</h6>
                </form>
                <h5>Does not have an account?
                    <Link to='/signup'>Signup</Link>
                </h5>
            </div>
        </div>
    </>
}

export default Login;