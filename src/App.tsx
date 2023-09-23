import './App.css';

import { MuiTypography } from './components/MuiTypography';
import { MuiButton } from './components/MuiButton';
import { MuiTextField } from './components/MuiTextField';
import { MuiSelect } from './components/MuiSelect';

function App() {
  return (
    <div className="App">
      {/* Typography */}
      <MuiTypography />

      {/* Buttons */}
      <MuiButton />

      {/* Textfield */}
      <MuiTextField />

      {/* Select */}
      <MuiSelect />
    </div>
  );
}

export default App;
