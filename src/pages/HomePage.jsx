import {
  Card,
  NumberInput,
  InputGroup,
  HStack,
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
    const newMeasurement = { w: w, h: h };
    setMeasurements([...measurements, newMeasurement]);
    setW(0);
    setH(0);
  };

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
              >
                <NumberInput.Input />
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
              >
                <NumberInput.Input />
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
            <Table.ScrollArea borderWidth="1px" rounded="md" height="40vh">
              <Table.Root size="sm" striped stickyHeader>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader>#</Table.ColumnHeader>
                    <Table.ColumnHeader>width</Table.ColumnHeader>
                    <Table.ColumnHeader>height</Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {measurements.map((measurement, index) => (
                    <Table.Row key={index}>
                      <Table.Cell>{index + 1}</Table.Cell>
                      <Table.Cell>{measurement.w}</Table.Cell>
                      <Table.Cell>{measurement.h}</Table.Cell>
                    </Table.Row>
                  ))}
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
