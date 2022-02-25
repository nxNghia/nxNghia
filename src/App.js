import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Navbar from "./Components/Navbar";
import MainView from "./Components/MainView"
import Footer from "./Components/Footer";
import AOS from "aos";

const useStyles = makeStyles(() => ({
    root: {
        background: 'inherit',
        paddingLeft: 30,
        paddingRight: 30
    },
    root_smaller: {
        background: 'inherit'
    }
}))

const App = () => {
    const classes = useStyles()
    const [pageIndex, setPageIndex] = useState(0)
    const limit = useMediaQuery({ maxWidth: 1098 })

    useEffect(() => {
        AOS.init({
            duration: 1500
        })
    })

    return (
        <Box className={limit ? classes.root_smaller : classes.root}>
            <Navbar pageIndex={pageIndex} setPageIndex={setPageIndex}/>
            <MainView pageIndex={pageIndex}/>
            <Footer/>
        </Box>
    )
}

export default App;
