import { Menu } from "@mui/material";
import React from "react";

const FileMenu = ({ anchorE1 }) => {
  return (
    <Menu anchorEl={anchorE1} open={false}>
      <div style={{ width: "10rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut
        minima fugit, voluptatem itaque enim ea ipsam esse veritatis architecto.
      </div>
    </Menu>
  );
};

export default FileMenu;
