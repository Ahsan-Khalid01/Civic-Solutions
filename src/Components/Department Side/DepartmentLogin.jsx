import { useForm } from "react-hook-form";

function DepartmentLogin() {
  const { register, handleSubmit } = useForm();

  function submit(data) {
    console.log(data);
  }

  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label>Department Login</label>
          </div>
          <br />

          <div className="mb-3">
            <label>Department ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Department ID"
              {...register("departmentId")}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              {...register("password")}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default DepartmentLogin;
