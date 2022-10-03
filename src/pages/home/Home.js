import home from './Home.module.css'
import { GoMailRead } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigateTo = useNavigate()

    const welcomeHandler = () => {
        navigateTo('/login')
    }

    return <>
            <div className={home.container}>
                <div className={home.content}>
                    <h3><GoMailRead /></h3>
                    <p>MailBox...</p>
                    <button onClick={welcomeHandler}>Welcome back!</button>
                    <h6>T&C:Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua</h6>
                </div>
            </div>
    </>
}

export default Home;