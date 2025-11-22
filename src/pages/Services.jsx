import Grid from "../components/Grid";
import Card from "../components/Card";
import groomImage from "../assets/petGrooming.png";
import vetImage from "../assets/veterinarian.png";
import neuterImage from "../assets/neuter.png";

const Services = () => {
  const services = [
    {
      id: 1,
      image: groomImage,
      title: "Pet Grooming - S$25",
      description: "Give your furry friend a hair trim and manicure.",
    },
    {
      id: 2,
      image: vetImage,
      title: "Veterinarian Services - S$100",
      description:
        "Bring your pet in for a medical checkup. Walk-ins accepted.",
    },
    {
      id: 3,
      image: neuterImage,
      title: "Neutering - S$150",
      description:
        "Castrate or spay your pet. This helps prevented unwanted litters and reduces aggression.",
    },
  ];

  return (
    <Grid minWidth="250px" gap="2rem">
      {services.map((service) => (
        <Card
          key={service.id}
          image={service.image}
          title={service.title}
          description={service.description}
        />
      ))}
    </Grid>
  );
};

export default Services;
