import TextInput from "../../components/Input/TextInput";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const employeeSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(15, { message: "First name must be no longer than 15 characters" }),
  lastName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(15, { message: "First name must be no longer than 15 characters" }),
  phone: z
    .string()
    .min(9, { message: "Phone number must be at least 9 characters long" })
    .max(10, {
      message: "Phone number must be no more than 10 characters long",
    }),
  activeStatus: z.number({ message: "msg" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(15, { message: "Password must be no more than 15 characters long" }),
  companyRoleId: z.number(),
});

const AddEmployee = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(employeeSchema),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="contact-section">
      <div className="auto-container">
        <div className="contact-title">
          <h2>Add new Employee</h2>
        </div>
      </div>

      {/* <!--Form Column--> */}
      <div className="form-column col-lg-7">
        <div className="inner-column">
          {/* <!--Contact Form--> */}
          <div className="contact-form">
            <form method="post" onSubmit={handleSubmit(onSubmit)}>
              <div className="row clearfix">
                <div className="form-group col-md-12">
                  <input
                    type={"email"}
                    {...register("email")}
                    placeholder={"Enter your Email"}
                  />
                </div>
                <p className="text-red-500 text-xs">{errors?.email?.message}</p>

                <div className="form-group col-md-12">
                  <input
                    type={"text"}
                    {...register("firstName")}
                    placeholder={"Enter your firstname"}
                  />
                </div>
                <p className="text-red-500 text-xs">
                  {errors?.firstName?.message}
                </p>

                <div className="form-group col-md-12">
                  <input
                    type={"text"}
                    {...register("lastName")}
                    placeholder={"Enter your lastname"}
                  />
                </div>
                <p className="text-red-500 text-xs">
                  {errors?.lastName?.message}
                </p>

                <div className="form-group col-md-12">
                  <input
                    type={"text"}
                    {...register("phone")}
                    placeholder={"Enter your phone number"}
                  />
                </div>
                <p className="text-red-500 text-xs">{errors?.phone?.message}</p>

                <div className="form-group col-md-12">
                  <input
                    type={"text"}
                    {...register("password")}
                    placeholder={"Enter your password"}
                  />
                </div>
                <p className="text-red-500 text-xs">
                  {errors?.password?.message}
                </p>

                <div className="form-group col-md-12">
                  <select {...register("companyRoleId")} className="">
                    <option>Select your role</option>
                    <option value="4">Security</option>
                    <option value="1">Addmin</option>
                    <option value="2">Manager</option>
                    <option value="3">Secretary</option>
                  </select>
                </div>
                <p className="text-red-500 text-xs">
                  {errors?.companyRoleId?.message}
                </p>

                <div className="form-group col-md-12">
                  <input
                    id="form_botcheck"
                    name="form_botcheck"
                    className="form-control"
                    type="hidden"
                    value=""
                  />
                  <button
                    className="theme-btn btn-style-one"
                    type="submit"
                    data-loading-text="Please wait..."
                  >
                    <span>Add Employee</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
