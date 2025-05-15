import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { FaEnvelope, FaGoogle, FaLock } from "react-icons/fa"; // Added icons
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
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542159919831-40fb0656b45a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
      <Card className="p-8 w-96 bg-white/90 backdrop-blur-sm shadow-xl border border-gray-200">
        <div className="text-center mb-6">
          <Typography variant="h4" className="text-gray-800 font-bold">
            Welcome Back
          </Typography>
          <Typography className="text-gray-600 mt-1">
            Sign in to continue to your account
          </Typography>
        </div>
        <form className="mt-6 mb-2 w-full" onSubmit={handleLogIn}>
          <div className="mb-1 flex flex-col gap-5">
            <div>
              <Typography
                variant="h6"
                className="text-gray-700 mb-2 flex items-center gap-2"
              >
                <FaEnvelope /> Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                name="email"
                className="!border-gray-300 focus:!border-red-500 rounded-md"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div>
              <Typography
                variant="h6"
                className="text-gray-700 mb-2 flex items-center gap-2"
              >
                <FaLock /> Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                name="password"
                className="!border-gray-300 focus:!border-red-500 rounded-md"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
          </div>

          <div className="flex justify-between items-center my-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 accent-red-500"
              />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a
              href="/forgot-password"
              className="text-sm text-gray-600 hover:text-gray-700"
            >
              Forgot password?
            </a>
          </div>

          <Button
            color="red"
            className="mt-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
            fullWidth
            type="submit"
          >
            Log In
          </Button>

          <div className="my-6 flex items-center before:flex-1 before:border-t before:border-gray-300 after:flex-1 after:border-t after:border-gray-300">
            <span className="mx-3 text-gray-500 px-4">or</span>
          </div>

          <Button
            size="md"
            variant="outlined"
            color="red"
            fullWidth
            className="flex items-center justify-center gap-3 rounded-md border-gray-600 text-gray-600 hover:text-gray-700 hover:border-gray-600 transition-all duration-300"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle className="h-4 w-4" />
            Continue with Google
          </Button>

          <Typography className="mt-6 text-center font-normal text-gray-600">
            Don&apos;t have an account?{" "}
            <a
              href="/register"
              className="font-medium text-red-600 hover:text-red-700 underline"
            >
              Register
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
