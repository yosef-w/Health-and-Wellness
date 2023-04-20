import { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/constants/navbar/Navbar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Symptom from "./pages/symptom/Symptom";
import AlertMessage from "./components/alert/AlertMessage";
import "./App.css";
import Nutrition from "./pages/nutrition/Nutrition";
import Footer from "./components/constants/footer/Footer";
import Vitals from "./pages/vitals/Vitals";
import Profile from "./pages/profile/Profile";

function App() {

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token')? true : false);
  const [message, setMessage] = useState(null);
  const [category, setCategory] = useState(null);
  const [user, setUser] = useState({})
  const [foodData, setFoodData] = useState(null);

function addFood(foodData) {
    setFoodData(foodData)}

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
      <div className="app-container">
        <Navbar loggedIn={loggedIn} logUserOut={logUserOut} />
        <div className="container">
            { message ? <AlertMessage flashMessage={flashMessage} message={message} category={category} /> : null}
            <Routes >
                <Route path='/' element={<Home user={user} loggedIn={loggedIn} />} />
                <Route path='/register' element={<Register flashMessage={flashMessage} />} />
                <Route path='/login' element={<Login flashMessage={flashMessage} logUserIn={logUserIn}/>} />
                <Route path='/symptom' element={<Symptom flashMessage={flashMessage} loggedIn={loggedIn} />} />
                <Route path='/nutrition' element={<Nutrition flashMessage={flashMessage} loggedIn={loggedIn} addFood={addFood} foodData = {foodData} />} />
                <Route path='/vitals' element={<Vitals flashMessage={flashMessage} logUserIn={logUserIn}/>} />
                <Route path='/profile' element={<Profile flashMessage={flashMessage} logUserIn={logUserIn}/>} />
                {/* <Route path='/provider' element={<Provider flashMessage={flashMessage} loggedIn={loggedIn} />} />  */}
            </Routes>
        <Footer />
        </div>
      </div>
  );
}

export default App;
