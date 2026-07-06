import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "./userContext";
import { addIssue } from "../../serviceApi";

const schema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters" })
    .max(100, { message: "Title must be at most 100 characters" }),
  id: z
    .string()
    .min(2, { message: "Minimun 2 Character neede" })
    .max(6, { message: "Maximun 6 charater" }),
  category: z.string().min(1, { message: "Please select a category" }),
  location: z
    .string()
    .min(5, { message: "Location must be at least 5 characters" }),
  priority: z.string().min(1, { message: "Please select a priority" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" })
    .max(500, { message: "Description must be at most 500 characters" }),
  photo: z.any(),
});

function ReportIssue() {
  const [serverMessage, setServerMessage] = useState("");
  const { user } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const navigate = useNavigate();

  async function submit(data) {
    const payload = {
      title: data.title,
      id: data.id,
      category: data.category,
      location: data.location,
      priority: data.priority,
      issueDate: new Date().toISOString().slice(0, 10),
      residentEmail: user,
      phone: "",
      description: data.description,
    };

    const res = await addIssue(payload);

    if (res.success)
       {
      setServerMessage(
        `Issue submitted successfully! Your Issue ID is ${res.id}`,
      );
      setTimeout(() => navigate("/mycomplaints"), 2500);
    } else
       {
      setServerMessage(" " + (res.message || "Something went wrong."));
    }
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="fw-bold mb-1">Report a New Issue</h2>
          <p className="text-muted mb-4">
            Fill in the details below to submit your civic complaint.
          </p>

          <form onSubmit={handleSubmit(submit)}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Issue Title *
              </label>
              <input
                type="text"
                id="title"
                className="form-control"
                placeholder="e.g. Water pipe burst on main road"
                {...register("title")}
              />
              <p style={{ color: "Red" }}>{errors.title?.message}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                Issue ID *
              </label>
              <input
                type="text"
                id="id"
                className="form-control"
                placeholder="e.g. Issue ID 0123 etc"
                {...register("id")}
              />
              <p style={{ color: "Red" }}>{errors.id?.message}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category *
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
              <p style={{ color: "Red" }}>{errors.category?.message}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location / Area *
              </label>
              <input
                type="text"
                id="location"
                className="form-control"
                placeholder="e.g. Gulberg III, Lahore"
                {...register("location")}
              />
              <p style={{ color: "Red" }}>{errors.location?.message}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="priority" className="form-label">
                Priority *
              </label>
              <select
                id="priority"
                className="form-select"
                {...register("priority")}
              >
                <option value="">-- Select Priority --</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
              </select>
              <p style={{ color: "Red" }}>{errors.priority?.message}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description *
              </label>
              <textarea
                id="description"
                className="form-control"
                rows={4}
                placeholder="Describe the issue in detail..."
                {...register("description")}
              ></textarea>
              <p style={{ color: "Red" }}>{errors.description?.message}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="photo" className="form-label">
                Upload Photo
              </label>
              <input
                type="file"
                id="photo"
                className="form-control"
                accept="image/*"
                {...register("photo")}
              />
              <div className="form-text">PNG, JPG up to 5MB</div>
            </div>

            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-warning fw-bold">
                Submit Issue
              </button>
              <Link to="/userdashboard" className="btn btn-outline-secondary">
                Cancel
              </Link>
            </div>
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

export default ReportIssue;
