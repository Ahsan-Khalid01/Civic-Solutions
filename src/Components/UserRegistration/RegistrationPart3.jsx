import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
// import { RegContext } from "./RegistrationPart1";
import { RegContext } from "./RegistrationContext";
import { userRegistration } from "../../serviceApi";
import { useState } from "react";
//  const [serverMessage, setServerMessage] = useState(" ") ;
const schema = z.object({
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(100, { message: "Password must be at most 100 characters long" }),
  confirmPassword: z
    .string()
    .min(6, {
      message: "Confirmed password must be at least 6 characters long",
    })
    .max(100, {
      message: "Confirmed password must be at most 100 characters long",
    }),
});

function RegistrationPart3() {
  const [serverMessage, setServerMessage] = useState(" ");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const navigate = useNavigate();
  const { regData } = useContext(RegContext);

  // const onSubmit = async (data) => {
  //   try {
  //     const fullData = { ...regData, ...data };
  //     const result = await userRegistration(fullData);
  //     setServerMessage(result.message);
  //   } catch (error) {
  //     setServerMessage(
  //       "An error occurred during registration. Please try again.",
  //     );
  //   }
  // };
  const onSubmit = async (data) => {
    try {
      const fullData = { ...regData, ...data };
      console.log("Sending data:", fullData); 
      const result = await userRegistration(fullData);

      if (result.success) {
        setServerMessage(" " + result.message);
        navigate("/login"); 
      } else {
        // setServerMessage(" " + result.message);
      }
    } catch (error) {
      console.error(error);
      setServerMessage("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="position-relative" style={{ height: "700px" }}>
        <div className="position-absolute top-50 start-50 translate-middle">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Registration</label>
            </div>
            <br />

            <p>
              Name: <strong>{regData.fullname}</strong>
            </p>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter Password"
                {...register("password")}
              />
              <p style={{ color: "Red" }}>{errors.password?.message}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirmed Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                placeholder="Re Enter Your Password"
                {...register("confirmPassword")}
              />
              <p style={{ color: "Red" }}>{errors.confirmPassword?.message}</p>
            </div>

            <div className="d-flex gap-2">
              <Link to="/register/step2" className="btn btn-success">
                Back
              </Link>

              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>

            <div />
          </form>
          {serverMessage && (
            <p>
              {" "}
              <strong>{serverMessage}</strong>
            </p>
          )}
        </div>
      </div>
    </>
  );
}
export default RegistrationPart3;
