import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as constants from '../constants';
import * as shared from '../shared'

function Header() {
  return (
    <section class="navbar-dark bg-dark header">
       <div class="container">
          <div class="row">
           <div class="col-sm-12"> 
            <nav class="navbar navbar-expand-lg ">
              <a class="navbar-brand text-white" href="#">{constants.COMPANY_NAME}</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item ">
                    <a class="nav-link " href={'#'+shared.convertHeaderToLink(constants.HEADER1)}>{constants.HEADER1}<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href={'#'+shared.convertHeaderToLink(constants.HEADER2)}>{constants.HEADER2}<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item dropdown">
                  <a class="nav-link" href={'#'+shared.convertHeaderToLink(constants.HEADER3)}>{constants.HEADER3}<span class="sr-only">(current)</span></a>
                  </li>
                </ul>
                
              </div>
             </nav>
            </div>
          </div>
        </div>
    </section> 
  );
}

export default Header;
