import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  departmentName: z.string().min(3, { message: "Department name is required" }),
  departmentId: z.string().min(3, { message: "Department ID is required" }),
  contactPerson: z.string().min(3, { message: "Contact person is required" }),
  phone: z.string().length(11, { message: "Phone must be 11 digits" }),
  email: z.string().email({ message: "Invalid email address" }),
  officeAddress: z.string().min(3, { message: "Office address is required" }),
});

function DepartmentProfile() {
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      departmentName: "Roads Maintenance Department",
      departmentId: "ROADS-01",
      contactPerson: "Imran Baig",
      phone: "03001112233",
      email: "roads@civictrack.gov",
      officeAddress: "Municipal Office, City Hall",
    },
  });

  function submit(data) {
    console.log("Department Profile Updated:", data);
    setServerMessage("Department profile updated successfully!");
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <h2 className="fw-bold mb-1">Department Profile</h2>
          <p className="text-muted mb-4">
            Keep your department's contact information up to date.
          </p>

          <form onSubmit={handleSubmit(submit)}>
            <div className="mb-3">
              <label htmlFor="departmentName" className="form-label">
                Department Name
              </label>
              <input
                type="text"
                id="departmentName"
                className="form-control"
                {...register("departmentName")}
              />
              <p className="text-danger small mb-0">
                {errors.departmentName?.message}
              </p>
            </div>

            <div className="mb-3">
              <label htmlFor="departmentId" className="form-label">
                Department ID
              </label>
              <input
                type="text"
                id="departmentId"
                className="form-control"
                {...register("departmentId")}
              />
              <p className="text-danger small mb-0">
                {errors.departmentId?.message}
              </p>
            </div>

            <div className="mb-3">
              <label htmlFor="contactPerson" className="form-label">
                Contact Person
              </label>
              <input
                type="text"
                id="contactPerson"
                className="form-control"
                {...register("contactPerson")}
              />
              <p className="text-danger small mb-0">
                {errors.contactPerson?.message}
              </p>
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
              <p className="text-danger small mb-0">{errors.phone?.message}</p>
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
              />
              <p className="text-danger small mb-0">{errors.email?.message}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="officeAddress" className="form-label">
                Office Address
              </label>
              <input
                type="text"
                id="officeAddress"
                className="form-control"
                {...register("officeAddress")}
              />
              <p className="text-danger small mb-0">
                {errors.officeAddress?.message}
              </p>
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
  );
}

export default DepartmentProfile;
