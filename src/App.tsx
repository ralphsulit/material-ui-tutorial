import './App.css';

import { MuiTypography } from './components/MuiTypography';
import { MuiButton } from './components/MuiButton';
import { MuiTextField } from './components/MuiTextField';
import { MuiSelect } from './components/MuiSelect';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiCheckbox } from './components/MuiCheckbox';
import { MuiSwitch } from './components/MuiSwitch';
import { MuiRating } from './components/MuiRating';

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

      {/* Radio Button */}
      <MuiRadioButton />

      {/* Checkbox */}
      <MuiCheckbox />

      {/* Switch */}
      <MuiSwitch />

      {/* Rating */}
      <MuiRating />
    </div>
  );
}

export default App;
