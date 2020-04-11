import React, { Component } from "react";
import Logo from '../Assets/img/Logo.png';

class Header extends Component 
{
    render() 
    {
        return(
            <header class="masthead d-flex">
                <div class="container text-center my-auto">
                    <img src={Logo} alt="Tuter Logo"/>
                    <h3 class="mb-5">
                        <em>Where it pays to be smart</em>
                    </h3>

                    <div class="form">
                        <form>
                            <input type="text" class="form-control text-center my-auto" id="loginName" placeholder="Username" /><br/>
                            <input type="password" class="form-control text-center my-auto" id="loginPassword" placeholder="Password"/><br/>
                            <div>
                                <a class="btn btn-primary btn-m js-scroll-trigger" href="#about">Log in</a>
                            </div>
                        </form>
                    </div>
                    <p class="text-muted small mb-0">Copyright &copy; Tuter 2020</p>
                <div class="overlay"></div>
                </div>
                
            </header>
        )
    }
} export default Header;
