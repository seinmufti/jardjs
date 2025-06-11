import { Provider } from "@/components/ui/provider";
import { Center, VStack } from "@chakra-ui/react";
import HomePage from "@/pages/HomePage";

const App = () => {
  return (
    <Provider>
      <VStack p={"3rem"} justifyContent="center" alignItems="center">
        <HomePage />
      </VStack>
    </Provider>
  );
};

export default App;
