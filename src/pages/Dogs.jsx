import Pets from "./Pets";

const Dogs = () => {
  const URL =
    "https://api.thedogapi.com/v1/images/search/?limit=15&order=RAND&has_breeds=1";
  const APIKey =
    "live_GIppAJHXGNzDAnStUD0St2xTgyROxTTYkQ5xWevSNPBHnCm7FYKlgiYzMeWKoct1";

  return <Pets petType="dogs" apiUrl={URL} apiKey={APIKey} />;
};

export default Dogs;
