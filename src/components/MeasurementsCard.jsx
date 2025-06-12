import { useState, useEffect } from "react";
import {
  Card,
  Heading,
  Table,
  Button,
  HStack,
  IconButton,
  NumberInput,
  InputGroup,
} from "@chakra-ui/react";
import { MdEdit, MdCheck, MdClose, MdDelete } from "react-icons/md";

const MeasurementsCard = ({ measurements, setMeasurements }) => {
  const [editEnabled, setEditEnabled] = useState(false);

  const [tempMeasurements, setTempMeasurements] = useState([]);

  const [currentMeasurements, setCurrentMeasurements] = useState([]);
  // As component loads
  useEffect(() => {
    setCurrentMeasurements(measurements);
  }, [measurements]);

  // If any measurement is added while in edit mode
  useEffect(() => {
    setTempMeasurements(measurements);
  }, [measurements]);

  const handleEditing = () => {
    setEditEnabled(!editEnabled);
    setTempMeasurements([...measurements]);
    setCurrentMeasurements([...measurements]);
  };

  const handleDoneEditing = () => {
    setEditEnabled(!editEnabled);
    setMeasurements([...tempMeasurements]);
    // set currentmeasurements to measurements ^, but tempMeasurements to avoid sync delay
    setCurrentMeasurements([...tempMeasurements]);
  };

  const handleCloseEditing = () => {
    setEditEnabled(!editEnabled);
    setCurrentMeasurements(measurements);
  };

  const handleTableInputEdit = (index, dimension, halfMeasurement) => {
    const updatedMeasurements = tempMeasurements.map((measurement) => {
      if (index === measurement.index) {
        return { ...measurement, [dimension]: halfMeasurement };
      }
      return measurement;
    });
    setTempMeasurements(updatedMeasurements);
  };

  const handleMeasurementDelete = (index) => {
    const newMeasurements = tempMeasurements.filter(
      (measurement) => measurement.index !== index
    );
    setTempMeasurements(newMeasurements);
    // Update current measurements
    setCurrentMeasurements(newMeasurements);
  };

  return (
    <Card.Root width="90vw">
      <Card.Header>
        <HStack justify="space-between">
          <Heading size={"xl"}>Submitted Measurements:</Heading>
          {measurements.length != 0 &&
            (!editEnabled ? (
              <Button
                w={"7rem"}
                colorPalette="blue"
                variant="solid"
                onClick={() => handleEditing()}
              >
                <MdEdit />
                Edit
              </Button>
            ) : (
              <HStack gap={"0.5rem"}>
                <IconButton
                  aria-label="Search database"
                  bg="red"
                  onClick={() => {
                    handleCloseEditing();
                  }}
                >
                  <MdClose />
                </IconButton>
                <Button
                  w={"7rem"}
                  colorPalette="green"
                  variant="solid"
                  onClick={() => handleDoneEditing()}
                >
                  <MdCheck />
                  Done
                </Button>
              </HStack>
            ))}
        </HStack>
      </Card.Header>
      <Card.Body>
        {measurements.length === 0 ? (
          <p>No added measurements yet.</p>
        ) : (
          <Table.ScrollArea borderWidth="1px" rounded="md" h="14rem">
            <Table.Root size="sm" striped stickyHeader>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader w={"10%"}>#</Table.ColumnHeader>
                  <Table.ColumnHeader w={"35%"}>width</Table.ColumnHeader>
                  <Table.ColumnHeader w={"35%"}>height</Table.ColumnHeader>
                  <Table.ColumnHeader w={"20%"}></Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {
                  // Display measaurements in descending order
                  currentMeasurements
                    .slice()
                    .reverse()
                    .map((measurement) => (
                      <Table.Row
                        key={measurement.index}
                        fontSize={"16px"}
                        h={"4rem"}
                      >
                        <Table.Cell>{measurement.index}</Table.Cell>
                        {!editEnabled ? (
                          <>
                            <Table.Cell>{measurement.w}</Table.Cell>
                            <Table.Cell>{measurement.h}</Table.Cell>
                            <Table.Cell></Table.Cell>
                          </>
                        ) : (
                          <>
                            <Table.Cell>
                              <InputGroup endElement={<p>cm</p>} w={"6rem"}>
                                <NumberInput.Root
                                  value={measurement.w}
                                  min={1}
                                  defaultValue={0}
                                  onChange={(e) =>
                                    handleTableInputEdit(
                                      measurement.index,
                                      "w",
                                      Number(e.target.value)
                                    )
                                  }
                                >
                                  <NumberInput.Input fontSize={"16px"} />
                                </NumberInput.Root>
                              </InputGroup>
                            </Table.Cell>
                            <Table.Cell>
                              <InputGroup endElement={<p>cm</p>} w={"6rem"}>
                                <NumberInput.Root
                                  value={measurement.h}
                                  min={1}
                                  defaultValue={0}
                                  onChange={(e) =>
                                    handleTableInputEdit(
                                      measurement.index,
                                      "h",
                                      Number(e.target.value)
                                    )
                                  }
                                >
                                  <NumberInput.Input fontSize={"16px"} />
                                </NumberInput.Root>
                              </InputGroup>
                            </Table.Cell>
                            {/* delete button */}
                            <Table.Cell>
                              <IconButton
                                aria-label="Delete Measurement"
                                bg="red"
                                onClick={() =>
                                  handleMeasurementDelete(measurement.index)
                                }
                              >
                                <MdDelete />
                              </IconButton>
                            </Table.Cell>
                          </>
                        )}
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
  );
};

export default MeasurementsCard;
