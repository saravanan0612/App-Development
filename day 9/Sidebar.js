// Sidebar.js
import React from "react";
import { Box, Drawer, Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RedeemSharpIcon from "@mui/icons-material/RedeemSharp";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Sidebar = () => {
  const drawerWidth = "250px";

  return (
    <div className="sidebar">
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "rgb(49, 49, 48)",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", color: "white" }}>
          <List>
            {[
              {
                text: "Dashboard",
                icon: <DashboardIcon sx={{ color: "white" }} />,
              },
              {
                text: "Volunteers",
                icon: <HomeIcon sx={{ color: "white" }} />,
                route: "/home",
              },
              {
                text: "Users",
                icon: <RedeemSharpIcon sx={{ color: "white" }} />,
                route: "/user",
              },
              {
                text: "Analytics",
                icon: <AccountCircleRoundedIcon sx={{ color: "white" }} />,
              },
            ].map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Sidebar;
