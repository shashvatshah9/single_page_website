import React from 'react';
import {COMPANY_NAME} from '../constants'

function Footer()
{
    const year = new Date().getFullYear()
    return(
          <section class="bg-dark">
             <div class="container">
               <div class="row">  
                <div class="col-sm-12">
                  <h6 class="text-white text-center mb-3 mt-3">{`Copyright @ ${year} ${COMPANY_NAME}.`}</h6>
                  </div>  
               </div>
             </div>    
          </section>
    
    )
}

export default Footer;