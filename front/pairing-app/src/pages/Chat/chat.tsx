import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
// import CssBaseline from '@mui/material/CssBaseline'
// import Grid from '@mui/material/Grid'
import { createTheme, ThemeProvider } from '@mui/material/styles'


const theme = createTheme()

function ChatRoom() {

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xl'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            mt: 3
          }}
        >
          <img src='https://1.bp.blogspot.com/-ZJagixBjxaM/WI1zP6nDU7I/AAAAAAABBXY/gg7jzPiMRgc5RdEdeRr5KGwcwCe0Q6HEACLcB/s400/mail_couple.png' alt=''></img>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            mt: 3
          }}>
          <Button
            size="large"
            variant="outlined"
            component={Link} to='/pairing' >來去冒險囉~</Button>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default ChatRoom
