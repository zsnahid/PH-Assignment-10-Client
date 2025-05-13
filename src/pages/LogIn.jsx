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
    // console.log(email, password);
    logIn(email, password)
      .then((userCredential) => {
        // console.log(userCredential.user?.displayName);
        Swal.fire({
          icon: "success",
          text: `Logged in as ${userCredential.user?.displayName}`,
        });
        form.reset();
      })
      .catch((error) => {
        console.error(error.message);
        // Swal.fire({
        //   icon: "error",
        //   title: "Error",
        //   text: "Please provide valid email address and password",
        // });
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
      <Card
        color="transparent"
        shadow={false}
      >
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleLogIn}
        >
          <div className="mb-1 flex flex-col gap-6">
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

          <Button
            className="mt-6 rounded-none bg-red-900"
            fullWidth
            type="submit"
            value="Log In"
          >
            Log In
          </Button>
          <div className="my-6 flex items-center before:content[''] before:flex-1 before:border before:border-blue-gray-100 after:content[''] after:flex-1 after:border after:border-blue-gray-100">
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
          <Typography
            color="gray"
            className="mt-4 text-center font-normal dark:text-gray-500"
          >
            Don&apos;t have and account?{" "}
            <a
              href="/register"
              className="font-medium text-gray-900 dark:text-gray-400"
            >
              Register
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
