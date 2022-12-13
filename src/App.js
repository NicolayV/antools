import { Footer } from "./components/footerGroup";
import { Header } from "./components/headerGroup";
import { NewcomerTools } from "./components/newComerTools";
import { PopularTools } from "./components/popularTools";
import { popularToolsCard, newcomerToolsCard } from "./data";
import * as C from "./styles/styled";

function App() {
  return (
    <C.Wrapper>
      <C.Container>
        <Header />
        <PopularTools list={popularToolsCard} />
        <NewcomerTools list={newcomerToolsCard} />
        <Footer />
      </C.Container>
    </C.Wrapper>
  );
}

export default App;
