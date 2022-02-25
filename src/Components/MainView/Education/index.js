import { Box } from "@material-ui/core"
import { useMediaQuery } from 'react-responsive'
import "aos/dist/aos.css";

import { data } from "./data"
import School from "./School"
import { useStyles } from "./style"

const Education = () => {
    const classes = useStyles()
    const limit = useMediaQuery({maxWidth: 1098})

    return (
        <Box className={limit ? classes.root_smaller : classes.root}>
            {data.map((item, index) => <School key={index} item={item} turn={index}/>)}
        </Box>
    )
}

export default Education