import {Stack} from "@mui/material";
import React from "react";
import {Card, CardContent,
    CardActions, Button,
    Typography, Avatar
} from "@mui/material";
import {Repos} from "./Repos";

export const SearchResults = ({user}) => {
    return(
        <Stack direction="row" spacing={4} className={'searchResults'}>
            {
                user !== undefined &&
                    user.map((elem, idx) => (
                        <React.Fragment key={idx}>
                            <Card className={'card'}>
                                <CardContent>
                                    <Avatar
                                        alt={elem.login}
                                        src={elem.avatar_url}
                                        className={'avatar'}
                                    />
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary" className={'name'}>
                                        {elem.login}
                                    </Typography>
                                    <Repos {...{elem}}/>
                                </CardContent>
                                <CardActions>
                                    <a href={elem.html_url} target="_blank" rel="noreferrer">
                                        <Button size="small">
                                            See profile on Github
                                        </Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </React.Fragment>
                    ))
            }
        </Stack>
    )
};
