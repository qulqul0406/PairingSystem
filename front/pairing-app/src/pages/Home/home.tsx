import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { maxHeaderSize } from 'http'


const theme = createTheme()

function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <ThemeProvider theme={theme} >
      <Container component='main' maxWidth='xl'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16} sx={{mt: 25}}>
            <Grid item xs={8}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'row'
                }}
              >
                <img src='https://2.bp.blogspot.com/-pFOv6JJOGbc/Wb8gR79McsI/AAAAAAABGwk/X4rTOgVBt206izOmKKUpVGV49o4NDxAYACLcBGAs/s550/group_young_people.png' alt=''></img>
              </Box>
            </Grid>
            <Grid item xs={8}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    mt: 25
                  }}
                >
                  <h1>每一次相遇都是一段精彩的旅程</h1>
                  <h1>一同探索生命的美好 結交心靈知己</h1>
                </Box>
            </Grid>
          </Grid>
        </Box>
        {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            mt: 25
          }}
        >
          <img src='https://2.bp.blogspot.com/-pFOv6JJOGbc/Wb8gR79McsI/AAAAAAABGwk/X4rTOgVBt206izOmKKUpVGV49o4NDxAYACLcBGAs/s550/group_young_people.png' alt=''></img>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              marginLeft: 5
            }}
          >
            <h1>每一次相遇都是一段精彩的旅程</h1>
            <h1>一同探索生命的美好 結交心靈知己</h1>
          </Box>
        </Box> */}
      </Container>
    </ThemeProvider>
  )
}

export default Home
