import './App.css';

import { MuiTypography } from './components/MuiTypography';
import { MuiButton } from './components/MuiButton';
import { MuiTextField } from './components/MuiTextField';
import { MuiSelect } from './components/MuiSelect';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiCheckbox } from './components/MuiCheckbox';
import { MuiSwitch } from './components/MuiSwitch';
import { MuiRating } from './components/MuiRating';
import { MuiAutoComplete } from './components/MuiAutoComplete';
import { MuiLayout } from './components/MuiLayout';
import { MuiCard } from './components/MuiCard';

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

      {/* Autocomplete */}
      <MuiAutoComplete />

      {/* Box Component */}
      <MuiLayout />

      {/* Card Component */}
      <MuiCard />
    </div>
  );
}

export default App;
