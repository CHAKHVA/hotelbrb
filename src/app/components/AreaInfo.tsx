import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import PlaceIcon from "@mui/icons-material/Place";
import AirportIcon from "@mui/icons-material/LocalAirport";
import StarIcon from "@mui/icons-material/Star";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

interface Landmark {
    name: string;
    distance: string;
}

import jsonData from "@/data/area_info.json";

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    backgroundColor: theme.palette.grey[200],
    margin: "10px 0",
    borderRadius: "15px",
    boxShadow: `0 3px 5px 2px ${theme.palette.grey[300]}`,
}));

const CustomTimelineDot = styled(TimelineDot)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function AreaInfo() {
    const createTimelineItems = (
        data: Landmark[],
        IconComponent: React.ElementType
    ) => {
        return data.map((item, index) => (
            <TimelineItem key={index}>
                <TimelineSeparator>
                    <CustomTimelineDot variant="outlined">
                        <IconComponent color="action" />
                    </CustomTimelineDot>
                    {index < data.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <StyledPaper elevation={6}>
                        <Typography variant="h6" component="span">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.distance}
                        </Typography>
                    </StyledPaper>
                </TimelineContent>
            </TimelineItem>
        ));
    };

    const renderCategory = (
        title: string,
        data: Landmark[],
        IconComponent: React.ElementType
    ) => (
        <>
            <Typography
                variant="h4"
                color="primary"
                sx={{ mt: 4, mb: 2, textAlign: "center" }}
            >
                {title}
            </Typography>
            {createTimelineItems(data, IconComponent)}
        </>
    );

    return (
        <Timeline position="alternate">
            {renderCategory(
                "Closest Landmarks",
                jsonData.closestLandmarks,
                PlaceIcon
            )}
            {renderCategory(
                "Closest Airports",
                jsonData.closestAirports,
                AirportIcon
            )}
            {renderCategory(
                "Most Popular Landmarks",
                jsonData.mostPopularLandmarks,
                StarIcon
            )}
        </Timeline>
    );
}
