import { useState } from "react";
import { InputGroup, NumberInput } from "@chakra-ui/react";

const MeasurementInput = ({
  dimension,
  setTempMeasurements,
  measurementIndex,
}) => {
  const [w, setW] = useState(0);

  return (
    <InputGroup endElement={<p>cm</p>} w={"6rem"}>
      <NumberInput.Root value={dimension} min={1} defaultValue={0}>
        <NumberInput.Input fontSize={"16px"} />
      </NumberInput.Root>
    </InputGroup>
  );
};

export default MeasurementInput;
