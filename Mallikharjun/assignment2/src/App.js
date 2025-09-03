import React, { useState, useEffect } from "react";
import Button from "./Button";
import Modal from "./Modal";
import FormInput from "./FormInput";
import Table from "./Table";

export default function App() {
  // show/hide modal
  const [modalVisible, setModalVisible] = useState(false);

  // form fields state
  const [formValues, setFormValues] = useState({ name: "", email: "" });

  // errors for form fields
  const [errors, setErrors] = useState({ name: "", email: "" });

  // user data from server
  const [data, setData] = useState([]);

  // columns for table
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
  ];

  // get users from server on load
  useEffect(() => {
    fetch("https://json-server-assignment2-backend.onrender.com/users")
      .then(res => res.json())
      .then(fetchedData => setData(fetchedData))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  // handle form input changes
  function handleInputChange(e) {
    const { name, value } = e.target;

    // update input value
    setFormValues(prev => ({ ...prev, [name]: value }));

    // check empty and set error if needed
    setErrors(prev => ({
      ...prev,
      [name]: value.trim() === "" ? "This field is required." : "",
    }));
  }

  // when form is submitted
  function handleSubmit(e) {
    e.preventDefault();

    // check both fields for errors
    const newErrors = {
      name: formValues.name.trim() === "" ? "This field is required." : "",
      email: formValues.email.trim() === "" ? "This field is required." : "",
    };
    setErrors(newErrors);

    // if any errors, stop here
    if (newErrors.name || newErrors.email) return;

    // make new user object
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
    };

    // send new user to server
    fetch("https://json-server-assignment2-backend.onrender.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then(res => res.json())
      .then(createdUser => {
        // add new user to data list
        setData(prev => [...prev, createdUser]);

        // reset form and errors
        setFormValues({ name: "", email: "" });
        setErrors({ name: "", email: "" });

        // close modal
        setModalVisible(false);
      })
      .catch(err => {
        console.error("Add user error:", err);
      });
  }

  // render the app UI
  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "0 1rem" }}>
      <h1>Reusable Components Demo with JSON Server</h1>

      {/* open modal button */}
      <Button onClick={() => setModalVisible(true)}>Add User</Button>

      {/* modal with form */}
      <Modal visible={modalVisible} title="Add New User" onClose={() => setModalVisible(false)}>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Name"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            error={errors.name}
            placeholder="Enter name"
          />
          <FormInput
            label="Email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            error={errors.email}
            placeholder="Enter email"
            type="email"
          />
          <Button disabled={!!errors.name || !!errors.email} type="submit">
            Submit
          </Button>
        </form>
      </Modal>

      {/* data table */}
      <Table columns={columns} data={data} />
    </div>
  );
}
