import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./userContext";
import { viewResidents, updateUser } from "../../serviceApi";

const schema = z.object({
  fullname: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" }),
  cnic: z
    .string()
    .length(13, { message: "CNIC must be 13 digits without dashes" }),
  phone: z.string().length(11, { message: "Phone must be 11 digits" }),
  email: z.string().email({ message: "Invalid email address" }),
  city: z.string().min(2, { message: "City is required" }),
  area: z.string().min(2, { message: "Area is required" }),
});

function MyProfile() {
  const [serverMessage, setServerMessage] = useState("");
  const { user } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  useEffect(() => {
    viewResidents().then((residents) => {
      const me = residents.find((r) => r.Email === user);
      if (me) {
        reset({
          fullname: me.FullName,
          cnic: me.CNIC,
          phone: me.Phone,
          email: me.Email,
          city: me.City,
          area: me.Area,
        });
      }
    });
  }, [user]);

  async function submit(data) {
    const res = await updateUser({
      Email: data.email,
      Phone: data.phone,
      City: data.city,
      Area: data.area,
      Street: data.area,
    });

    if (res.success)
       {
      setServerMessage(" Profile updated successfully!");
    } 
    else {
      setServerMessage(" " + res.message);
    }
  }

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <h2 className="fw-bold mb-1">My Profile</h2>
            <p className="text-muted mb-4">
              Update your personal information below.
            </p>

            <form onSubmit={handleSubmit(submit)}>
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  className="form-control"
                  {...register("fullname")}
                />
                <p style={{ color: "Red" }}>{errors.fullname?.message}</p>
              </div>

              <div className="mb-3">
                <label htmlFor="cnic" className="form-label">
                  CNIC Number
                </label>
                <input
                  type="text"
                  id="cnic"
                  className="form-control"
                  placeholder="13 digits without dashes"
                  {...register("cnic")}
                  disabled
                />
                <p style={{ color: "Red" }}>{errors.cnic?.message}</p>
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  className="form-control"
                  {...register("phone")}
                />
                <p style={{ color: "Red" }}>{errors.phone?.message}</p>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  {...register("email")}
                  disabled
                />
                <p style={{ color: "Red" }}>{errors.email?.message}</p>
              </div>

              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="form-control"
                  {...register("city")}
                />
                <p style={{ color: "Red" }}>{errors.city?.message}</p>
              </div>

              <div className="mb-3">
                <label htmlFor="area" className="form-label">
                  Area / Locality
                </label>
                <input
                  type="text"
                  id="area"
                  className="form-control"
                  {...register("area")}
                />
                <p style={{ color: "Red" }}>{errors.area?.message}</p>
              </div>

              <button type="submit" className="btn btn-warning fw-bold">
                Save Changes
              </button>
            </form>

            {serverMessage && (
              <p className="mt-3 text-center">
                <strong>{serverMessage}</strong>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
