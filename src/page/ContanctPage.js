// import { FormControl, TextField } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";

import { useState } from "react";
const defaultUser = {
  email: "",
  name: "",
  subject: "",
  content: "",
};
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const ContactPage = () => {
  const [errors, setErrors] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [fields, setFields] = useState(defaultUser);
  const [open, setOpen] = useState(false);
  const [resState, setState] = useState("success");
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    setLoading(true);
    let err = false;
    if (
      !fields.email.match(
        // why this is a regex
        // eslint-disable-next-line
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      errors.email = "Email does not match format";
      err = true;
    }
    if (fields.name.length < 3) {
      errors.name = "name must be atleast length of 3";
      err = true;
    }
    if (fields.subject.length < 3) {
      errors.subject = "subject must be atleast length of 3";
      err = true;
    }
    if (fields.content.length < 3) {
      errors.content = "content must be atleast lenth of 3";
      err = true;
    }
    if (err) {
      setLoading(false);
      setErrors({ ...errors });
      return;
    }
    try {
      // this is actually so dumb but i only have 2 end points so yeah imma roll with it
      // but in future imma fix it
      await fetch(
        "https://9htulh0fpg.execute-api.us-east-1.amazonaws.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(fields),
        }
      );
      setFields(defaultUser);
      setState("success");
    } catch (e) {
      setState("error");
    } finally {
      setOpen(true);
      setErrors({});
      setLoading(false);
    }
  };

  return (
    <div className="card-wrapper">
      <h1 className="card-header">Contact & Resume</h1>
      <div className="card-contentb">
        <p>
          If you want to view my resume click{" "}
          <a href="https://drive.google.com/file/d/1xqI6ceCjAhTPAMhtlW3UO6wI4AGPbZzC/view?usp=sharing">
            here
          </a>
        </p>

        <p>Contact me </p>
        <form className="form" onSubmit={onSubmit}>
          <input
            className="input"
            value={fields.email}
            onChange={(e) => {
              setFields({ ...fields, email: e.target.value });
            }}
            name="email"
            placeholder="Email"
          />
          {errors.email && <span className="err">{errors.email}</span>}
          <input
            className="input"
            value={fields.name}
            onChange={(e) => {
              setFields({ ...fields, name: e.target.value });
            }}
            name="name"
            placeholder="Name"
          />
          {errors.name && <span className="err">{errors.name}</span>}
          <input
            className="input"
            value={fields.subject}
            onChange={(e) => {
              setFields({ ...fields, subject: e.target.value });
            }}
            name="subject"
            placeholder="Subject"
          />
          {errors.subject && <span className="err">{errors.subject}</span>}
          <textarea
            className="input texts"
            value={fields.content}
            onChange={(e) => {
              setFields({ ...fields, content: e.target.value });
            }}
            name="content"
            placeholder="content"
          />
          {errors.content && <span className="err">{errors.content}</span>}
          <button className="input" disabled={isLoading}>
            Send
          </button>
        </form>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={resState} sx={{ width: "100%" }}>
          {resState === "success"
            ? "Succesfully sent the email"
            : "Failed to notify but you can contact me through at the email on resume"}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default ContactPage;
