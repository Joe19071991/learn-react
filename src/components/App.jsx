import { Text } from "./Text";
import "../App.css";

function App() {
  const firstname = ["Gisèle", "Benoit", "Mathilde", "Lauriane", "Gwen"];
  return (
    <ul>
      {firstname.map((element) => (
        <Text key={element} msg={element} />
      ))}
    </ul>
  );
}

export default App;
