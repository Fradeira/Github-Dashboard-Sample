import React from 'react';
import {Stack, TextField, Button, InputAdornment} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import {AccountCircle} from "@mui/icons-material";

export const Search = ({setSearchUser, isSearch, handleClicked}) => {
    return(
        <>
            <Stack direction="row" spacing={2} className={'search'}>
                <TextField
                    id="input-with-icon-textfield"
                    label="Search username"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    onChange={(e) => setSearchUser(e.target.value)}
                    variant="standard"
                    color="secondary"
                />
                {
                    !isSearch ?
                        <Button variant="contained" endIcon={<SendIcon />}
                                onClick={() => handleClicked()}>
                            Search
                        </Button>
                    :
                        <LoadingButton
                            loading
                            color="secondary"
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            variant="outlined"
                        >
                            Searching ...
                        </LoadingButton>
                }
            </Stack>
        </>
    )
};
