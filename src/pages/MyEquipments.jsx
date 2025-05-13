import { Spinner, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useSearchParams } from "react-router-dom";
import { MyEquipmentCard } from "../components/MyEquipmentCard";

export default function MyEquipments() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(email);

  useEffect(() => {
    fetch(
      `https://ph-assignment-10-server-rosy.vercel.app/equipments/filter?email=${encodeURIComponent(
        email
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        setEquipments(data);
        setLoading(false);
      });
  }, [email]);

  if (loading) {
    return (
      <div className="min-h-[50vh] px-6 mx-auto my-10 grid">
        <Fade triggerOnce>
          <Typography
            variant="h3"
            className="mb-5 place-self-start"
          >
            My Equipments
          </Typography>
        </Fade>
        <Spinner className="h-12 w-12 text-red-900 mx-auto place-self-center" />
      </div>
    );
  }

  return (
    <div className="px-6 my-10 min-h-[50vh]">
      <Typography
        variant="h3"
        className="mb-5"
      >
        My Equipments
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
        <Fade
          direction="up"
          delay={200}
          cascade
          damping={0.1}
          triggerOnce
        >
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
    </div>
  );
}
