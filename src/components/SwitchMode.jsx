import { Switch, Box } from "@mui/material";
import SunnyIcon from "@mui/icons-material/Sunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useColorScheme } from "@mui/material/styles";

export default function SwitchMode() {
    const { mode, setMode } = useColorScheme();


    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SunnyIcon />
            <Switch
                checked={mode === "dark"}
                onChange={() => setMode(event.target.checked ? "dark" : "light")}
            />
            <DarkModeIcon />
        </Box>
    );
}
