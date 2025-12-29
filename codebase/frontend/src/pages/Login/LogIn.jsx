 
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginFormSchema = z.object({
  email: z.string().email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(15, { message: "Password must be no more than 15 characters long" }),
});

const LogIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
    mode:"onChange"
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  // console.log(watch());
  console.log(errors);
  return (
    <div>
      <section className="contact-section">
        <div className="auto-container">
          <div className="contact-title">
            <h2>Login to your account</h2>
          </div>

          <div className="row clearfix">
            {/* <!--Form Column--> */}
            <div className="form-column col-lg-7">
              <div className="inner-column">
                {/* <!--Contact Form--> */}
                <form method="post" onSubmit={handleSubmit(onSubmit)}>
                  <div className="contact-form">
                    <div className="row clearfix">
                      <div className="form-group col-md-12">
                        <input
                          type={"email"}
                          {...register("email")}
                          placeholder={"Enter your Email"}
                        />
                      </div>
                      <p className="text-red-500 text-xs">
                        {errors?.email?.message}
                      </p>

                      <div className="form-group col-md-12">
                        <input
                          type={"password"}
                          {...register("password")}
                          placeholder={"*******"}
                        />
                      </div>
                      <p className="text-red-500 text-xs">
                        {errors?.password?.message}
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
                          <span>Login</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                {/* <!--End Contact Form--> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
