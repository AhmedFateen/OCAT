import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from 'react-bootstrap';
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
      case `You have supervisor powers!`:
        auth.supervisor = true;
        auth.login(() => {
          props.history.push(`/assessment/list`);
        });
      case `Valid username and password!`:
        auth.login(() => {
          props.history.push(`/assessment/list`);
        });
        break;
      default:
    }

  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group><Form.Label htmlFor="username">Username</Form.Label>
        <input
          id="username"
          {...register(`username`, {
            required: `required`,
          })}
          type="text"
        />
        {errors.username && <span role="alert">{errors.username.message}</span>}
      </Form.Group>
      <Form.Group><Form.Label htmlFor="password">Password</Form.Label>
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
      </Form.Group>
      <Button type="submit">SUBMIT</Button>
    </Form>
  );
};
