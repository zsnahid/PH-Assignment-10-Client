import { Spinner, Typography } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { MyEquipmentCard } from "../components/MyEquipmentCard";
import { AuthContext } from "../contexts/AuthContext";

export default function MyEquipments() {
  const { user } = useContext(AuthContext);
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://ph-assignment-10-server-rosy.vercel.app/equipments/filter?email=${encodeURIComponent(
          user.email
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          setEquipments(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching equipments:", error);
          setLoading(false);
        });
    }
  }, [user?.email]);

  if (loading) {
    return (
      <div className="min-h-[50vh] px-6 mx-auto my-10 grid">
        <Fade triggerOnce>
          <Typography
            variant="h3"
            className="mb-5 place-self-start text-gray-800 dark:text-gray-100"
          >
            My Equipments
          </Typography>
        </Fade>
        <Spinner className="h-12 w-12 text-red-600 dark:text-red-400 mx-auto place-self-center" />
      </div>
    );
  }

  return (
    <div className="px-6 my-10 min-h-[50vh]">
      <Typography
        variant="h3"
        className="mb-5 text-gray-800 dark:text-gray-100"
      >
        My Equipments
      </Typography>

      {equipments.length === 0 ? (
        <Typography
          variant="h6"
          className="text-center text-gray-600 dark:text-gray-400"
        >
          You haven&apos;t added any equipment yet.
        </Typography>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
          <Fade direction="up" delay={200} cascade damping={0.1} triggerOnce>
            {equipments.map((equipment) => (
              <MyEquipmentCard
                key={equipment._id}
                equipment={equipment}
                equipments={equipments}
                setEquipments={setEquipments}
              />
            ))}
          </Fade>
        </div>
      )}
    </div>
  );
}
