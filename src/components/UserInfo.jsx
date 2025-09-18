import * as React from "react";
import PropTypes from "prop-types";
import { Box, Chip, Divider, Rating, Stack, Tab, Tabs, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MaleIcon from "@mui/icons-material/Male";

const skills = [
    "HTML",
    "CSS",
    "TailWindCSS",
    "JavaScript",
    "TypeScript",
    "C++",
    "C#",
    "Java",
    "Python",
    "React",
    "Angular",
    "SpringBoot",
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "Figma",
    "Canva",
    "Adobe Photoshop",
    "Microsoft Suite",
    "Valorant",
    "Bot Fragger",
    "League of Legends",
    "Hardstuck Silver"
];



function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{
                    p: 3,
                    minHeight: '200px',
                    width: '100%'
                }}>
                    {children}
                </Box>
            )}
        </div>
    );
}


CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}


export default function UserInfo() {
    const handleClick = () => {
        console.info("You clicked the Chip.");
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{
            maxWidth: { xs: '100%', sm: '600px', md: '800px' },
            width: '100%',
            mx: 'auto',
            p: { xs: 2, sm: 3 },
            display: 'flex',
            flexDirection: 'column',
            minHeight: '500px'
        }}>
            {/* Personal Info Section */}
            <Box sx={{
                flex: '0 0 30%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', sm: 'flex-start' },
                gap: 1,
                mb: 2
            }}>
                <Typography variant="h4" sx={{
                    fontWeight: "bold",
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontSize: { xs: '1.5rem', sm: '2rem' }
                }}>
                    ESTEBAN
                    <LocationOnIcon sx={{ color: "red" }} fontSize="large" />
                    Bulacan
                </Typography>
                <Typography variant="body1">Full-Stack Developer</Typography>
                <Rating name="read-only" value={10} max={10} readOnly />
            </Box>

            <Divider sx={{ mb: 2 }} />

            {/* Tab Panel Section */}
            <Box sx={{
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 0
            }}>
                <Box sx={{
                    borderColor: "divider",
                    mb: 2
                }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        variant="fullWidth"
                    >
                        <Tab label="About" {...a11yProps(0)} />
                        <Tab label="Skills" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <Box sx={{ flex: 1, overflow: 'auto' }}>
                    <CustomTabPanel value={value} index={0}>
                        <Stack spacing={2}>
                            <Typography variant="body1">Address: Plaridel, Bulacan</Typography>
                            <Typography variant="body1">Phone: 0949-923-1074</Typography>
                            <Typography variant="body1">Email: jerome.esteban.r@gmail.com</Typography>
                            <Typography variant="body1">Birthday: September 5, 1999</Typography>
                            <Typography variant="body1" sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            }}>
                                Gender: <MaleIcon />
                            </Typography>
                        </Stack>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <Stack
                                direction="row"
                                spacing={1}
                                flexWrap="wrap"
                                useFlexGap
                                sx={{
                                    maxWidth: '100%',
                                    justifyContent: 'center',
                                    gap: 1
                                }}
                            >
                                {skills.map((skill) => (
                                    <Chip
                                        key={skill}
                                        label={skill}
                                        onClick={handleClick}
                                    />
                                ))}
                            </Stack>
                        </Box>
                    </CustomTabPanel>
                </Box>
            </Box>
        </Box>
    );
}
