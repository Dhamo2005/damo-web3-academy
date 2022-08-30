import Head from "next/head";
import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import { Box, Stack } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Home Page | Damo Softwares</title>
      </Head>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}
