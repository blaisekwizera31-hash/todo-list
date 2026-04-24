import { MdAdd, MdEdit, MdDelete } from "react-icons/md";
import { HStack, Grid, GridItem, Box, Flex ,Input, Button} from "@chakra-ui/react";
import Login from "../Pages/login.js"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API  from "../services/api.js"
const navigate = useNavigate();
const Dashboard = () => {
  const [isNewnote, setIsNewnote]= useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  useEffect(() =>{
    const token = localStorage.getItem("userToken");

      if(!token){
        navigate("../Pages/Login");
      } else{
        fetchTasks()
      }
  }, [navigate]
    
    );
  
  const fetchTasks = async () => {
    try{
     const response = await API.get('/')
    }
    catch(error){

    }
  }
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
              onClick={()=>{setIsNewnote(true)}}
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
       {isNewnote ? (
           
            <Flex flexDirection="column" gap={4} width={500} marginTop={200} marginLeft={40}>
              <Box marginLeft={20}>Add New Task</Box>
              <Input 
              height={100}
              width={200}
              marginLeft={20}
                placeholder="Type your task here..." 
                color="white" 
                borderColor="whiteAlpha.600"
                _placeholder={{ color: "gray.500" }}
              />
              <HStack marginLeft={20}>
                <Button colorScheme="green" size="sm">Save Task</Button>
                <Button 
                  variant="ghost" 
                  color="red.300" 
                  size="sm" 
                  onClick={() => setIsNewnote(false)}
                >
                  Cancel
                </Button>
              </HStack>
            </Flex>
          ) : (
         
            <Box color="gray.500" textAlign="center" mt={250}>
              Click "Add Task" to start adding tasks.
            </Box>
          )}
        </GridItem>
      </Grid>
    </>
  );
};

export default Dashboard;
