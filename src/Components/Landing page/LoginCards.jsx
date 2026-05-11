import DepartmentLogin from "../images/Department Side Images/DepartmentLogin.jpg";
import UserLoginBg from "../images/User Side Images/UserLoginBg.jpg";
import AdminLogin from "../images/Admin Side Images/AdminLogin.jpg";
import { Link } from "react-router-dom";

function LoginCards() {
  const cards = [
    {
      title: "User Login",
      image: UserLoginBg,
      alt: "User portal",
      link: "/userlogin",
      items: ["Report issues", "Track complaints", "Upload images", "Receive updates"],
    },
    {
      title: "Department Login",
      image: DepartmentLogin,
      alt: "Department portal",
      link: "/departmentlogin",
      items: ["View assigned issues", "Update progress", "Resolve complaints", "Manage tasks"],
    },
    {
      title: "Admin Login",
      image: AdminLogin,
      alt: "Admin portal",
      link: "/adminlogin",
      items: ["Manage departments", "Monitor system", "Handle users", "View reports"],
    },
  ];

  return (
    <>
      <h1 className="text-center mt-4 mb-2 display-4 fw-bold">Choose Your Console</h1>
      <p className="text-center text-muted mb-4">
        Three dedicated portals, each designed for a specific role.
      </p>

      <div className="d-flex justify-content-center gap-4 flex-wrap px-4">
        {cards.map((card) => (
          <div key={card.title} className="card col-3">
            <img
              src={card.image}
              className="card-img-top"
              alt={card.alt}
              style={{ height: "250px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center fs-4 fw-bold">{card.title}</h5>
              <ul className="mt-2 mb-3">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link to={card.link} className="btn btn-primary w-100 mt-auto py-2">
                Login
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LoginCards;
