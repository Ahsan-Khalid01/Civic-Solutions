import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { RegContext } from "./RegistrationContext";

const schema = z.object({
  fullname: z
    .string()
    .min(10, { message: "Minimum 3 characters required" })
    .max(100, { message: "Maximum 50 characters allowed" }),
  cnic: z
    .string()
    .min(13, { message: "CNIC must be 13 digits  without dashes" })
    .max(13, { message: "CNIC must be 13 digits" }),
  dob: z.string().min(1, { message: "date of birth is required" }),
  gender: z.enum(["male", "female"], { message: "select gender" }),
  phone: z
    .string()
    .length(11, { message: "Phone number must be 11 digits" })
    .min(11, { message: "Phone number must be 11 digits" })
    .max(11, { message: "Phone number must be 11 digits" }),
  email: z.string().email({ message: "Invalid email address" }),
  image: z.any(),
});

function RegistrationPart1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const navigate = useNavigate();
  const { handleSaveStep } = useContext(RegContext);

  function submit(data) {
    console.log("Valid Data", data);
    handleSaveStep(data);
    navigate("/register/step2");
  }

  return (
    <>
      <div className="position-relative" style={{ height: "700px" }}>
        <div className="position-absolute top-50 start-50 translate-middle">
          <form onSubmit={handleSubmit(submit)}>
            <div>
              <label>Resident Registration</label>
            </div>

            {/* Full Name */}
            <div className="mb-3">
              <label html for="fullname" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                className="form-control"
                placeholder="Enter Your Full Name"
                {...register("fullname")}
              />
              <p style={{ color: "Red" }}>{errors.fullname?.message}</p>
            </div>

            {/* CNIC */}
            <div className="mb-3">
              <label html for="cnic" className="form-label">
                CNIC
              </label>
              <input
                type="text"
                id="cnic"
                className="form-control"
                placeholder="Enter CNIC Without Dashes"
                {...register("cnic")}
              />
              <p style={{ color: "Red" }}>{errors.cnic?.message} </p>
            </div>

            {/* DOB */}
            <div className="mb-3">
              <label html for="dob" className="form-label">
                Date of Birth
              </label>
              <br />
              <input type="date" id="dob" {...register("dob")} />
              <p style={{ color: "Red" }}>{errors.dob?.message}</p>
            </div>

            {/* Gender */}
            <div className="mb-3">
              <label html for="gender" className="form-label">
                Gender
              </label>
              <br />

              <label html for="male">
                Male
              </label>
              <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                {...register("gender")}
              />
              <p style={{ color: "Red" }}>{errors.gender?.message}</p>

              <label html for="female">
                Female
              </label>
              <input
                type="radio"
                name="gender"
                value="female"
                id="female"
                {...register("gender")}
              />
              <p style={{ color: "Red" }}>{errors.gender?.message}</p>
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label html for="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                className="form-control"
                placeholder="Enter Your Phone Number"
                {...register("phone")}
              />
              <p style={{ color: "Red" }}>{errors.phone?.message}</p>
            </div>

            {/* Email */}
            <div className="mb-3">
              <label html for="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter Your Email Address"
                {...register("email")}
              />
              <p style={{ color: "Red" }}>{errors.email?.message}</p>
            </div>

            {/* Image */}
            <div className="mb-3">
              <label html for="image" className="form-label">
                Upload Picture
              </label>
              <br />
              <input type="file" id="image" {...register("image")} />
              <p style={{ color: "Red" }}>{errors.image?.message}</p>
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="terms"
                {...register("terms")}
              />
              <p style={{ color: "Red" }}>{errors.terms?.message}</p>
              <label className="form-check-label" html for="terms">
                I agree to the terms and conditions
              </label>
            </div>

            {/* <Link to="/register/step2" className="btn btn-primary">
              Next
            </Link> */}
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegistrationPart1;
