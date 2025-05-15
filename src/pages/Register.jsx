import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

export function SimpleRegistrationForm() {
  const { createUser, googleSignIn, updateUserProfile } =
    useContext(AuthContext);

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
      <Card color="transparent" shadow={false} className="my-10 bg-white p-6">
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
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-none"
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
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-none"
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
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-none"
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
            <Input
              type="password"
              size="lg"
              placeholder="********"
              name="password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded-none"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
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
            type="submit"
            value="Register"
            className="my-6 bg-red-900 rounded-none"
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
          className="flex items-center justify-center gap-3 rounded-none dark:text-blue-gray-500"
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
