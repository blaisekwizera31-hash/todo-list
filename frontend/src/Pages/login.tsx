import { Button, Field, Flex, Box, Input, Text } from "@chakra-ui/react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await API.post("/login", { name, password });
      const token = response.data.token;
      localStorage.setItem("userToken", token);
      navigate("/dashboard");
    } catch (error: any) {
      alert(error?.response?.data?.message ?? error.message ?? "Login failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: 0,
        }}
      />

      <Flex
        position="relative"
        zIndex={1}
        flexDirection="column"
        gap={5}
        width={400}
        padding={10}
        borderRadius={16}
        backgroundColor="rgba(255,255,255,0.08)"
        border="1px solid rgba(255,255,255,0.18)"
        style={{ backdropFilter: "blur(14px)" }}
        boxShadow="0 8px 32px rgba(0,0,0,0.45)"
      >
        <Box
          fontFamily="serif"
          fontSize={26}
          fontWeight="bold"
          color="white"
          textAlign="center"
          mb={2}
        >
          Welcome Back
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
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          />
        </Field.Root>

        <Button
          width="full"
          borderRadius={8}
          colorScheme="blue"
          mt={1}
          loading={isLoading}
          _hover={{ transform: "scale(1.02)", transition: "0.2s" }}
          onClick={handleLogin}
        >
          Login
        </Button>

        <Text color="whiteAlpha.600" textAlign="center" fontSize={13}>
          Don't have an account?{" "}
          <Link to="/" style={{ color: "#90cdf4" }}>
            Sign up
          </Link>
        </Text>
      </Flex>
    </div>
  );
};

export default Login;
