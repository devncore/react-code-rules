import React from 'react';
import { Grid } from '@mui/material';
import Search from './DashboardSearch';
import Content from './DashboardContent';
export default function() {
    return (
        <Grid container>
            <Grid item xs={4}>
                <Search/>
            </Grid>
            <Grid item xs>
                <Content/>
            </Grid>
        </Grid>
    );
}