import { VStack } from "@chakra-ui/react";
import { useState } from "react";
import MeasurementsCard from "../components/MeasurementsCard";
import MeasurementInputs from "../components/MeasurementInputs";

const HomePage = () => {
  const [measurements, setMeasurements] = useState([]);

  return (
    <>
      <VStack>
        <MeasurementInputs
          measurements={measurements}
          setMeasurements={setMeasurements}
        />
        <MeasurementsCard
          measurements={measurements}
          setMeasurements={setMeasurements}
        />
      </VStack>
    </>
  );
};

export default HomePage;
