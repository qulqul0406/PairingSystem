import { useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import AlertTitle from '@mui/material/AlertTitle';


const theme = createTheme()
const api = "http://localhost:8081/users/register"

function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (data: any) => {
    const response = axios.post(`${api}`, {
      username: username,
      email: email,
      password: password
    }).then(response => {
      console.log('response:', response.data)
    }).catch(error => {
      console.error(error.data.status)
    })
    //   console.log('response:',response)
    // console.log('data:',data);

  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xl'>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 3
          }}
          noValidate autoComplete="off"
        >
          <Alert severity="success" sx={{
              m: 1, width: '27ch',textAlign:'center'
            }}>
            <AlertTitle >Register Success</AlertTitle>
          </Alert>
          <TextField
            sx={{
              m: 1, width: '25ch'
            }}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            helperText="" />
          <TextField
            sx={{
              m: 1, width: '25ch'
            }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText="" />
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput value={password} onChange={(e) => setPassword(e.target.value)}
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            margin: 1
          }}>
            <Button variant="contained" color="primary" onClick={onSubmit}>Register</Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Register
