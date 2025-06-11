import { Provider } from "@/components/ui/provider";
import { VStack } from "@chakra-ui/react";
import HomePage from "@/pages/HomePage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Provider>
      <VStack p={"3rem"} pb={"0rem"} alignItems="center" minH={"90vh"}>
        <HomePage />
      </VStack>
      <Footer></Footer>
    </Provider>
  );
};

export default App;
