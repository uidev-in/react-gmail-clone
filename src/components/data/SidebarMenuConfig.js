import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import LabelIcon from "@mui/icons-material/Label";

const sidebarConfig = [
  {
    icon: <InboxOutlinedIcon />,
    title: "Inbox",
  },
  {
    icon: <StarBorderOutlinedIcon />,
    title: "Starred",
  },
  {
    icon: <AccessTimeOutlinedIcon />,
    title: "Snoozed",
  },
  {
    icon: <SendOutlinedIcon />,
    title: "Sent",
  },
  {
    icon: <InsertDriveFileOutlinedIcon />,
    title: "Drafts",
  },
  {
    icon: <LabelIcon />,
    title: "Main",
  },
];

export default sidebarConfig;
