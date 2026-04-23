import { Box, Button, Field, Flex, Input, Text, Textarea } from "@chakra-ui/react";

const Signup = () => {
  return (
    <Flex
      border={1}
      width={420}
      height={500}
      borderColor={"white"}
      borderStyle={"solid"}
      borderRadius={15}
      padding={10}
      justifyContent={"center"}
      alignItems={"center"}
      marginLeft={500}
      marginTop={100}
      flexDirection={"column"}
      gap={4}
    >
      <Field.Root>
        <Field.Label>Names</Field.Label>
        <Textarea
          borderColor={"white"}
          placeholder="Enter names"
        />
      </Field.Root>

      <Field.Root>
        <Field.Label>Email</Field.Label>
        <Textarea
          borderColor={"white"}
          placeholder="Enter email"
        />
      </Field.Root>

      <Field.Root>
        <Field.Label>Password</Field.Label>
        <Textarea
          borderColor={"white"}
          placeholder="Enter password"
        />
      </Field.Root>

      <Button
        width={"full"}
        _hover={{ transform: "scale(1.02)" }}
      >
        Sign up
      </Button>

      <Text>Already have an account? <a href="">Login</a></Text>
    </Flex>
  );
};

export default Signup;
