import './App.css';
import { CustomButton } from './CustomButton';

function App() {
  function handleCustomClick(text: string, color: string) {
    window.alert(`You clicked the ${color} ${text} button!`);
  }

  return (
    <>
      <CustomButton
        text="Fancy"
        color="red"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="Fancier"
        color="green"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        text="Fanciest"
        color="blue"
        onCustomClick={handleCustomClick}
      />
    </>
  );
}

export default App;
