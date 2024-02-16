import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles'


const theme = createTheme()

function Pairing() {

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          mt: 3
        }}
        >
          <img src='https://3.bp.blogspot.com/-baRYn4ldOcw/UTnZnrD9eGI/AAAAAAAAOpc/le-a-tT4EqI/s400/urashimatarou.png' alt=''></img>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          mt: 3
        }}>
          <h3>開啟一場友誼的冒險</h3>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          mt: 3
        }}>
          <Button size="large" variant="outlined" >start</Button>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          mt: 3
        }}>
          <h3>遊戲規則</h3>
          <p>1. 每日只能開啟五場配對</p>
          <p>2. 記得開啟配對及填寫興趣喔</p>
          <p>3. 拒絕配對後就再也遇不到囉，請三思～</p>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Pairing
