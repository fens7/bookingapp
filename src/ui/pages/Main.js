// Core
import { useEffect } from 'react';
import { Form, Field } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux';
// Components
import { Grid } from '@mui/material';
import Box from '@mui/material/Box'
import { DataPicker } from '../components/_Form/DataPicker';
import {TextField} from '../components/_Form/TextField';
import { Button } from '../components/Button';
import { Select } from '../components/_Form/Select';
// Engine
import { getDestinationsAsync } from '../../engine/core/destination/saga/asyncActions';
import { getHotelsAsync } from '../../engine/core/hotels/saga/asyncActions';

import { selectorDestination } from '../../engine/core/destination/selectors';



function Main() {

    const dispatch = useDispatch()
    const destinationItems = useSelector(selectorDestination.items)
    const destinationLoading = useSelector(selectorDestination.loading)

    const onSubmit = (value) => {
        dispatch(getHotelsAsync(value))
    }

    useEffect(() => {
        dispatch(getDestinationsAsync())
    }, [])

    return (
    <div>
        <Form 
            onSubmit={onSubmit}
            render={({ handleSubmit })=>{
                return (
                    <Box component={'form'} sx={{margin: '30px 0'}} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={3} >
                                <Field name='destination' label='destination' options={destinationItems} disabled={destinationLoading} component={Select}/>
                            </Grid>

                            <Grid item xs={3} >
                                <Field name='check_in' label='check_in' component={DataPicker}></Field>
                            </Grid>

                            <Grid item xs={3} >
                                <Field name='check_out' label='check_out' component={DataPicker}></Field>
                            </Grid>

                            <Grid item xs={2} >
                                <Field name='children' label='children' component={TextField}></Field>
                            </Grid>

                            <Grid item xs={1} >
                                <Button type={'submit'}>Send</Button>
                            </Grid>

                        </Grid>
                        
                    </Box>
                )
            }}
        />


        <Box component='h6' sx={{fontSize: '48px', lineHeight: 1, margin: 0}}>
            Travel With 
            <Box component={'span'} sx={{color: 'primary.main'}}>Booking</Box>
        </Box>
        </div>
    )
}

export default Main