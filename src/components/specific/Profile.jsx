import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import moment from "moment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FaceIcon from "@mui/icons-material/Face";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"My Bio"} />
      <ProfileCard
        heading={"Username"}
        text={"Parag13"}
        Icon={<AlternateEmailIcon />}
      />
      <ProfileCard
        heading={"Name"}
        text={"Parag Bhaskar Bariye"}
        Icon={<FaceIcon />}
      />
      <ProfileCard
        heading={"Joined"}
        text={moment("2024-03-03T18:30:00.000Z").fromNow()}
        Icon={<CalendarMonthIcon />}
      />
    </Stack>
  );
};
const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography variant="caption" color={"gray"}>
        {heading}
      </Typography>
    </Stack>
  </Stack>
);
export default Profile;
