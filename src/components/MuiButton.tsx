import { useState } from 'react';

import { 
    Button, 
    Stack, 
    IconButton, 
    ButtonGroup,
    ToggleButton,
    ToggleButtonGroup,
} from '@mui/material';

//MUI Icons
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

export const MuiButton = () => {
    const [formats, setFormats] = useState<string | null>(null);
    
    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
        setFormats(updatedFormats);
    };

return (
    <Stack spacing={4} mt={5}>
        <Stack spacing={2} direction="row">
            <Button variant="text" href="https://google.com">
                Text
            </Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='text' color='primary'>Primary</Button>
            <Button variant='outlined' color='secondary'>Secondary</Button>
            <Button variant='contained' color='error'>Error</Button>
            <Button variant='contained' color='warning'>Warning</Button>
            <Button variant='contained' color='info'>Info</Button>
            <Button variant='contained' color='success'>Success</Button>
        </Stack>

        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small'>small</Button>
            <Button variant='contained' size='medium'>medium</Button>
            <Button variant='contained' size='large'>large</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon/>} disableRipple onClick={() => alert('Clicked')}>Send</Button>
            <Button variant='contained' endIcon={<SendIcon/>} disableElevation>Send</Button>
            <IconButton aria-label='send' color='success' size='small'>
                <SendIcon />
            </IconButton>
        </Stack>

        <Stack direction='row'>
            <ButtonGroup 
                variant='text'
                size='small'
                color='secondary'
                aria-label='alignment button group'
            >
                <Button onClick={() => alert('Left Clicked')}>left</Button>
                <Button >center</Button>
                <Button >right</Button>
            </ButtonGroup>
        </Stack>

        <Stack direction='row'>
            <ToggleButtonGroup 
                aria-label='text-formatting' 
                value={formats}  
                onChange={handleFormatChange}
                size='large'
                color='info'
                exclusive
            >
                <ToggleButton value='bold' aria-label='bold'>
                    <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton value='italic' aria-label='italic'>
                    <FormatItalicIcon />
                </ToggleButton>
                <ToggleButton value='underlined' aria-label='underlined'>
                    <FormatUnderlinedIcon />
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>

    </Stack>
  );
};
