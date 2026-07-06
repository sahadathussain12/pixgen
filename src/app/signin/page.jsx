"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { FaGoogle } from "react-icons/fa6";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      console.error(error);
      alert(error.message || "Sign In Failed!");
    } else {
      console.log(data);
      alert("Sign In Successful!");
    }
  };
  const handleGoogleSignIn = async()=>{
    const data = await authClient.signIn.social({
    provider: "google",
  });
  }

  return (
    <Card className="border mx-auto w-[500px] py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <Form
        className="flex w-96 mx-auto flex-col gap-4"
        onSubmit={onSubmit}
      >
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            ) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input name="email" placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="password"
          type="password"
          minLength={8}
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input name="password" placeholder="Enter your password" />
          <Description>Enter your account password</Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button color="primary" type="submit">
            <Check />
            Sign In
          </Button>

          <Button type="reset" variant="bordered">
            Reset
          </Button>
        </div>
      </Form>
      <p className="text-center">OR</p>
        <Button  className='w-full flex text-center'onClick={handleGoogleSignIn}><FaGoogle></FaGoogle>signIn with google</Button>
    </Card>
  );
}