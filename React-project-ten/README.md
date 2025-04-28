## React Hook Form

# step 1 install and import

import { useForm } from "react-hook-form";

# step 2 initialize

const {
handleSubmit,
register,
formState: { errors },
} = useForm();

# step 3 register

<input placeholder="Enter First Name" {...register("firstname")} />

# step 4 onSubmit

function onSubmit(data) {
console.log(" form is submitted",data);
}

  <form onSubmit = {handleSubmit(onSubmit)}></form>

# step 5 apply validation

<input placeholder="Enter First Name"
{...register("firstname", {
required: true,
minLength: 3,
maxLength: 8
})} />

# step 6 show errors handling

<input placeholder="Enter First Name"
{...register("firstname", {
required: true,
minLength: 3,
maxLength: {value:8,message:"max length is 8"}
})}/>

        {errors.firstname && <p>{errors.firstname.message}</p>}

#
