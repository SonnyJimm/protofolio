import { FormControl, TextField } from "@mui/material";

const ContactPage = () => {
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
        <FormControl>
          <TextField
            label="Email"
            InputProps={{
              pattern: "^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+).([a-zA-Z]{2,5})$",
              style: { color: "white" },
            }}
          />
        </FormControl>
      </div>
    </div>
  );
};
export default ContactPage;
