import { useDispatch } from "react-redux";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import * as zod from "zod";
import webApiService from "../../../Service/WebApiService";
import notifyService from "../../../Service/NotificationService";
import { LoginReqModel, LoginResModel } from "../../../Models/LoginModel";
import { userLoggedIn } from "../../../Redux/UserAppState";
import { loggedInAsAdmin } from "../../../Redux/GuardAppState";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import urlService from "../../../Service/UrlService";
import { ClientsType } from "../../../Models/ClientsType";

function Login(): JSX.Element {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const schema = zod.object({
    email: zod.string().email("You should provide valid email"),
    password: zod.string().min(4, "Minimum 4 characters"),
    type: zod.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginReqModel>({ mode: "all", resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<LoginReqModel> = (data: LoginReqModel) => {
    console.log(data);
    return webApiService
      .login(data)
      .then((res) => {
        console.log(res.data);
        // const token = res.data;
        // const email = data.email;
        // const type = data.type;
        // const loginObj = {token:token,email:email,type:type} as LoginResModel;
        // console.log(loginObj);

        dispatch(userLoggedIn(res.data ));
        console.log(res.data);
        switch (data.type) {
          case ClientsType.ADMINISTRATOR:
            navigate("/admin");
            break;

          case ClientsType.COMPANY:
            navigate("/company");
            break;

          case ClientsType.CUSTOMER:
            navigate("/customer");
            break;

          default:
            navigate("/Page404");
        }

        console.log("success");
      })
      .catch((err) => notifyService.error(err));
  };

  return (
    <div className="Login form-look-and-feel">
      <h1>Login</h1>
      <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>
        {errors?.email ? (
          <span>{errors.email.message}</span>
        ) : (
          <label htmlFor="email">Email</label>
        )}
        <input
          {...register("email")}
          name="email"
          type="email"
          placeholder="Email..."
        />

        {errors?.password ? (
          <span>{errors.password.message}</span>
        ) : (
          <label htmlFor="password">Password</label>
        )}
        <input
          {...register("password")}
          name="password"
          type="password"
          placeholder="Password..."
        />

        {errors?.type ? (
          <span>{errors.type.message}</span>
        ) : (
          <label htmlFor="password">Password</label>
        )}
        <select {...register("type")}>
          <option value="CUSTOMER"> customer </option>
          <option value="COMPANY"> company </option>
          <option value="ADMINISTRATOR"> admin </option>
        </select>

        <button className="myButton" disabled={!isValid || isSubmitting}>
          Login{" "}
        </button>
      </form>
    </div>
  );
}

export default Login;
