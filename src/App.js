import React from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Movies from "./components/Movies";
import Navbar from "./components/Nav";
import './styles/style.scss';
import {useEffect, useState} from "react";
import fire from "./fire";
import Hero from "./Hero"
import Login from "./Login";
import './pages/designs/main.scss'
import './pages/designs/actors.scss'
import './pages/designs/genres.scss'
import './pages/designs/movies.scss'
import './pages/designs/navbar.scss'



const App = () => {
    
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    

    const clearInputs = () => {
        setEmail("");
        setPassword("");
    }
    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    }

    const handleLogin = () => {
        clearErrors();
        fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((err) => {
            switch (err.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break
                default: 
                    break
            }
        })
    }

    const handleSignUp = () => {
        clearErrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((err) => {
            switch (err.code) {
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break
                default: 
                break
            }
        });
    };

    const handleLogout = () => {
        fire.auth().signOut();
    };
    

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            } 
        })
    }

    useEffect (() => {
        authListener();
    }, [])


//kopmonent render bulishidan oldin iwled

return (
    <>
    {user ? (
        <>
            <Navbar/>  
            <Main/>
            <Movies/>
            <Hero handleLogout={handleLogout}/>
            <Footer/>
        </>
        ) : (
        <Login 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
        />
        )}
    </>
  )
}

 


export default App;

//kayumov@gmail.com
//111111
