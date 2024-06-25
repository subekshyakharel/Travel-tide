import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../assets/b.jpg';

const Home = () => {
  const apiEp = "https://randomuser.me/api/?results=20";
  const [data, setData] = useState([]);


  // const [searchTerm, setSearchTerm] = useState('')
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchapi = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const result = data.results;
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchapi(apiEp);
  }, []);

  // const handleSearch = (e) =>{
  //   e.preventDefault();
  //   if(searchTerm.toLowerCase === 'something'){
  //     navigate('/something');
  //   }
  // }
  
  // Function to chunk the data into arrays of 4
  const chunkData = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Chunk the data into arrays of 4 items each
  const chunkedData = chunkData(data, 4);

      
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark nav">
        <div className="container-fluid container flex">
          <Link className="navbar-brand" to={`/`}>Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className='navbar-nav'>
              <Link to={`/about`}>
                <li className='nav-item dropdown'>
                  <button className='btn btn-primary' type='button' id='dropdownMenuButton' aria-expanded="false">
                    About us
                  </button>
                </li>
              </Link>
            </ul>
            <Link to={`/places`} >
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button className="btn btn-primary" type="button" id="dropdownMenuButton" aria-expanded="false">
                  Places to visit
                </button>
              </li>
            </ul>
            </Link>
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

      <section className="banner" style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', scrollBehavior: 'smooth' }}>
        <div className="container flex">
          <div className='text-center '>
            <h1 className='text-white'>Find A Travel Buddy, share costs & Experiences</h1>
          <Link to={`/places`} > <button type='submit' className="btn btn-danger">Search new places</button> </Link>
          </div>
        </div>
      </section>

      <main>
        <div className="">
          <h2 className='text-center mt-5 mb-5'>Connect with Travellers..</h2>

          <div id="carouselExample" className="carousel slide mt-5 p-5" data-bs-ride="carousel">
            <div className="carousel-inner">
              {chunkedData.map((chunk, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <div className="row">
                    {chunk.map((user) => (
                      <div className="col-3 box" key={user.login.uuid}>
                        <img src={user.picture.large} alt={user.name.first} className="img-fluid" />
                        <h4>{user.name.first} {user.name.last}</h4>
                        <p>Planning a trip to: <span>{user.location.city}</span></p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </main>



      {/* Scrollable modal */}
      <div>
  {/* Button trigger modal */}
  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Launch static backdrop modal
  </button>
  {/* Modal */}
  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  );
};

export default Home;
