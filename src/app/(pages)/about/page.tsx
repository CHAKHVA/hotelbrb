"use client";

import React, { useMemo } from "react";
import AreaInfo from "@/app/components/AreaInfo";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import { styled, useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import dynamic from "next/dynamic";

const FeatureIcon = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: theme.spacing(3),
    "&:hover": {
        transform: "scale(1.1)",
        transition: "transform .2s",
    },
    cursor: "pointer",
}));

const FeaturePaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderRadius: "15px",
    boxShadow: "none",
    background: "rgba(255, 255, 255, 0.8)",
}));

export default function Page() {
    const theme = useTheme();
    const Map = useMemo(
        () =>
            dynamic(() => import("@/components/Map"), {
                loading: () => <p>A map is loading</p>,
                ssr: false,
            }),
        []
    );
    return (
        <>
            <Box
                sx={{
                    flexGrow: 1,
                    padding: theme.spacing(3),
                    background:
                        "url(/background-image.jpg) center / cover no-repeat",
                    minHeight: "100vh",
                }}
            >
                <AreaInfo />
                <Grid
                    container
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={2}
                    sx={{
                        marginTop: theme.spacing(5),
                        padding: theme.spacing(3),
                        background: "rgba(255, 255, 255, 0.7)",
                        borderRadius: "15px",
                        backdropFilter: "blur(10px)",
                    }}
                >
                    {[
                        { icon: RestaurantIcon, text: "Restaurant" },
                        { icon: WifiIcon, text: "Free WiFi" },
                        { icon: LocalParkingIcon, text: "Parking" },
                    ].map((feature, index) => (
                        <Grid item key={index} xs={12} sm={4}>
                            <FeaturePaper elevation={3}>
                                <FeatureIcon>
                                    <feature.icon
                                        fontSize="large"
                                        color="primary"
                                    />
                                    <Typography variant="h6">
                                        {feature.text}
                                    </Typography>
                                </FeatureIcon>
                            </FeaturePaper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <div className="flex align-center justify-center">
                <Map />
            </div>
        </>
    );
}
