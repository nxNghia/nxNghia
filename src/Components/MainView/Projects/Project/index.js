import { Box, Chip, Typography } from "@material-ui/core"
import { useMediaQuery } from 'react-responsive'
import "aos/dist/aos.css";

import { useStyles } from "./style"
import { useEffect, useState } from "react";

const Project = ({ data, turn }) => {
    const classes = useStyles()
    const limit = useMediaQuery({maxWidth: 1098})
    const [show, setShow] = useState(false)

    useEffect(() => {
        setTimeout(() => setShow(true), 1000 * turn)        
    })

    const render = () => {
        return (
            <Box data-aos='fade-in' className={limit ? classes.root_smaller : classes.root} onClick={() => window.open(data.url, "_blank")}>
                <Typography variant="h5" className={classes.title}>{data.title}</Typography>
                <Typography className={classes.describe}>{data.describe}</Typography>
                {data.includes.map((item, index) => <Chip className={classes.chip} style={{background: item.color, color: item.font}} key={index} label={item.title} />)}
            </Box>
        )
    }

    return (
        <>
            {show ? render() : <div style={{height: 150}}></div>}
        </>
    )
}

export default Project