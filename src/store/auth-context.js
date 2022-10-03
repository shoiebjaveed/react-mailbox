import React,{ useState } from "react"


const AuthContext = React.createContext({
    token: '',
    username: '',
    imageURL: '',
    loggedIn: false,
    login: (token) => {},
    logout: () => {},
    userData: (data) => {}
})

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken)
    const [userName, setUserName] = useState(null)
    const [imageURL, setImageUrl] = useState(null)
    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    }

    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem('token');
    }

    const userHandler = (username, imageURL) => {
        setUserName(username)
        setImageUrl(imageURL)
    }

    const contextValue = {
        token: token,
        userName: userName,
        imageURL: imageURL,
        loggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        userData: userHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>

}

export default AuthContext;