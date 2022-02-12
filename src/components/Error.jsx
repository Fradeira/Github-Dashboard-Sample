import {Alert, Stack} from "@mui/material";
import React from "react";


export const Error = (error) => {

    return(
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">Issue to get user : {error} </Alert>
        </Stack>
    )

};
