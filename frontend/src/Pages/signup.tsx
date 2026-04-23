import { Button, Field, Flex, HStack, Text, Textarea } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api.js";
import Login from '../Pages/login.js'
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const [loading, setLoading] = useState(false)
 const navigate = useNavigate();
   const handleSignup = async () => {
    if(!name || !password || !email){
      alert("Fill all fields")
    }
    setLoading(true);
    try {
      const response = await API.post("/signup", {
        name: name,
        email: email,
        password: password,
      });
      alert("Account created! Now go to login." + response);
      navigate('/login')
    } catch (error) {
      alert("Signup failed" + error.response?.data?.message);
    }
    setLoading(false)
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
        Todo list---Signup
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
            <Field.Label>Email</Field.Label>
            <Textarea
              borderColor={"white"}
              placeholder="Enter email"
              _focus={{
                borderColor: "blue.500",
                boxShadow: "0 0 0 1px blue",
              }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Field.Root>
          <Field.Root>
            <Field.Label>Password</Field.Label>
            <Textarea
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
            onClick={handleSignup}
            // loading: {setloading}
          >
            Sign up
          </Button>
          <Text>
            Already have an account?{" "}
            <Link to="./login" style={{ color: "#F5F5F5" }}>
              Login
            </Link>
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Signup;
