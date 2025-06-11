import {
  Card,
  NumberInput,
  InputGroup,
  VStack,
  Button,
  Heading,
  Grid,
  Box,
  Table,
} from "@chakra-ui/react";

import { useState } from "react";

const HomePage = () => {
  const [w, setW] = useState(0);
  const [h, setH] = useState(0);

  const [measurements, setMeasurements] = useState([]);

  const addNewMeasurement = (w, h) => {
    const newIndex = measurements.length + 1;
    const newMeasurement = { index: newIndex, w: w, h: h };
    setMeasurements([...measurements, newMeasurement]);
    setW(0);
    setH(0);
  };

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
    <>
      <VStack mb={"4rem"}>
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
            <InputGroup endElement={<p>cm</p>} width="7rem">
              <NumberInput.Root
                value={w}
                onChange={(e) => setW(Number(e.target.value))}
                min={1}
                {...handleFocusBlur(w, setW)}
              >
                <NumberInput.Input fontSize={"16px"} />
              </NumberInput.Root>
            </InputGroup>
          </Box>
          <Box>
            <p>x</p>
          </Box>
          <Box>
            <InputGroup endElement={<p>cm</p>} width="7rem">
              <NumberInput.Root
                value={h}
                onChange={(e) => setH(Number(e.target.value))}
                min={1}
                {...handleFocusBlur(h, setH)}
              >
                <NumberInput.Input fontSize={"16px"} />
              </NumberInput.Root>
            </InputGroup>
          </Box>
        </Grid>
        <Button
          onClick={() => {
            addNewMeasurement(w, h);
          }}
          disabled={w < 1 || h < 1}
        >
          Add Measurement
        </Button>
      </VStack>

      <Card.Root width="90vw">
        <Card.Header>
          <Heading size={"xl"}>Submitted Measurements:</Heading>
        </Card.Header>
        <Card.Body>
          {measurements.length === 0 ? (
            <p>No added measurements yet.</p>
          ) : (
            <Table.ScrollArea borderWidth="1px" rounded="md" h="14rem">
              <Table.Root size="sm" striped stickyHeader>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader>#</Table.ColumnHeader>
                    <Table.ColumnHeader>width</Table.ColumnHeader>
                    <Table.ColumnHeader>height</Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {
                    // Display measaurements in descending order
                    measurements
                      .slice()
                      .reverse()
                      .map((measurement) => (
                        <Table.Row key={measurement.index}>
                          <Table.Cell>{measurement.index}</Table.Cell>
                          <Table.Cell>{measurement.w}</Table.Cell>
                          <Table.Cell>{measurement.h}</Table.Cell>
                        </Table.Row>
                      ))
                  }
                </Table.Body>
              </Table.Root>
            </Table.ScrollArea>
          )}
        </Card.Body>
        <Card.Footer />
      </Card.Root>
    </>
  );
};

export default HomePage;
