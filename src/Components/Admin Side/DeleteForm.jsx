import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  departmentName: z.string().min(2, { message: "Department name must be at least 2 characters long" }),
  departmentId: z.string().uuid({ message: "Invalid department ID" }),
  city: z.string().min(2, { message: "City name must be at least 2 characters long" }),
  postalCode: z.string().regex(/^[0-9]{5}$/, { message: "Invalid postal code" }),
  category: z.string().min(2, { message: "Category must be at least 2 characters long" }),
  headName: z.string().min(2, { message: "Head name must be at least 2 characters long" }),
  reason: z.string().min(10, { message: "Reason must be at least 10 characters long" }),
});

function DeleteForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  function submit(data) {
    console.log(data);
  }

  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label>Delete Department</label>
          </div>
          <br />

          <div className="mb-3">
            <label htmlfor="departmentName" className="form-label">
              Department Name
            </label>
            <input
              type="text"
              id="departmentName" 
              className="form-control"
              placeholder="Enter Department Name"
              {...register("departmentName")}
            />
            <p style={{ color: "Red" }}>{errors.departmentName?.message}</p>
          </div>

          <div className="mb-3">
            <label htmlfor="departmentId" className="form-label">
              Department ID
            </label>
            <input
              type="text"
              id="departmentId"
              className="form-control"
              placeholder="Enter Department ID"
              {...register("departmentId")}
            />
            <p style={{ color: "Red" }}>{errors.departmentId?.message}</p>
          </div>

          <div className="mb-3">
            <label htmlfor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              id="city"
              className="form-control"
              placeholder="Enter City Name"
              {...register("city")}
            />
            <p style={{ color: "Red" }}>{errors.city?.message}</p>
          </div>

          <div className="mb-3">
            <label htmlfor="postalCode" className="form-label">
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              className="form-control"
              placeholder="Enter Your Postal Code"
              {...register("postalCode")}
            />
            <p style={{ color: "Red" }}>{errors.postalCode?.message}</p>
          </div>

          <div className="mb-3">
            <label htmlfor="category" className="form-label">
              Category
            </label>
            <input
              type="text"
              id="category"
              className="form-control"
              placeholder="Select Category"
              {...register("category")}
            />
            <p style={{ color: "Red" }}>{errors.category?.message}</p>
          </div>

          <div className="mb-3">
            <label htmlfor="headName" className="form-label">
              Department Head Name
            </label>
            <input
              type="text"
              id="headName"
              className="form-control"
              placeholder="Enter Department Head Name"
              {...register("headName")}
            />
            <p style={{ color: "Red" }}>{errors.headName?.message}</p>
          </div>

          <div className="mb-3">
            <label htmlfor="reason" className="form-label">
              Reason
            </label>
            <input
              type="text"
              id="reason"
              className="form-control"
              placeholder="Why we delete this department?"
              {...register("reason")}
            />
            <p style={{ color: "Red" }}>{errors.reason?.message}</p>
          </div>

          <button type="submit" className="btn btn-primary">
            Delete
          </button>
        </form>
      </div>
    </>
  );
}

export default DeleteForm;
