import Grid from "../components/Grid";
import Card from "../components/Card";
import catFood from "../assets/catFood1kg.png";
import dogFood from "../assets/dogFood1kg.png";
import petLeash from "../assets/petLeash.png";

const Products = () => {
  const products = [
    {
      id: 1,
      image: catFood,
      title: "Cat Food - S$10",
      description: "1 kilogram of cat food for all your feline needs",
    },
    {
      id: 2,
      image: dogFood,
      title: "Dog Food - S$10",
      description: "1 kilogram of dog food for all your canine needs",
    },
    {
      id: 3,
      image: petLeash,
      title: "Pet Collar + Leash - S$10",
      description: "A tool for long walks with your furry friend",
    },
  ];

  return (
    <Grid>
      {products.map((product) => (
        <Card
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
        />
      ))}
    </Grid>
  );
};

export default Products;
