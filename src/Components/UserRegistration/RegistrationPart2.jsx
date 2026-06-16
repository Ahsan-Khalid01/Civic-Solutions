import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
// import { RegContext } from "./RegistrationPart1";
import { RegContext } from "./RegistrationContext";
const schema = z.object({
  city: z
    .string()
    .min(2, { message: "City must be at least 2 characters long" })
    .max(100, { message: "City must be at most 100 characters long" }),
  area: z
    .string()
    .min(2, { message: "Area must be at least 2 characters long" })
    .max(100, { message: "Area must be at most 100 characters long" }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters long" })
    .max(200, { message: "Address must be at most 200 characters long" }),
  postalCode: z
    .string()
    .min(4, { message: "Postal code must be at least 4 characters long" })
    .max(10, { message: "Postal code must be at most 10 characters long" }),
});

function RegistrationPart2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const navigate = useNavigate();
  const { handleSaveStep } = useContext(RegContext);

  function submit(data) {
    console.log(data);
    handleSaveStep(data);
    navigate("/register/step3");
  }

  return (
    <>
      <div className="position-relative" style={{ height: "700px" }}>
        <div className="position-absolute top-50 start-50 translate-middle">
          <form onSubmit={handleSubmit(submit)}>
            <div>
              <label>Registration</label>
            </div>
            <br />

            <div className="mb-3">
              <label htmlfor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                id="city"
                className="form-control"
                placeholder="Enter Your City Name"
                {...register("city")}
              />
              <p style={{ color: "Red" }}>{errors.city?.message}</p>
            </div>

            <div className="mb-3">
              <label htmlfor="area" className="form-label">
                Area/Locality
              </label>
              <input
                type="text"
                id="area"
                className="form-control"
                placeholder="Enter Area"
                {...register("area")}
              />
              <p style={{ color: "Red" }}>{errors.area?.message}</p>
            </div>

            <div className="mb-3">
              <label htmlfor="address" className="form-label">
                Street Address
              </label>
              <input
                type="text"
                id="address"
                className="form-control"
                placeholder="Enter Your Street No"
                {...register("address")}
              />
              <p style={{ color: "Red" }}>{errors.address?.message}</p>
            </div>

            <div className="mb-3">
              <label htmlfor="postalCode" className="form-label">
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                className="form-control"
                placeholder="Enter Your City Postal code"
                {...register("postalCode")}
              />
              <p style={{ color: "Red" }}>{errors.postalCode?.message}</p>
            </div>

            <div className="d-flex gap-2">
              <Link to="/register" className="btn btn-success">
                Back
              </Link>

              <button type="submit" className="btn btn-primary">
                Next
              </button>

              {/* <Link to="/register/step3" className="btn btn-primary">
                Next
              </Link> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegistrationPart2;
