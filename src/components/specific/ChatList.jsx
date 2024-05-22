import React from "react";
import { Stack } from "@mui/material";
import ChatItem from "../shared/ChatItem";
import { bgGradient } from "../../constants/color";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <Stack
      width={w}
      direction={"column"}
      overflow={"auto"}
      height={"100%"}
      sx={{ backgroundImage: bgGradient }}
    >
      {chats?.map((data, index) => {
        const { avatar, _id, name, groupChat, members } = data;
        const newMessageAlert = newMessagesAlert.find(
          ({ chatId }) => chatId === _id
        );

        const isOnline = members?.some((member) => onlineUsers.includes(_id));
        return (
          <ChatItem
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            key={_id}
            _id={_id}
            name={name}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleDeleteChat={handleDeleteChat}
            index={index}
          />
        );
      })}
    </Stack>
  );
};
export default ChatList;
