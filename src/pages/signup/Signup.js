import { useRef } from 'react';
import signup from './Signup.module.css';

const Signup = () => {
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()

    const submitHandler = (e) => {
        e.preventDefault();
        const enterDetails = {
            email: email.current.value,
            password: password.current.value
        }
        console.log(enterDetails)
    }

    return <>
    <div className={signup.container}>
        <div className={signup.content}>
            <h3>Signup</h3>
            <form onSubmit={submitHandler}>
                <input type='email' placeholder='email' ref={email}/>
                <input type='password' placeholder='password' ref={password}/>
                <input type='password' placeholder='confirm password' ref={confirmPassword}/>
                <button type='submit'>sign up</button>
            </form>
            <h5>Already have an account?
                
            </h5>
        </div>
    </div>
    </>
}

export default Signup;