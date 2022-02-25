import { AppBar, Box, Toolbar, Typography, Button, IconButton, Drawer } from "@material-ui/core"
import { useMediaQuery } from 'react-responsive'
import MenuIcon from '@material-ui/icons/Menu';

import { data } from "./data"
import { useStyles } from "./style"
import { useState } from "react";

const Navbar = ({ pageIndex, setPageIndex }) => {
    const classes = useStyles()
    const limit = useMediaQuery({maxWidth: 1098})
    const [anchor, setAnchor] = useState(false)

    const switchPageHandle = (index) => {
        setPageIndex(index)
        setAnchor(false)
    }

    return (
        <AppBar className={classes.root} position='static'>
            <Toolbar>
                <Typography variant="h5" className={classes.pageTitle}>
                    {data.pageTitle}
                </Typography>
                {!limit ? <Box className={classes.indexContainer}>
                    {data.index.map((item, index) => (
                        <Button
                            key={index}
                            className={index === pageIndex ? classes.pageIndex_active : classes.pageIndex}
                            onClick={() => switchPageHandle(index)}
                        >
                            {item.name}
                        </Button>
                    ))}
                </Box> : 
                <IconButton onClick={() => setAnchor(true)}>
                    <MenuIcon />
                </IconButton>}
            </Toolbar>
            {limit && <Drawer anchor="top" open={anchor} onClose={() => setAnchor(false)}>
                {data.index.map((item, index) => (
                        <Button
                            key={index}
                            className={index === pageIndex ? classes.pageIndex_active_smaller : classes.pageIndex_smaller}
                            onClick={() => switchPageHandle(index)}
                        >
                            {item.name}
                        </Button>
                    ))}
                </Drawer>}
        </AppBar>
    )
}

export default Navbar