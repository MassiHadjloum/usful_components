import CustomAccordion from "./components/Accordion/accordion";
import { HomeFAQ } from "./utils/FAQ";

const App = () => {
  return (
    <div className="App" style={{maxWidth: 1440, backgroundColor: 'white'}}>
     <CustomAccordion listFaq={HomeFAQ} />
    </div>
  );
}

export default App;
