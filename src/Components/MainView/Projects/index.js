import { Box, Button } from "@material-ui/core"
import { useMediaQuery } from 'react-responsive'

import { data } from "./data"
import Project from "./Project"
import { useStyles } from "./style"

const Projects = () => {
    const classes = useStyles()
    const limit = useMediaQuery({maxWidth: 1098})

    return (
        <Box className={limit ? classes.root_smaller : classes.root}>
            <Box className={classes.projects}>
                <Box className={classes.projects_container}>
                    {data.map((item, index) => <Project key={index} data={item} turn={index}/>)}
                </Box>
            </Box>
            <Box className={classes.button_container}>
                <Button color="secondary" variant="contained" size="large" onClick={() => window.open("https://github.com/nxNghia?tab=repositories", "_blank")}>View more projects</Button>
            </Box>
        </Box>
    )
}

export default Projects