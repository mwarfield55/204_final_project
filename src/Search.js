import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

  constructor(){
    super();
  }

  render() {
    // <div className="col-lg-12 col-md-12 col-sm-12 col-12">
    // <div className="container" id="center">
    // <br />
    // <select>
    // <option value="" selected disabled hidden>Region</option>
    // <option value="NA">North America</option>
    // <option value="EU">Europe</option>
    // <option value="KOREA">Korea</option>
    // <option value="CHINA">China</option>
    // <option value="OTHER">Taiwan, Hong Kong and Macao</option>
    // </select>
    // <button type="button">Solo Queue Leaderboards</button>
    // <select>
    // <option value="" selected disabled hidden>School</option>
    // <option value="WUSTL">Washingon University</option>
    // <option value="HARVARD">Harvard</option>
    // <option value="UCB">UC Berkeley</option>
    // <option value="CMU">Carnegie Mellon</option>
    // </select>
    // <form action="#" autoComplete="off">
    // <input type="text" id="todo_val" name="fname" required></input>
    // <input type="submit" value="Search"></input>
    // </form>
    // </div>
    // </div>
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Region
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">North America</a>
                <a class="dropdown-item" href="#">Europe</a>
                <a class="dropdown-item" href="#">Korea</a>
                <a class="dropdown-item" href="#">China</a>
                <a class="dropdown-item" href="#">Taiwan, Hong Kong, and Macao</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Solo Queue Leaderboards</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Rival Boards
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" id="indent" href="#">Wash U</a>
                <a class="dropdown-item" id="indent" href="#">Harvard</a>
                <a class="dropdown-item" id="indent" href="#">UC Berkeley</a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          </form>
        </div>
      </nav>



    );
  }
}

export default Search;
