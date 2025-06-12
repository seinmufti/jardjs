import { NumberInput, InputGroup, Button, Grid, Box } from "@chakra-ui/react";
import { useState } from "react";
import MeasurementInput from "./MeasurementInput";

const MeasurementInputs = ({ measurements, setMeasurements }) => {
  const [w, setW] = useState(0);
  const [h, setH] = useState(0);

  const addNewMeasurement = (w, h) => {
    const newIndex = measurements.length + 1;
    const newMeasurement = { index: newIndex, w: w, h: h };
    setMeasurements([...measurements, newMeasurement]);
    setW(0);
    setH(0);
  };

  return (
    <>
      <Grid
        templateColumns="1fr 0.6fr 1fr"
        rowGap={"0.8rem"}
        justifyContent="center"
        justifyItems="center"
        alignItems="center"
        mb={"1rem"}
      >
        <Box>width</Box>
        <Box></Box> {/*Empty*/}
        <Box>height</Box>
        <Box>
          <MeasurementInput dimension={w} setDimension={setW} />
        </Box>
        <Box>
          <p>x</p>
        </Box>
        <Box>
          <MeasurementInput dimension={h} setDimension={setH} />
        </Box>
      </Grid>
      <Button
        mb={"3rem"}
        onClick={() => {
          addNewMeasurement(w, h);
        }}
        disabled={w < 1 || h < 1}
      >
        Add Measurement
      </Button>
    </>
  );
};

export default MeasurementInputs;
