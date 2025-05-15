import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Profile() {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    photoURL: user?.photoURL || "",
    email: user?.email || "",
    phone: user?.phoneNumber || "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(formData.displayName, formData.photoURL);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Typography
        variant="h3"
        color="blue-gray"
        className="mb-6 dark:text-gray-200"
      >
        Profile
      </Typography>

      <Card className="p-6 dark:bg-gray-900">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Image */}
          <div className="flex flex-col items-center gap-4">
            <img
              src={
                user?.photoURL || "https://api.dicebear.com/7.x/avataaars/svg"
              }
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
            />
            {isEditing && (
              <Input
                type="url"
                label="Photo URL"
                value={formData.photoURL}
                onChange={(e) =>
                  setFormData({ ...formData, photoURL: e.target.value })
                }
                className="dark:text-gray-200"
              />
            )}
          </div>

          {/* Profile Information */}
          <div className="flex-1 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 font-medium dark:text-gray-400"
                >
                  Full Name
                </Typography>
                {isEditing ? (
                  <Input
                    type="text"
                    value={formData.displayName}
                    onChange={(e) =>
                      setFormData({ ...formData, displayName: e.target.value })
                    }
                    className="dark:text-gray-200"
                  />
                ) : (
                  <Typography className="dark:text-gray-200">
                    {user?.displayName}
                  </Typography>
                )}
              </div>

              <div>
                <Typography
                  variant="small"
                  className="mb-2 font-medium dark:text-gray-400"
                >
                  Email
                </Typography>
                <Typography className="dark:text-gray-200">
                  {user?.email}
                </Typography>
              </div>

              <div>
                <Typography
                  variant="small"
                  className="mb-2 font-medium dark:text-gray-400"
                >
                  Account Created
                </Typography>
                <Typography className="dark:text-gray-200">
                  {user?.metadata?.creationTime
                    ? new Date(user.metadata.creationTime).toLocaleDateString()
                    : "N/A"}
                </Typography>
              </div>

              <div>
                <Typography
                  variant="small"
                  className="mb-2 font-medium dark:text-gray-400"
                >
                  Last Sign In
                </Typography>
                <Typography className="dark:text-gray-200">
                  {user?.metadata?.lastSignInTime
                    ? new Date(
                        user.metadata.lastSignInTime
                      ).toLocaleDateString()
                    : "N/A"}
                </Typography>
              </div>

              <div className="pt-4 flex gap-4">
                {isEditing ? (
                  <>
                    <Button type="submit" color="red">
                      Save Changes
                    </Button>
                    <Button
                      variant="outlined"
                      color="red"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="outlined"
                    color="red"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
}
