import React from 'react';


function header() {
  return (
    <div className="container">
      <div className="row">
        <div className=" justify-content-center">
          <nav className="navbar navbar-expand-lg navbar-light bg-blue">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"><span class="navbar-brand mb-0 h1 red" style={{color: "red"}}>TIME</span></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">AMERICA MUST CHANGE</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">RACISM AND COVID-19</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link active" aria-current="page" href="#">
                      INEQUALITY
                    </a>
                   
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">BLACK DISABLED AND AT RISK</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">                    
                      NEWSLETTER</a>
                  </li>
                </ul>
                <hr/>
              </div>
            </div>
          </nav>
        </div>

      </div>
    </div>);
}

export default header;