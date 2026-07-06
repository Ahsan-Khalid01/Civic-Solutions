import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDepartment } from "../../serviceApi";

const departmentSchema = z.object({
  departmentName: z.string().min(2, { message: "Department name must be at least 2 characters long" }).max(100, { message: "Department name must be at most 100 characters long" }),
  city: z.string().min(2, { message: "City must be at least 2 characters long" }).max(100, { message: "City must be at most 100 characters long" }),
  id: z.string().min(2,{message: "Id minimum 2 characters"}).max(15,{message: "id  must be maximum `15 characters"}),
  postalCode: z.string().min(5, { message: "Postal code must be at least 5 characters long" }).max(10, { message: "Postal code must be at most 10 characters long" }),
  category: z.string().min(2, { message: "Category must be at least 2 characters long" }).max(100, { message: "Category must be at most 100 characters long" }),
  headName: z.string().min(2, { message: "Department head name must be at least 2 characters long" }).max(100, { message: "Department head name must be at most 100 characters long" }),
  officialPhone: z.string().regex(/^\d{10}$/, { message: "Official phone number must be a 10-digit number" }),
  emergencyPhone: z.string().regex(/^\d{10}$/, { message: "Emergency phone number must be a 10-digit number" }),
  loginId: z.string().min(5, { message: "Login ID must be at least 5 characters long" }).max(100, { message: "Login ID must be at most 100 characters long" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }).max(100, { message: "Password must be at most 100 characters long" })
});

function AddDepartment() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(departmentSchema)
  });

  // function submit(data) {
  //   console.log(data);
  // }



  async function submit(data) {
  const res = await addDepartment(data);
  console.log(res);
}

  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label>Add New Department</label>
          </div>
          <br />

          <div className="mb-3">
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
            <p style={{ color: "Red" }}>{errors.departmentName?.message}</p>
          </div>

          <div className="mb-3">
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
            <p style={{ color: "Red" }}>{errors.city?.message}</p>
          </div>
            


              <div className="mb-3">
            <label htmlFor="city" className="form-label">
              ID
            </label>
            <input
              type="text"
              id="id"
              className="form-control"
              placeholder="Enter unique Id"
              {...register("id")}
            />
            <p style={{ color: "Red" }}>{errors.id?.message}</p>
          </div>
            

          <div className="mb-3">
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
            <p style={{ color: "Red" }}>{errors.postalCode?.message}</p>
          </div>

          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <input
              type="text"
              id="category"
              className="form-control"
              placeholder="Enter Category"
              {...register("category")}
            />
            <p style={{ color: "Red" }}>{errors.category?.message}</p>
          </div>

          <div className="mb-3">
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
            <p style={{ color: "Red" }}>{errors.headName?.message}</p>
          </div>

          <div className="mb-3">
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
            <p style={{ color: "Red" }}>{errors.officialPhone?.message}</p>
          </div>

          <div className="mb-3">
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
            <p style={{ color: "Red" }}>{errors.emergencyPhone?.message}</p>
          </div>

          <div className="mb-3">
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
            <p style={{ color: "Red" }}>{errors.loginId?.message}</p>
          </div>

          <div className="mb-3">
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
            <p style={{ color: "Red" }}>{errors.password?.message}</p>
          </div>

          <button type="submit" className="btn btn-primary">
            Add Department
          </button>
        </form>
      </div>
    </>
  );
}

export default AddDepartment;
