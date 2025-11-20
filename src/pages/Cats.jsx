import Pets from "./Pets";

const Cats = () => {
  const URL =
    "https://api.thecatapi.com/v1/images/search/?limit=15&page=100&order=DESC";
  const APIKey =
    "live_u4ddF7j43glukjTEmOe8S1eRJhn0mqR8HkGfkEC7bqfP9eVFrzUpelOKhhtVyrMW";

  return <Pets apiUrl={URL} petType="Cat" />;
};

export default Cats;
