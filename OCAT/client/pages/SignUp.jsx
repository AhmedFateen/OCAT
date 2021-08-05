import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, FormGroup } from "react-bootstrap";
import { UserService } from '../services/UserService';

export const Signup = () => {
  const { formState: { errors }, handleSubmit, register, reset, watch } = useForm();
  const onSubmit = async data => {
    foo(await data);
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <Form.Group>
        <Form.Label htmlFor="firstName">First Name</Form.Label>
        <input
          id="firstName"
          {...register(`firstName`, {
            required: `required`,
          })}
          type="text"
        />
      </Form.Group>
      <FormGroup>
        <Form.Label htmlFor="lastName">Last Name</Form.Label>
        <input
          id="lastName"
          {...register(`lastName`, {
            required: `required`,
          })}
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="username">username</label>
        <input
          id="username"
          {...register(`username`, {
            required: `required`,
          })}
          type="text"
        />
      </FormGroup>
      <FormGroup>
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
        {errors.password && <p>{errors.password.message}</p>}
      </FormGroup>
      <FormGroup>
        <label htmlFor="password_confirm">Confirm password</label>
        <input
          id="password_confirm"
          {...register(`confirmedPassword`, {
            required: `required`,
            validate: value => value === watch(`password`) || `The passwords do not match`,

          })}
          type="password"
        />
        {errors.password_confirm && <p>{errors.password_confirm.message}</p>}
      </FormGroup>
      <Button type="submit">SUBMIT</Button>
    </Form>
  );
};
