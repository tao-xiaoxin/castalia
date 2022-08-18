import {LayoutPage} from "../typing";
import {Box, HStack} from "@chakra-ui/react";
import Sider from "src/components/sider";
import Content from "src/components/content";
import ContentTop from "src/components/contentTop";

const Home: LayoutPage = () => {
    return (
        <Box>
            <ContentTop description="好在精选，乐于分享" />
            <HStack
                alignItems="start"
                columnGap="15px"
                pt="20px"
            >
                <Sider />
                <Content />
            </HStack>
        </Box>
    );
};

export default Home;
