// Parts
import { styled } from '@mui/system';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import { Button } from './Button';
// Engine
import { routes } from '../../engine/config/routers'


const Wrapper = styled(Box)({
    display: 'flex',
    // padding: '20px 24px 20px 24px',
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingRight: '24px',
    paddingLeft: '24px',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'
})

function Header() {
  return (
    <Wrapper component={'header'}>
        header
        <Stack spacing={2} direction="row">
            <Button to={routes.home}>Main</Button>
            <Button to={routes.about}>About</Button>
        </Stack>    
    </Wrapper>
  )
}

export default Header