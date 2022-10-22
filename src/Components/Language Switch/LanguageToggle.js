import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

import IT from "./Italiano.svg";
import GB from "./English.svg";

const LanguageSwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
        margin: 1,
        padding: 0,
        transform: "translateX(6px)",
        "&.Mui-checked": {
            color: "#FFF",
            transform: "translateX(22px)",
            "& .MuiSwitch-thumb:before": {
                backgroundImage: `url(${IT})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition:
                    "center" /*, height:20, width:20, viewBox:0 0 20 20*/,
            },
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
            },
        },
    },
    "& .MuiSwitch-thumb": {
        backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#FFF",
        // backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        "&:before": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            backgroundImage: `url(${GB})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
        },
    },
    "& .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        borderRadius: 20 / 2,
    },
}));

export default LanguageSwitch;