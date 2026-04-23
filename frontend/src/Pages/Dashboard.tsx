import { MdAdd, MdEdit, MdDelete } from "react-icons/md";
import { HStack, Grid, GridItem, Box, Flex } from "@chakra-ui/react";
const Dashboard = () => {
  return (
    <>
      <HStack
        border={1}
        borderColor={"white"}
        borderStyle={"solid"}
        height={20}
        borderRadius={10}
        align="center"
        justify="center"
        fontFamily="serif"
        fontSize={28}
        fontWeight="bold"
        width="1000"
      >
        Todolist--Dashboard
      </HStack>

      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} width="1000">
        <GridItem
          border={1}
          borderColor={"white"}
          borderStyle={"solid"}
          // backgroundImage="url('/bg.jpg')"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
        >
          <Flex
            flexDirection={"column"}
            gap={20}
            align="center"
            justify="center"
            marginTop={10}
          >
            <Box
              border={1}
              height={150}
              width={250}
              borderColor={"white"}
              borderStyle={"solid"}
              borderRadius={10}
              padding={5}
              backgroundColor="white"
              color={"black"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{
                transform: "scale(1.02)",
                backgroundColor: "#e3e3e7ff",
                transition: "0.3s ease all",
                boxShadow: "0 0 0 1px black",
                cursor: "pointer",
              }}
            >
              <HStack justify="center" align="center">
                <MdAdd fontSize={20} />
                <Box fontSize={20} fontFamily="serif" fontWeight="bold">
                  Add task
                </Box>
              </HStack>
            </Box>
            <Box
              border={1}
              height={150}
              width={250}
              borderColor={"black"}
              borderStyle={"solid"}
              borderRadius={10}
              padding={5}
              backgroundColor="white"
              color="black"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{
                transform: "scale(1.02)",
                backgroundColor: "#e3e3e7ff",
                transition: "0.3s ease all",
                boxShadow: "0 0 0 1px black",
                cursor: "pointer",
              }}
            >
              <HStack justify="center" align="center">
                <MdEdit fontSize={20} />
                <Box fontSize={20} fontFamily="serif" fontWeight="bold">
                  Update Task
                </Box>
              </HStack>
            </Box>
            <Box
              border={1}
              height={150}
              width={250}
              borderColor={"white"}
              borderStyle={"solid"}
              marginBottom={5}
              borderRadius={10}
              padding={5}
              backgroundColor="white"
              color={"black"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{
                transform: "scale(1.02)",
                backgroundColor: "#e3e3e7ff",
                transition: "0.3s ease all",
                boxShadow: "0 0 0 1px black",
                cursor: "pointer",
              }}
            >
              <HStack justify="center" align="center">
                <MdDelete fontSize={20} />
                <Box fontSize={20} fontFamily="serif" fontWeight="bold">
                  Delete Task
                </Box>
              </HStack>
            </Box>
          </Flex>
        </GridItem>
        <GridItem border={1} borderColor={"white"} borderStyle={"solid"}>
          this is grid two
        </GridItem>
      </Grid>
    </>
  );
};

export default Dashboard;
