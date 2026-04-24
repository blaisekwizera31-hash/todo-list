import { MdAdd, MdEdit, MdDelete } from "react-icons/md";
import {
  HStack,
  Grid,
  GridItem,
  Box,
  Flex,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api.js";
const navigate = useNavigate();
const Dashboard = () => {
  const [isNewnote, setIsNewnote] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  useEffect(() => {

    const token = localStorage.getItem("userToken");
    if (!token) {
      navigate("../Pages/Login");
    } else {
      fetchTasks();
    }
  }, [navigate]);

  const fetchTasks = async () => {
    try {
      const response = await API.get("/getAllnotes");
      setTasks(response.data);
    } catch (error: any) {
      if (error.status == 401) {
        localStorage.removeItem("userToken");
        navigate("/Login");
      }
      alert(error.message);
    }
  };

  const handleSaveTask = async () => {
    if (!taskTitle || !tasks) {
      alert("Please type something");
    }
    try {
      const response = await API.post("/createnotes", { title: taskTitle });
      setTasks([...tasks, response.data]);
      setTaskTitle("");
      setIsNewnote(false);
    } catch (error) {
      alert("Failed to save");
    }
  };

  const handleDeletetask = async (id: string) => {
    try {
      await API.delete(`/deletenotes/${id}`);
      setTasks(tasks.filter((task: any) => task._id !== id));
    } catch (error) {
      alert("Failed to delete task");
    }
  };

  const handleUpdateTask = async (id: string, currentTitle: string) => {
  const newTitle = prompt("Edit your task:", currentTitle); 
  
  if (!newTitle || newTitle === currentTitle) return;

  try {
  
    const response = await API.put(`/updatenotes/${id}`, 
      { title: newTitle }, 
  
    );

    
    setTasks(tasks.map(t => (t._id === id ? response.data : t)));
    
    alert("Task updated!");
  } catch (error) {
    alert("Failed to update task.");
  }
};  
  
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/Login");
  };
  return (
    <>
      <HStack
        border={1}
        borderColor={"white"}
        borderStyle={"solid"}
        height={20}
        borderRadius={10}
        align="center"
        justify="space-between"
        fontFamily="serif"
        fontSize={28}
        fontWeight="bold"
        width="1000"
        paddingX={6}
      >
        <Box>Todolist--Dashboard</Box>
        <Button
          size="sm"
          colorScheme="red"
          variant="outline"
          onClick={handleLogout}
        >
          Logout
        </Button>
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
              onClick={() => {
                setIsNewnote(true);
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
              onClick={() => {}}
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
          {isNewnote && (
            <Flex
              flexDirection="column"
              gap={4}
              width={500}
              marginTop={10}
              marginLeft={40}
            >
              <Box marginLeft={20}> + Add New Task</Box>
              <Input
                height={100}
                width={200}
                marginLeft={20}
                placeholder="Type your task here..."
                color="white"
                borderColor="whiteAlpha.600"
                _placeholder={{ color: "gray.500" }}
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
              <HStack marginLeft={20}>
                <Button colorScheme="green" size="sm" onClick={handleSaveTask}>
                  Save Task
                </Button>
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
          )}

          {tasks.length === 0 && !isNewnote ? (
            <Box color="gray.500" textAlign="center" mt={250}>
              Click "Add Task" to start adding tasks.
            </Box>
          ) : (
            <Flex
              flexDirection="column"
              gap={3}
              padding={5}
              marginTop={isNewnote ? 4 : 0}
            >
              {tasks.map((task: any) => (
                <Box
                  key={task._id}
                  border={1}
                  borderColor="whiteAlpha.400"
                  borderStyle="solid"
                  borderRadius={8}
                  padding={4}
                  backgroundColor="whiteAlpha.100"
                  color="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box fontFamily="serif">{task.title}</Box>
                  <HStack>
                    <Button
                      size="sm"
                      variant="ghost"
                      color="blue.300"
                      onClick={() => handleUpdateTask(task._id, task.title)}
                      _hover={{ backgroundColor: "blue.900" }}
                    >
                      <MdEdit fontSize={18} />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      color="red.400"
                      onClick={() => handleDeletetask(task._id)}
                      _hover={{ backgroundColor: "red.900" }}
                    >
                      <MdDelete fontSize={18} />
                    </Button>
                  </HStack>
                </Box>
              ))}
            </Flex>
          )}
        </GridItem>
      </Grid>
    </>
  );
};

export default Dashboard;
