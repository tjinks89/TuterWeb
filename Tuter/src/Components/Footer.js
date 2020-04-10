import React, { Component } from "react";

class Footer extends Component 
{
    render() 
    {
        return(
        <footer class="footer text-center">
            <div class="container">
              <ul class="list-inline mb-5">
                <li class="list-inline-item">
                  <a class="social-link rounded-circle text-white mr-3" href="#">
                    <i class="icon-social-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link rounded-circle text-white mr-3" href="#">
                    <i class="icon-social-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="social-link rounded-circle text-white" href="#">
                    <i class="icon-social-github"></i>
                  </a>
                </li>
              </ul>
              <p class="text-muted small mb-0">Copyright &copy; Your Website 2019</p>
            </div>
        </footer>
        )
    }
} export default Footer;