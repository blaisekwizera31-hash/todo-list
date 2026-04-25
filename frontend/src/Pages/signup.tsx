import { Button, Field, Flex, Box, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!name || !password || !email) {
      alert("Fill all fields");
      return;
    }
    setLoading(true);
    try {
      const response = await API.post("/signup", { name, email, password });
      alert(`Account created! Now go to login. ${response.data?.message ?? ""}`);
      navigate("/login");
    } catch (error: unknown) {
      const message =
        (error as { response?: { data?: { message?: string } } })?.response?.data?.message ?? "";
        console.log(error);
      alert(`Signup failed ${message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex
      minHeight="100vh"
      align="center"
      justify="center"
      position="relative"
      backgroundImage="url('/image.png')"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Box position="absolute" inset={0} background="rgba(0,0,0,0.55)" />

      <Flex
        position="relative"
        flexDirection="column"
        gap={5}
        width={400}
        padding={10}
        borderRadius={16}
        backgroundColor="rgba(255,255,255,0.07)"
        border="1px solid rgba(255,255,255,0.15)"
        backdropFilter="blur(12px)"
        boxShadow="0 8px 32px rgba(0,0,0,0.4)"
      >
        <Box
          fontFamily="serif"
          fontSize={26}
          fontWeight="bold"
          color="white"
          textAlign="center"
          mb={2}
        >
          Create Account
        </Box>

        <Field.Root>
          <Field.Label color="whiteAlpha.800" fontSize={13}>Username</Field.Label>
          <Input
            placeholder="Enter your name"
            color="white"
            borderColor="whiteAlpha.400"
            borderRadius={8}
            _placeholder={{ color: "gray.500" }}
            _focus={{ borderColor: "blue.400", boxShadow: "0 0 0 1px #4299e1" }}
            onChange={(e) => setName(e.target.value)}
          />
        </Field.Root>

        <Field.Root>
          <Field.Label color="whiteAlpha.800" fontSize={13}>Email</Field.Label>
          <Input
            placeholder="Enter your email"
            color="white"
            borderColor="whiteAlpha.400"
            borderRadius={8}
            _placeholder={{ color: "gray.500" }}
            _focus={{ borderColor: "blue.400", boxShadow: "0 0 0 1px #4299e1" }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field.Root>

        <Field.Root>
          <Field.Label color="whiteAlpha.800" fontSize={13}>Password</Field.Label>
          <Input
            type="password"
            placeholder="Enter your password"
            color="white"
            borderColor="whiteAlpha.400"
            borderRadius={8}
            _placeholder={{ color: "gray.500" }}
            _focus={{ borderColor: "blue.400", boxShadow: "0 0 0 1px #4299e1" }}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSignup()}
          />
        </Field.Root>

        <Button
          width="full"
          borderRadius={8}
          colorScheme="blue"
          mt={1}
          loading={loading}
          _hover={{ transform: "scale(1.02)", transition: "0.2s" }}
          onClick={handleSignup}
        >
          Sign up
        </Button>

        <Text color="whiteAlpha.600" textAlign="center" fontSize={13}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#90cdf4" }}>
            Login
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Signup;
