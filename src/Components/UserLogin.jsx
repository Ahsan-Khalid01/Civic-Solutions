import { useForm } from "react-hook-form";

function UserLogin() {
  const { register, handleSubmit } = useForm();

  function submit(data) {
    console.log(data);
  }

  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label>User Login</label>
          </div>
          <br />

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email Address"
              {...register("email")}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
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

export default UserLogin;
