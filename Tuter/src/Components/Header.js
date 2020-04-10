import React, { Component } from "react";

class Header extends Component 
{
    render() 
    {
        return(
            <header class="masthead d-flex">
                <div class="container text-center my-auto">
                  <h1 class="mb-1">Stylish Portfolio</h1>
                  <h3 class="mb-5">
                    <em>Bootstrap Theme by Start Bootstrap</em>
                  </h3>
                  <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                </div>
                <div class="overlay"></div>
            </header>
        )
    }
} export default Header;
