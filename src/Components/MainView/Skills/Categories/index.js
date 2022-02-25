import { Box, Typography } from "@material-ui/core"

import "aos/dist/aos.css";
import { useStyles } from "./style"
import Currently from "./Current"
import Interest from "./Interesting"
import { useEffect, useState } from "react";

const Category = ({ name, data, turn }) => {
    const classes = useStyles()
    const [show, setShow] = useState(false)

    useEffect(() => {
        setTimeout(() => setShow(true), 1000 * turn)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const render = () => {
        return (
            <Box data-aos='fade-in' className={classes.category}>
                <Typography variant="h5" className={classes.title}>{name}</Typography>
                <Box className={classes.skills_container}>
                    <Currently skills={data.currently}/>
                    {data.interesting.length !== 0 && <Interest skills={data.interesting}/>}
                </Box>
            </Box>
        )
    }

    return (
        <>
            {show ? render() : <div style={{ height: 150 }}></div>}
        </>
    )
}

export default Category