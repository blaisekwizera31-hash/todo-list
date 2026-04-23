import React from "react";
import { HStack, Grid, GridItem, Box , Flex} from "@chakra-ui/react";
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
        width= "1000"
      >Todolist--Dashboard</HStack>

    <Grid
    templateColumns={{base: "1fr", md: "1fr 1fr"}}
    width= "1000">
        <GridItem
        border={1}
        borderColor={'white'}
        borderStyle={'solid'}
        backgroundImage="url('/bg.jpg')"
        backgroundSize="cover"
        backgroundRepeat ="no-repeat"
        height="50vw">
            <Flex
            flexDirection={'column'}
            gap={20}
            align='center'
            justify='center'
            marginTop={10}>
             <Box
            border={1} height={150} width={250} borderColor={"white"} borderStyle={"solid"}></Box>   
             <Box
            border={1} height={150} width={250} borderColor={"white"} borderStyle={"solid"}></Box>   
             <Box
            border={1} height={150} width={250} borderColor={"white"} borderStyle={"solid"}></Box>   
            </Flex>
            
        </GridItem>
        <GridItem
        border={1}
        borderColor={'white'}
        borderStyle={'solid'}>
            this is grid two
        </GridItem>
    </Grid>
    </>
  );
};

export default Dashboard;
