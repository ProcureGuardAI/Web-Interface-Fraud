import InputAndLabel from "./components/Inputs/InputAndLabel";

function App() {
const handleChange = (e) =>{
  console.log(e);
}

  return (
    <div>
      <InputAndLabel  placeHolder="design" onChangeFunction={handleChange} labelName="testing" />
    </div>
  );
}

export default App;
