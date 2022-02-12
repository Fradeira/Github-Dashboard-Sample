import {TimelineItem, TimelineConnector, TimelineContent, TimelineDot, TimelineSeparator} from "@mui/lab";
import React from "react";

export const TimelineItems = (props) => {

    const {
        name,
        language,
        stargazers_count,
        created_at,
        updated_at,
        html_url
    } = props.infos;

    return(
        <>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <span>
                        Name
                    </span> : {name}
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <span>
                        Language
                    </span> : {language ? language : "No language set."}
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <span>
                        Stars
                    </span> : {stargazers_count}
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <span>
                        Created at
                    </span> : {created_at.substr(0, 10)}
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <span>
                        Update at
                    </span> : {updated_at.substr(0, 10)}
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <span>
                        Url repo
                    </span> : {html_url}
                </TimelineContent>
            </TimelineItem>
        </>
    )
};
