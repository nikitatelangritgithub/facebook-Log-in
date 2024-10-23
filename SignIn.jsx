import React from 'react';
// import './App.css'; // Importing CSS file

function SignIn() {
  return (
    <div className="app-container">
      <div className="container-1">
        <h1>Sign up</h1>
        <input type="text" placeholder=" Enter Username" />
        <input type="text" placeholder=" Enter Emai" />
        <input type="text" placeholder="Enter password" />
        <input type="text" placeholder="Enter Re-Password" />
        <button type="button">Submit</button>
      </div>
      <div className="container-2">
        <h1>Sign in with  <br/>social network</h1>
        <button className='blue'>Log in with facebook</button>
        <button className='nilli'>Log in with Twitter</button>
        <button className='red'>Log in with Google</button>
        
      </div>
    </div>
  );
}

export default SignIn;

