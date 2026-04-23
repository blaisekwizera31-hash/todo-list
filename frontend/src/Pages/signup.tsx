import { Button, Field, Flex, HStack, Text, Textarea } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Signup = () => {
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
            />
          </Field.Root>
          <Button
            width={"full"}
            _hover={{
              transform: "scale(1.02)",
              borderColor: "black.500",
              boxShadow: "0 0 0 1px black",
            }}
          >
            Sign up
          </Button>
          <Text>
            Already have an account? <a href="./login">Login</a>
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Signup;
