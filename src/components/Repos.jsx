import React, {useEffect, useState} from "react";
import {Box, List, ListItem,
    ListItemButton, ListItemIcon,
    ListItemText
} from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import {Error} from "./Error";
import {getRepos} from "../services/githubServices";
import {Link} from "react-router-dom";

export const Repos = (user) => {

    const [error, setError] = useState();
    const [repos, setRepos] = useState();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getRepos(user.elem.login, {signal})
            .then(
                (data) => {
                    setRepos(data.data);
            }).catch(
        (error) => {
                setError(error)
            });

        return function cleanup(){
            controller.abort();
        }
    }, [user]);


    return(
        <>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className={'card-repos'}>
                <nav aria-label="main mailbox folders">
                    <List>
                        {
                            repos &&
                                repos.map((elem, idx) => (
                                    <Link to='/repo-details'
                                        state={{
                                            user: user.elem.login,
                                            repo: elem
                                        }}
                                        key={idx}
                                        className={'linkRepo'}
                                    >
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <InboxIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={elem.name}/>
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>
                                ))
                        }
                    </List>
                </nav>
            </Box>
            {
                error &&
                    <Error {...{error}} />
            }
        </>
    )
};
