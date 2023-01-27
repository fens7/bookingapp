// Core
import {useSelector} from 'react-redux';
// Parts
import Container from '@mui/material/Container';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// Engine
import { selectorHotels } from '../../engine/core/hotels/selectors';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, Typography } from '@mui/material';

function Hotels(){
    const hotels = useSelector(selectorHotels.items);
    return (
        <Container sx={{width: 1200, display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {hotels.map((hotel) => (
                <Card key={hotel.id} sx={{ width: '30%', minHeight: 200, border: '1px solid', borderColor: 'primary.main', margin: 1 }}>
                    <CardContent sx={{position: 'relative'}}>
                        
                        <Typography sx={{ fontSize: 22 }} component={'h1'}>
                        {hotel.name}
                        </Typography>
                        
                        
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {hotel.address}
                        </Typography>

                        <Box sx={{display: 'flex', justifyContent: 'space-between', }}>

                            <Typography variant="body2">
                            {hotel.city}
                            </Typography>

                            <Typography sx={{display: 'flex', alignItems: 'center'}} variant="h5" component="h5">
                            {hotel.hotel_rating} 
                            <StarBorderIcon sx={{color: 'primary.main', fontSize: '40px'}}/>
                            </Typography>

                        </Box>
                        
                    </CardContent>
                </Card>
            ))}
            
        </Container>
    )
}
export default Hotels