import './App.css';

import { Stack } from '@mui/material';

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
import { MuiAccordion } from './components/MuiAccordion';
import { MuiImageList } from './components/MuiImageList';
import { MuiNavbar } from './components/MuiNavbar';
import { MuiLink } from './components/MuiLink';
import { MuiBreadcrumbs } from './components/MuiBreadCrumbs';
import { MuiDrawer } from './components/MuiDrawer';
import { MuiSpeedDial } from './components/MuiSpeedDial';
import { MuiBottomNavigation } from './components/MuiBottomNavigation';
import { MuiAvatar } from './components/MuiAvatar';
import { MuiBadge } from './components/MuiBadge';

function App() {
  return (
    <div className="App">
      {/* Navbar Component */}
      <MuiNavbar />
      <MuiDrawer />

      <Stack p={8}>
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

        {/* Accordion Component */}
        <MuiAccordion />

        {/* Image List */}
        <MuiImageList />

        {/* Link Component */}
        <MuiLink />

        {/* Breadcrumb Component */}
        <MuiBreadcrumbs />

        {/* SpeedDial Component */}
        <MuiSpeedDial />

        {/* Bottom Navigation */}
        <MuiBottomNavigation />

        {/* Avatar Component */}
        <MuiAvatar />

        {/* Badge Component */}
        <MuiBadge />

      </Stack>
    </div>
  );
}

export default App;
