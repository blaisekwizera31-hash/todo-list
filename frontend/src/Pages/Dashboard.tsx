import { MdAdd, MdEdit, MdDelete, MdCheck, MdClose } from "react-icons/md";
import {
  HStack,
  Box,
  Flex,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api.js";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isNewnote, setIsNewnote] = useState(false);
  const [tasks, setTasks] = useState<any[]>([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleComplete = (id: string) => {
    setCompletedTasks((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/login");
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
        navigate("/login");
      }
      alert(error.message);
    }
  };

  const handleSaveTask = async () => {
    if (!taskTitle) {
      alert("Please type something");
      return;
    }
    try {
      await API.post("/createnotes", { title: taskTitle, content: taskTitle });
      await fetchTasks();
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
      const response = await API.put(`/updatenotes/${id}`, { title: newTitle });
      setTasks(tasks.map((t: any) => (t._id === id ? response.data.data : t)));
    } catch (error) {
      alert("Failed to update task.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ minHeight: "100vh", backgroundColor: "rgba(0,0,0,0.55)" }}>

        <HStack
          height={16}
          paddingX={8}
          align="center"
          justify="space-between"
          backgroundColor="rgba(255,255,255,0.05)"
          borderBottom="1px solid rgba(255,255,255,0.1)"
          style={{ backdropFilter: "blur(10px)" }}
          position="sticky"
          top={0}
          zIndex={10}
        >
          <Box fontFamily="serif" fontSize={28} fontWeight="bold" color="white" letterSpacing="wide">
            Todolist
          </Box>
          <Box textAlign="center">
            <Box color="whiteAlpha.900" fontSize={15} fontWeight="semibold">
              {now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
            </Box>
            <Box color="whiteAlpha.600" fontSize={12}>
              {now.toLocaleDateString([], { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </Box>
          </Box>
          <Button
            size="sm"
            variant="outline"
            borderColor="whiteAlpha.400"
            color="whiteAlpha.800"
            borderRadius={8}
            _hover={{ backgroundColor: "whiteAlpha.100", borderColor: "white" }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </HStack>

        <Flex justify="center" paddingTop={10} paddingX={4}>
          <Box width="100%" maxWidth="900px">

            {isNewnote ? (
              <Flex
                flexDirection="column"
                gap={3}
                padding={4}
                borderRadius={10}
                backgroundColor="rgba(255,255,255,0.08)"
                border="1px solid rgba(255,255,255,0.15)"
                style={{ backdropFilter: "blur(10px)" }}
                mb={4}
              >
                <Text fontFamily="serif" fontWeight="semibold" color="white" fontSize={15}>
                  New Task
                </Text>
                <Input
                  placeholder="Task title..."
                  color="white"
                  borderColor="whiteAlpha.500"
                  borderRadius={8}
                  _placeholder={{ color: "gray.400" }}
                  _focus={{ borderColor: "blue.400", boxShadow: "0 0 0 1px #4299e1" }}
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSaveTask()}
                  autoFocus
                />
                <HStack>
                  <Button size="sm" colorScheme="green" borderRadius={8} onClick={handleSaveTask}>
                    <MdCheck />
                    <Box ml={1}>Save</Box>
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    color="red.300"
                    borderRadius={8}
                    onClick={() => { setIsNewnote(false); setTaskTitle(""); }}
                  >
                    <MdClose />
                    <Box ml={1}>Cancel</Box>
                  </Button>
                </HStack>
              </Flex>
            ) : (
              <Button
                width="full"
                variant="outline"
                borderStyle="dashed"
                borderColor="whiteAlpha.400"
                color="gray.300"
                borderRadius={10}
                mb={4}
                _hover={{ borderColor: "blue.400", color: "blue.300", backgroundColor: "whiteAlpha.100" }}
                onClick={() => setIsNewnote(true)}
              >
                <MdAdd fontSize={20} />
                <Box ml={2} fontFamily="serif">Add Task</Box>
              </Button>
            )}

            {tasks.length === 0 ? (
              <Box color="whiteAlpha.500" textAlign="center" mt={16} fontFamily="serif" fontSize={15}>
                No tasks yet. Click Add Task to get started.
              </Box>
            ) : (
              <Flex flexDirection="column" gap={3}>
                {tasks.map((task: any) => (
                  <Box
                    key={task._id}
                    border="1px solid rgba(255,255,255,0.12)"
                    borderRadius={10}
                    padding={4}
                    backgroundColor={completedTasks.has(task._id) ? "rgba(72,187,120,0.1)" : "rgba(255,255,255,0.07)"}
                    style={{ backdropFilter: "blur(8px)" }}
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    _hover={{ backgroundColor: completedTasks.has(task._id) ? "rgba(72,187,120,0.15)" : "rgba(255,255,255,0.12)", transition: "0.2s" }}
                  >
                    <HStack gap={3}>
                      <Box
                        width={5}
                        height={5}
                        borderRadius="full"
                        border="2px solid"
                        borderColor={completedTasks.has(task._id) ? "green.400" : "whiteAlpha.500"}
                        backgroundColor={completedTasks.has(task._id) ? "green.400" : "transparent"}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        cursor="pointer"
                        flexShrink={0}
                        onClick={() => toggleComplete(task._id)}
                        style={{ transition: "all 0.2s" }}
                      >
                        {completedTasks.has(task._id) && (
                          <MdCheck fontSize={12} color="white" />
                        )}
                      </Box>
                      <Box
                        fontFamily="serif"
                        fontSize={15}
                        textDecoration={completedTasks.has(task._id) ? "line-through" : "none"}
                        color={completedTasks.has(task._id) ? "whiteAlpha.500" : "white"}
                        style={{ transition: "all 0.2s" }}
                      >
                        {task.title}
                      </Box>
                    </HStack>
                    <HStack gap={1}>
                      <Button
                        size="sm"
                        variant="ghost"
                        color="blue.300"
                        borderRadius={7}
                        onClick={() => handleUpdateTask(task._id, task.title)}
                        _hover={{ backgroundColor: "rgba(66,153,225,0.15)" }}
                      >
                        <MdEdit fontSize={17} />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        color="red.400"
                        borderRadius={7}
                        onClick={() => handleDeletetask(task._id)}
                        _hover={{ backgroundColor: "rgba(245,101,101,0.15)" }}
                      >
                        <MdDelete fontSize={17} />
                      </Button>
                    </HStack>
                  </Box>
                ))}
              </Flex>
            )}

          </Box>
        </Flex>

      </div>
    </div>
  );
};

export default Dashboard;
