import React, { Component } from "react";
import firebase from 'firebase';
import Logo from '../Assets/img/Logo.png';


class Admin extends Component 
{
    render() 
    {
        return(


        <div class="masthead d-flex">

            <div className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        
                <button type="button" id="SearchButton" class="btn btn-link btn-sm order-1 order-lg-0"  >Unverified Transcripts</button>
                <button type="button" id="SearchButton" class="btn btn-link btn-sm order-1 order-lg-0"  >Verify Tutor</button>
                <button type="button" id="SearchButton" class="btn btn-link btn-sm order-1 order-lg-0" onClick={() => firebase.auth().signOut()}>Sign-out</button>
            </div>
                
            <div class="container text-center my-auto">
                <img src={Logo} alt="Tuter Logo"/>
                <h3 class="mb-5">
                    <em>Where it pays to be smart</em>
                </h3>
                
            <div class="overlay"></div>
            </div>
            
        </div>    
        )
    }
} export default Admin;