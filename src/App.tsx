import { Container } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/signup");
  }, []);

  return <Container w={350} h={400} bgColor={"#0C1117"}></Container>;
};

export default App;
