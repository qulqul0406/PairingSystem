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
import Cookies from 'universal-cookie';


const theme = createTheme()
const api = "http://localhost:8081/users/login"

// const [list, setList] = useState([]);


// //cookie
// const cookies = new Cookies();

// export const setToken = (token:any) => {
// cookies.set('token', token, 
// { path: '/',secure: true,sameSite :true}
// );
// console.log(cookies.get('token'));
// };

// export const getAuthToken = () => {
// if (cookies.get('token')===undefined){
//   return '';
// }
// return cookies.get('token');
// };


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const onSubmit = (data: any) => {
    axios.post(`${api}`, {
      email: email,
      password: password
    }).then(response => {
      if (response.status === 400) {
        //顯示註冊成功
      }
    }).catch(error => {
      console.error(error.data.status)
    })

  };


  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  // const [userIsLogin, setUserIsLogin] = useState(false)
  //   useEffect(() => {
  //       if (sessionStorage.getItem('isLogin')) {
  //           setUserIsLogin(true)
  //       }
  //   }, [])
  //   const onClickLogin = () => {
  //       sessionStorage.setItem('isLogin', true)
  //       setUserIsLogin(true)
  //   }
  //   const onClickLogout = () => {
  //       sessionStorage.removeItem('isLogin')
  //       setUserIsLogin(false)
  //   }



  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xl'>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 10
          }}
          noValidate autoComplete="off"
        >
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
            <Button variant="contained" color="primary" onClick={onSubmit}>Login</Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Login
