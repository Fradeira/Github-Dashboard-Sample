import {useEffect, useState} from "react";
import {getRepo} from "../services/githubServices";
import React from "react";
import { useLocation } from 'react-router-dom'
import {Error} from "./Error";
import {Timeline} from "@mui/lab";
import {TimelineItems} from "./Timeline-items";
import {Avatar} from "@mui/material";

export const RepoDetails = () => {

    const [error, setError] = useState();
    const [infos, setInfos] = useState();

    const location = useLocation();
    const { user, repo } = location.state;

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getRepo(user, repo.name, {signal})
            .then(
                (data) => {
                    setInfos(data.data);
                }).catch(
            (error) => {
                setError(error)
            });

        return function cleanup(){
            controller.abort();
        }
    }, []);
console.log(infos)
    return(
        <div>
            {
                infos &&
                    <>
                        <Avatar
                            alt={infos.name}
                            src={infos.owner.avatar_url}
                            className={'avatar_detail'}
                        />
                        <Timeline position="alternate" className={'timeline'}>
                            <TimelineItems {...{infos}}/>
                        </Timeline>
                    </>
            }
            {
                error &&
                    <Error {...{error}} />
            }
        </div>
    )
};
