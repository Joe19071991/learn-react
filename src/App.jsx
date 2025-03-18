import { Text } from "./Text";
import "./App.css";

function App() {
  const firstname = ["Gisèle", "Benoit", "Mathilde", "Lauriane", "Gwen"];
  return (
    <>
      {firstname.map((element) => (
        <Text key={element} msg={element} />
      ))}
    </>
  );
}

export default App;
