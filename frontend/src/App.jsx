import { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Symptom from "./pages/symptom/Symptom";
import AlertMessage from "./components/AlertMessage";
import "./App.css";

function App() {

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token')? true : false);
  const [message, setMessage] = useState(null);
  const [category, setCategory] = useState(null);
  const [user, setUser] = useState({})


  useEffect(() => {
    if (loggedIn){
        async function fetchLoggedInUser(){
            let myHeaders = new Headers();
            const token = localStorage.getItem('token');
            myHeaders.append('Authorization', `Bearer ${token}`);
            let response = await fetch('https://kekambas-blog-api.onrender.com/api/me', {
                headers: myHeaders
            });
            let data = await response.json();
            if (data.error){
                console.warn(data.error)
            } else {
                setUser(data)
            }
        };
        fetchLoggedInUser();
    }
}, [loggedIn])

function flashMessage(message, category){
    setMessage(message);
    setCategory(category);
};

function logUserIn(){
    setLoggedIn(true)
};

function logUserOut(){
    setLoggedIn(false);
    setUser({})
    localStorage.removeItem('token');
    // localStorage.removeItem('tokenExp');
    flashMessage('You have logged out', 'success')
};


  return (
      <>
        <Navbar loggedIn={loggedIn} />
        <div className="container">
            { message ? <AlertMessage flashMessage={flashMessage} message={message} category={category} /> : null}
            <Routes >
                <Route path='/' element={<Home user={user} loggedIn={loggedIn} />} />
                <Route path='/register' element={<Register flashMessage={flashMessage} />} />
                <Route path='/login' element={<Login flashMessage={flashMessage} logUserIn={logUserIn}/>} />
                <Route path='/symptom' element={<Symptom flashMessage={flashMessage} loggedIn={loggedIn} />} />
                {/* <Route path='/nutition' element={<Create flashMessage={flashMessage} loggedIn={loggedIn} />} />
                <Route path='/provider' element={<Create flashMessage={flashMessage} loggedIn={loggedIn} />} /> */}
            </Routes>
        </div>
      </>
  );
}

export default App;
