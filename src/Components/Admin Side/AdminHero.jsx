
import AdminDashboard from "../images/Admin Side Images/AdminDashboard.jpg";

function AdminHero(){
    return(
    <>
<div
  id="home" 
  id="carouselExampleCaptions" 
  className="carousel slide carousel-fade"
  data-bs-ride="carousel"
  data-bs-interval="3000"
  style={{ marginTop: "0px" }}
>

  {/* Top Heading (Project Name) */}
  <div
    className="position-absolute text-white"
    style={{
      zIndex: "10",
      top: "30px",
      left: "20px"
    }}
  >

    <h1
      className="fw-bold"
      style={{
        fontSize: "55px",
        fontFamily: "Georgia",
        textShadow: "3px 3px 10px black",
        maxWidth: "700px",
        lineHeight: "1.2"
      }}
    >
      Wellcome To
      <br />
      Admin Dashboard
    </h1>
 <p className="position-absolute text-white">
        Manage civic issues, departments, and system operations efficiently from one place.
      </p>
  </div>

  <div className="carousel-inner">

    {/* Slide 1 */}
    <div className="carousel-item active">
      <img 
        src={AdminDashboard} 
        className="d-block w-100"
        style={{ height: "100vh", objectFit: "cover" }}
        alt=""
      />
      <div className="carousel-caption">
        <h3>SYSTEM ADMINISTRATOR</h3>
      </div>
    </div>



 

  </div>

  {/* Buttons */}
  <button 
    className="carousel-control-prev" 
    type="button" 
    data-bs-target="#carouselExampleCaptions" 
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon"></span>
  </button>

  <button 
    className="carousel-control-next" 
    type="button" 
    data-bs-target="#carouselExampleCaptions" 
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon"></span>
  </button>

</div>
    </>
    )
}

export default AdminHero;