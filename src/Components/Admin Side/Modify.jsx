import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  departmentName: z.string().min(2, { message: "Department name must be at least 2 characters long" }),
  city: z.string().min(2, { message: "City name must be at least 2 characters long" }),
  postalCode: z.string().regex(/^[0-9]{5}$/, { message: "Invalid postal code" }),
  category: z.string().min(2, { message: "Category must be at least 2 characters long" }),
  headName: z.string().min(2, { message: "Head name must be at least 2 characters long" }),
  contact: z.string().email({ message: "Invalid email address" }),
});

function Modify() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  function submit(data) {
    console.log(data);
  }

  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label>Modify Department</label>
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
              placeholder="Cant Modify"
              disabled
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
              placeholder="Enter City Postal Code"
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
            <label htmlfor="contact" className="form-label">
              Contact
            </label>
            <input
              type="text"
              id="contact"
              className="form-control"
              placeholder="Enter Contact"
              {...register("contact")}
            />
            <p style={{ color: "Red" }}>{errors.contact?.message}</p>
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
            <label htmlfor="contact" className="form-label">
              Contact
            </label>
            <input
              type="text"
              id="contact"
              className="form-control"
              placeholder="Enter Contact"
              {...register("contact")}
            />
            <p style={{ color: "Red" }}>{errors.contact?.message}</p>
          </div>

          <div className="mb-3">
            <label htmlfor="status" className="form-label">
              Status
            </label>
            <br />

            <label htmlfor="inactive">Inactive</label>
            <input
              id="inactive"
              type="radio"
              name="status"
              value="inactive"
              {...register("status")}
            />
            <p style={{ color: "Red" }}>{errors.status?.message}</p>

            <label htmlfor="active">Active</label>
            <input
            id="active"
              type="radio"
              name="status"
              value="active"
              {...register("status")}
            />
            <p style={{ color: "Red" }}>{errors.status?.message}</p>

            <label htmlfor="suspend">Suspend</label>
            <input
              id="suspend"
              type="radio"
              name="status"
              value="suspend"
              {...register("status")}
            />
            <p style={{ color: "Red" }}>{errors.status?.message}</p>
          </div>

          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </>
  );
}

export default Modify;
