import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

export function SimpleRegistrationForm() {
  const { createUser, googleSignIn, updateUserProfile } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // const newUser = { name, photo, email, password };
    // console.log(newUser);

    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;

    if (password.length < 6) {
      toast.error("Password should contain at least 6 characters");
      return;
    }

    if (!upperCaseRegex.test(password)) {
      toast.error("Password should contain at least one uppercase letter");
      return;
    }

    if (!lowerCaseRegex.test(password)) {
      toast.error("Password should contain at least one lowercase letter");
      return;
    }

    createUser(email, password)
      // eslint-disable-next-line no-unused-vars
      .then((userCredential) => {
        // console.log(userCredential);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate(from, { replace: true });
            Swal.fire({
              icon: "success",
              text: "Account Created Successfully",
            });
          })
          .catch((error) => {
            console.error(error.message);
          });
        form.reset();
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        Swal.fire({
          icon: "success",
          text: "Account Created Successfully",
        });
      })
      .catch((error) => console.error(error.message));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542159919831-40fb0656b45a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
      <Card
        color="transparent"
        shadow={false}
        className="my-10 bg-white/90 p-6 dark:bg-gray-900"
      >
        <Typography
          variant="h4"
          color="blue-gray"
          className="dark:text-white/90"
        >
          Create a new account
        </Typography>
        <Typography
          color="gray"
          className="mt-1 font-normal dark:text-gray-500"
        >
          Nice to meet you! Enter your details to register.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleRegister}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 dark:text-white/90"
            >
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="John Doe"
              name="name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900  dark:text-gray-500"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 dark:text-white/90"
            >
              Photo
            </Typography>
            <Input
              size="lg"
              placeholder="Photo URL"
              name="photo"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900  dark:text-gray-500"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 dark:text-white/90"
            >
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              name="email"
              type="email"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900  dark:text-gray-500"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 dark:text-white/90"
            >
              Password
            </Typography>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                size="lg"
                placeholder="********"
                name="password"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:text-gray-500"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal dark:text-gray-500"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button
            color="red"
            type="submit"
            value="Register"
            className="my-6"
            fullWidth
          >
            Register
          </Button>
        </form>
        <div className="mb-6 flex items-center before:content[''] before:flex-1 before:border before:border-blue-gray-100 after:content[''] after:flex-1 after:border after:border-blue-gray-100">
          <span className="mx-3 text-blue-gray-500">or</span>
        </div>
        <Button
          size="md"
          variant="outlined"
          color="blue-gray"
          fullWidth
          className="flex items-center justify-center gap-3 dark:text-blue-gray-500"
          onClick={handleGoogleSignIn}
        >
          <img
            src="https://docs.material-tailwind.com/icons/google.svg"
            alt="metamask"
            className="h-4 w-4"
          />
          Continue with Google
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-gray-900 dark:text-gray-500"
          >
            Log In
          </a>
        </Typography>
      </Card>
    </div>
  );
}