import React from "react";

import CostumCard from "../components/CostumCard";

function Home() {
  return (
    <CostumCard
      image={require("../images/time_table.jpg")}
      hover="Órarend tervező"
      title="Órarend tervező"
      description="Nézd meg bármikor az órarended és adj hozzá foglalkozásokat."
    />
  );
}

export default Home;
