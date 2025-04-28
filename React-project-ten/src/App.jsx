import { useState } from "react";
// step 1
import { useForm } from "react-hook-form";
import "./App.css";
import { motion } from "motion/react";

function App() {
  //step 2
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // 5s delay added
    console.log(" form is submitted", data);
    alert(" form is submitted", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 align="center">React Hook Form</h1>
      <br />
      <br />
      <div className="container">
        <label>First Name :</label>
        <input
          placeholder="Enter First Name"
          {...register("firstname", {
            required: true,
            minLength: 3,
            maxLength: { value: 8, message: "max length is 8" },
          })}
        />

        {errors.firstname && <p>{errors.firstname.message}</p>}
      </div>
      <br />
      <div className="container">
        <label>Middle Name :</label>
        <input placeholder="Enter Middle Name" {...register("middlename")} />
      </div>
      <br />
      <div className="container">
        <label>Last Name :</label>
        <input placeholder="Enter Last Name" {...register("lastname")} />
      </div>
      <br />

      <motion.input
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.2 }}
        type="submit"
      />
      
    </form>
  );
}

export default App;
