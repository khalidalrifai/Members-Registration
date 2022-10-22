import React from "react";
import { Box } from "./FooterStyles";
import { BsHeartFill } from "react-icons/bs";
import { SiRobotframework } from "react-icons/si";

const Footer = () => {
    return (
        <Box>
            <h2 style={{ color: "white", textAlign: "center", fontSize: "15px" }}>
                Made With <BsHeartFill color="red" /> by AEA{" "}
                <SiRobotframework color="orange" />
            </h2>
        </Box>
    );
};
export default Footer;