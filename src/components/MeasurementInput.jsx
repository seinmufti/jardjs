import React from "react";
import { InputGroup, NumberInput } from "@chakra-ui/react";

const MeasurementInput = ({ dimension, setDimension }) => {
  //   Handling turning 0 to "" when clicked by user, and vise versa
  const handleFocusBlur = (value, setValue) => ({
    onFocus: () => {
      if (value === 0) setValue("");
    },
    onBlur: () => {
      if (value === "") setValue(0);
    },
  });

  return (
    <InputGroup endElement={<p>cm</p>} width="7rem">
      <NumberInput.Root
        value={dimension}
        onChange={(e) => setDimension(Number(e.target.value))}
        min={1}
        defaultValue={0}
        {...handleFocusBlur(dimension, setDimension)}
      >
        <NumberInput.Input fontSize={"16px"} />
      </NumberInput.Root>
    </InputGroup>
  );
};

export default MeasurementInput;
