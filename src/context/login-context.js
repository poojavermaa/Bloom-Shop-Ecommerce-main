import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const loginContext = createContext();

const LoginProvider = ({ children }) => {

    const [userToken, setUserToken] = useState();
    const [userDetails, setUserDetails] = useState();
    const [input, setInput] = useState({
        username: '',
        password: ''
    });

    const getUserDetails = async (userId) => {
        let res = await fetch(`https://dummyjson.com/users/${userId}`)
        let user = await res.json();
        setUserDetails(user);
    }

    useEffect(() => {
        let token = localStorage.getItem('bloomUserToken');
        if (token) {
            setUserToken(token);
            let userId = localStorage.getItem('userId');
            getUserDetails(userId)
        }
    }, [userToken])

    const tostifyObj = {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    }

    const notifySuccess = (content) => toast.success(content, tostifyObj);
    const notifyWarn = (content) => toast.warn(content, tostifyObj);
    const notifyInfo = (content) => toast.info(content, tostifyObj);
    const notifyError = (content) => toast.error(content, tostifyObj);

    const userLogin = async () => {
        let res = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: input.username,
                password: input.password,
                // expiresInMins: 60, // optional
            })
        })

        let data = await res.json()
        localStorage.setItem("bloomUserToken", JSON.stringify(data.token));
        localStorage.setItem("userId", JSON.stringify(data.id));
        setUserDetails(data);
        setUserToken(data.token);
        notifySuccess('Login SuccessFull');
    }

    const loginAction = (event) => {
        event.preventDefault();
        if (input.username && input.password) {
            userLogin();
        }
        else {
            notifyWarn('Please Enter Input')
        }
    }


    const userLogOut = () => {
        localStorage.removeItem('bloomUserToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('CartIdArray');
        setUserToken('');
        notifyInfo('Logout Successfull')
    }

    return (
        <loginContext.Provider value={{ loginAction, input, setInput, userToken, setUserToken, userLogOut, userDetails, notifySuccess, notifyInfo, notifyWarn }}>
            {children}
        </loginContext.Provider>
    )
}

const useGlobalLogin = () => useContext(loginContext);

export { LoginProvider, useGlobalLogin };