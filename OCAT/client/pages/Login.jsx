import React from "react";
import { useForm } from "react-hook-form";
import { UserService } from '../services/UserService';
import auth from '../auth';
export const Login = (props) => {
  const { formState: { errors }, handleSubmit, register, reset } = useForm();
  const onSubmit = async data => {
    switch (await UserService.submit(data)) {
      case `User not found`:
        auth.logout();
        reset();
        break;
      case `wrong password!`:
        auth.logout();
        reset();
        break;
      case `Valid username and password!`:
        auth.login(() => {
          props.history.push(`/assessment/list`);
        });
        break;
      default:
        console.log(`unexpected`);
    }

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">username</label>
      <input
        id="username"
        {...register(`username`, {
          required: `required`,
        })}
        type="text"
      />
      {errors.username && <span role="alert">{errors.username.message}</span>}
      <label htmlFor="password">password</label>
      <input
        id="password"
        {...register(`password`, {
          required: `required`,
          minLength: {
            value: 5,
            message: `min length is 5`,
          },
        })}
        type="password"
      />
      {errors.password && <span role="alert">{errors.password.message}</span>}
      <button type="submit">SUBMIT</button>
    </form>
  );
};
