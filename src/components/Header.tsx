import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { Flex, Image, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor={"#010408"}
    >
      <Link to="/">
        <Image src={Logo} w={"50px"} h={"50px"} />
      </Link>
      <Text fontSize={"24px"} color={"white"}>
        GitChat
      </Text>
    </Flex>
  );
};

export default Header;
