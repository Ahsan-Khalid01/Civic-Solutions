import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDepartment } from "../../serviceApi";

const departmentSchema = z.object({
  departmentName: z
    .string()
    .min(2, { message: "Department name must be at least 2 characters long" })
    .max(100, {
      message: "Department name must be at most 100 characters long",
    }),
  city: z
    .string()
    .min(2, { message: "City must be at least 2 characters long" })
    .max(100, { message: "City must be at most 100 characters long" }),
  id: z
    .string()
    .min(2, { message: "Id minimum 2 characters" })
    .max(15, { message: "id  must be maximum `15 characters" }),
  postalCode: z
    .string()
    .min(5, { message: "Postal code must be at least 5 characters long" })
    .max(10, { message: "Postal code must be at most 10 characters long" }),
  category: z
    .string()
    .min(2, { message: "Category must be at least 2 characters long" })
    .max(100, { message: "Category must be at most 100 characters long" }),
  headName: z
    .string()
    .min(2, {
      message: "Department head name must be at least 2 characters long",
    })
    .max(100, {
      message: "Department head name must be at most 100 characters long",
    }),
  officialPhone: z
    .string()
    .regex(/^\d{11}$/, {
      message: "Official phone number must be a 11-digit number",
    }),
  emergencyPhone: z
    .string()
    .regex(/^\d{11}$/, {
      message: "Emergency phone number must be a 11-digit number",
    }),
  loginId: z
    .string()
    .min(5, { message: "Login ID must be at least 5 characters long" })
    .max(100, { message: "Login ID must be at most 100 characters long" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(100, { message: "Password must be at most 100 characters long" }),
});

function AddDepartment() {
  const [serverMessage, setServerMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(departmentSchema),
  });

  async function submit(data) {
    const res = await addDepartment(data);
    if (res && res.departmentName) {
      setServerMessage(" Department added successfully!");
      reset();
    } else {
      setServerMessage(" Something went wrong. Please try again.");
    }
  }

  return (
    <div className="d-flex justify-content-center py-5 px-3">
      <div
        className="card border-0 shadow-sm p-4 p-md-5"
        style={{
          maxWidth: "760px",
          width: "100%",
          borderTop: "4px solid #0d6efd",
        }}
      >
        <h3 className="fw-bold mb-1">Add New Department</h3>
        <p className="text-muted small mb-4">
          Register a new department in the system
        </p>

        <form onSubmit={handleSubmit(submit)}>
          <p className="text-uppercase text-muted small fw-bold mb-3">
            Department Info
          </p>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="departmentName" className="form-label">
                Department Name
              </label>
              <input
                type="text"
                id="departmentName"
                className="form-control"
                placeholder="Enter Your Department Name"
                {...register("departmentName")}
              />
              <p className="text-danger small mb-0">
                {errors.departmentName?.message}
              </p>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                id="city"
                className="form-control"
                placeholder="Enter City Name"
                {...register("city")}
              />
              <p className="text-danger small mb-0">{errors.city?.message}</p>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="id" className="form-label">
                ID
              </label>
              <input
                type="text"
                id="id"
                className="form-control"
                placeholder="Enter unique Id"
                {...register("id")}
              />
              <p className="text-danger small mb-0">{errors.id?.message}</p>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="postalCode" className="form-label">
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                className="form-control"
                placeholder="Enter Postal Code"
                {...register("postalCode")}
              />
              <p className="text-danger small mb-0">
                {errors.postalCode?.message}
              </p>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select
                id="category"
                className="form-select"
                {...register("category")}
              >
                <option value="">-- Select Category --</option>
                <option value="Water">Water</option>
                <option value="Electricity">Electricity</option>
                <option value="Gas">Gas</option>
                <option value="Sanitation">Sanitation</option>
                <option value="Roads">Roads</option>
                <option value="Education">Education</option>
              </select>
              <p className="text-danger small mb-0">
                {errors.category?.message}
              </p>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="headName" className="form-label">
                Department Head Name
              </label>
              <input
                type="text"
                id="headName"
                className="form-control"
                placeholder="Enter Department Head Name"
                {...register("headName")}
              />
              <p className="text-danger small mb-0">
                {errors.headName?.message}
              </p>
            </div>
          </div>

          <hr className="my-3" />
          <p className="text-uppercase text-muted small fw-bold mb-3">
            Contact Info
          </p>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="officialPhone" className="form-label">
                Official Phone Number
              </label>
              <input
                type="text"
                id="officialPhone"
                className="form-control"
                placeholder="Enter Official Contact Number"
                {...register("officialPhone")}
              />
              <p className="text-danger small mb-0">
                {errors.officialPhone?.message}
              </p>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="emergencyPhone" className="form-label">
                Emergency Phone Number
              </label>
              <input
                type="text"
                id="emergencyPhone"
                className="form-control"
                placeholder="Enter Emergency Contact Number"
                {...register("emergencyPhone")}
              />
              <p className="text-danger small mb-0">
                {errors.emergencyPhone?.message}
              </p>
            </div>
          </div>

          <hr className="my-3" />
          <p className="text-uppercase text-muted small fw-bold mb-3">
            Login Credentials
          </p>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="loginId" className="form-label">
                Login ID
              </label>
              <input
                type="text"
                id="loginId"
                className="form-control"
                placeholder="Enter Login ID"
                {...register("loginId")}
              />
              <p className="text-danger small mb-0">
                {errors.loginId?.message}
              </p>
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="password" className="form-label">
                Temporary Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter Temporary Password"
                {...register("password")}
              />
              <p className="text-danger small mb-0">
                {errors.password?.message}
              </p>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-bold mt-2">
            Add Department
          </button>

          {serverMessage && (
            <p className="text-center small mt-3 mb-0">
              <strong>{serverMessage}</strong>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default AddDepartment;
