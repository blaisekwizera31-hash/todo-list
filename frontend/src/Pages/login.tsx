import { Button, Field, Flex, HStack, Input, Text, Textarea } from "@chakra-ui/react";
import API from "../services/api.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await API.post("/login", {
        name: name,
        password: password,
      });
      const token = response.data.token;
      localStorage.setItem("userToken", token);
      alert("Login successful" + response.data);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
    setIsLoading(false);
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
        justify="center"
        fontFamily="serif"
        fontSize={28}
        fontWeight="bold"
      >
        Todo list---Login
      </HStack>
      <Flex align="center" justify="center" marginTop={20}>
        <Flex
          border={1}
          width={420}
          height={500}
          borderColor={"white"}
          borderStyle={"solid"}
          borderRadius={15}
          padding={10}
          justify="center"
          align="center"
          flexDirection={"column"}
          gap={4}
        >
          <Field.Root>
            <Field.Label>Names</Field.Label>
            <Textarea
              borderColor={"white"}
              placeholder="Enter names"
              _focus={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px blue",
              }}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Field.Root>
          <Field.Root>
            <Field.Label>Password</Field.Label>
            <Input
            type="password"
              borderColor={"white"}
              placeholder="Enter password"
              _focus={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px blue",
              }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Field.Root>
          <Button
            width={"full"}
            _hover={{
              transform: "scale(1.02)",
              borderColor: "black.500",
              boxShadow: "0 0 0 1px black",
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Text>Manage task perfectly</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
