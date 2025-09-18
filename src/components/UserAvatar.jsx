import * as React from "react";
import { Avatar, Typography, Box } from "@mui/material";


export default function UserAvatar() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
            }}
        >
            <Avatar
                alt="Esteban"
                src="/night.jpg"
                sx={{ width: 240, height: 240 }}
            />
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                ESTEBAN, Jerome
            </Typography>
            <Typography variant="body1">Full-Stack Developer</Typography>
        </Box>
    );
}
