import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

export default function LogIn() {
  const { logIn, googleSignIn } = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((userCredential) => {
        Swal.fire({
          icon: "success",
          text: `Logged in as ${userCredential.user?.displayName}`,
        });
        form.reset();
      })
      .catch((error) => {
        console.error(error.message);
        toast.error("Please provide valid email address and password");
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        Swal.fire({
          icon: "success",
          text: "Logged In Successfully",
        });
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <Card color="transparent" shadow={false}>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleLogIn}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              className="text-gray-800 dark:text-gray-200"
            >
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              name="email"
              className="!border-gray-300 focus:!border-red-500 rounded-none"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h6"
              className="text-gray-800 dark:text-gray-200"
            >
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              name="password"
              className="!border-gray-300 focus:!border-red-500 rounded-none"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button
            className="mt-6 rounded-none bg-red-600 hover:bg-red-700"
            fullWidth
            type="submit"
          >
            Log In
          </Button>
          <div className="my-6 flex items-center before:flex-1 before:border-t before:border-gray-300 after:flex-1 after:border-t after:border-gray-300">
            <span className="mx-3 text-gray-500">or</span>
          </div>
          <Button
            size="md"
            variant="outlined"
            color="red"
            fullWidth
            className="flex items-center justify-center gap-3 rounded-none border-red-500 text-red-500 hover:bg-red-50"
            onClick={handleGoogleSignIn}
          >
            <img
              src="https://docs.material-tailwind.com/icons/google.svg"
              alt="metamask"
              className="h-4 w-4"
            />
            Continue with Google
          </Button>
          <Typography className="mt-4 text-center font-normal text-gray-600">
            Don&apos;t have and account?{" "}
            <a
              href="/register"
              className="font-medium text-red-600 hover:text-red-700"
            >
              Register
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
