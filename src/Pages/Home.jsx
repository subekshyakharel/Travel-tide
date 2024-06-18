import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/a.jpg';
import bannerImg from '../assets/b.jpg'; // Import the image

const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark nav ">
        <div className="container-fluid container flex">
          <Link className="navbar-brand" to={`/`}>Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className='navbar-nav'>
              <Link to={`/about`}><li className='nav-item dropdown'>
                <button className='btn btn-primary' type='button' id='dropdownMenuButton' data-bs-toggle="dropdown" aria-expanded="false">
                  About us
                </button>
              </li>
              </Link>

            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  Places to visit
                </button>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
                  <li><Link className="dropdown-item" to="/action">Action</Link></li>
                  <li><Link className="dropdown-item" to="/another-action">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/something-else">Something else here</Link></li>
                </ul>
              </li>
            </ul>
             
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  Find people
                </button>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
                  <li><Link className="dropdown-item" to="/action">Action</Link></li>
                  <li><Link className="dropdown-item" to="/another-action">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/something-else">Something else here</Link></li>
                </ul>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  Travel and Learn
                </button>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
                  <li><Link className="dropdown-item" to="/action">Action</Link></li>
                  <li><Link className="dropdown-item" to="/another-action">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/something-else">Something else here</Link></li>
                </ul>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button className="btn btn-primary" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  safety
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="banner" style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', scrollBehavior:'smooth' }}>
        <div className="container flex">
          <div>
            <h2 className='text-white'>Find A Travel Buddy,
            Share Costs & Experiences</h2>
        <form action="">
          <input type="text" placeholder='Where are you planning to go?' className='form'/>
          <button className="btn btn-danger">Search</button>
        </form>

        </div>
        </div>
      </section>

      <section className='jpt'>

      </section>

    </>
  );
}

export default Home;
