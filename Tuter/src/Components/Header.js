import React, { Component } from "react";
import Logo from '../Assets/img/Logo.png';
import SignInScreen from "./SignInScreen";


class Header extends Component 
{
    
    render() 
    {
        return(            
            

            <div class="masthead d-flex">
                
                <div class="container text-center my-auto">
                    <img src={Logo} alt="Tuter Logo"/>
                    <h3 class="mb-5">
                        <em>Where it pays to be smart</em>
                    </h3>
                    <SignInScreen/>
                    
                <div class="overlay"></div>
                </div>
                
            </div>
 
        )
    }
} export default Header;
