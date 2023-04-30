import CustomAccordion from "./components/Accordion/accordion";
import { HomeFAQ } from "./utils/FAQ";

const App = () => {
  return (
    <div className="App">
     <CustomAccordion listFaq={HomeFAQ} />
    </div>
  );
}

export default App;
