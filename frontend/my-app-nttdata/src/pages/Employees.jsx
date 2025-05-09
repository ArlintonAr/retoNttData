import { Box } from "@chakra-ui/react";
import Dashboard from "../components/empComponents/Dashboard";


const DashboardPage = () =>{

    return (
        <>
            <Box className="content-page-employee" width="100%" height="100vh" display="flex" gap="1rem">
                <Box className="content-dashboard"  width="100%" height="100vh" >
                    <Dashboard></Dashboard>
                </Box>
            </Box>
        </>
        
    )


}
export default DashboardPage;