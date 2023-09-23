import { useState } from 'react';

import { Stack, Autocomplete, TextField } from '@mui/material';

type Skill = {
  id: number
  label: string
}

const skills = ['HTML', 'CSS', 'Javascript', 'TypeScript', 'React'];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill
}))

export const MuiAutoComplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null); 

  return(
    <Stack spacing={2} width='250px'>
      <span>Array</span>
      <Autocomplete 
        options={skills} 
        renderInput={(params) => <TextField {...params} label='Skills'/>} 
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo
      />

      <span>Object</span>
      <Autocomplete 
        options={skillsOptions} 
        renderInput={(params) => <TextField {...params} label='Skills'/>} 
        value={skill}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  )
}