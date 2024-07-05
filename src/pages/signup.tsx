import { Flex, Stack } from "@chakra-ui/react";
import Header from "../components/Header";

const SignUp = () => {
  return (
    <Stack h={" 400px"} w={"300px"} gap="0">
      <Header />
      <Flex
        alignItems={"center"}
        direction={"column"}
        backgroundColor={"#010408"}
        w={"100%"}
        h={"100%"}
      ></Flex>
    </Stack>
  );
};

export default SignUp;
