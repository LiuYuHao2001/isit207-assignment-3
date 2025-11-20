import Pets from "./Pets";

const Dogs = () => {
  const URL =
    "https://api.thedogapi.com/v1/images/search/?limit=15&page=100&order=DESC";
  const APIKey =
    "live_GIppAJHXGNzDAnStUD0St2xTgyROxTTYkQ5xWevSNPBHnCm7FYKlgiYzMeWKoct1";

  return <Pets apiUrl={URL} petType="Dog" />;
};

export default Dogs;
