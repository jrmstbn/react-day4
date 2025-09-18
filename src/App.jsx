import Header from "./components/Header";
import UserAvatar from "./components/UserAvatar";
import UserInfo from "./components/UserInfo";
import { Box } from "@mui/material";

export default function App() {
  return (
    <Box >
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: 'column', md: 'row' },
          height: { xs: 'auto', md: 'calc(100vh - 64px)' },
          minHeight: { xs: 'calc(100vh - 64px)' },
        }}
      >
        <Box
          sx={{
            flex: { xs: '0 0 auto', md: 1 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1.5rem"
          }}
        >
          <UserAvatar />
        </Box>
        <Box
          sx={{
            flex: { xs: '0 0 auto', md: 1 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1.5rem"
          }}
        >
          <UserInfo />
        </Box>
      </Box>
    </Box>
  );
}
