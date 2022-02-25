import { Box, Typography } from "@material-ui/core"
import { useMediaQuery } from 'react-responsive'
import { useEffect, useState } from "react"
import "aos/dist/aos.css";

import { useStyles } from "./style"

const School = ({ item, turn = 0 }) => {
    const classes = useStyles()
    const limit = useMediaQuery({maxWidth: 1098})
    const [show, setShow] = useState(false)

    useEffect(() => {
        setTimeout(() => setShow(true), turn * 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const render = () => {
        return (
            <Box data-aos='fade-right' className={classes.root} onClick={() => window.open(item.url, '_blank')}>
                {!limit && <Box className={classes.img}>
                    <img height={200} src={item.imageURL} alt='school'/>
                </Box>}
                <Box className={classes.info}>
                    <Box className={classes.upper_info} style={{background: item.titleColor, color: item.color[0]}}>
                        <Typography variant="h5">{item.title}</Typography>
                        {item.major && <Typography variant="h6">{item.major}</Typography>}
                        {!limit && <Typography className={classes.time}>{item.time}</Typography>}
                    </Box>
                    <Box className={classes.lower_info} style={{color: item.color[1]}}>
                        <ul>
                            {item.detail.map((line, index) => <li key={index}>{line}</li>)}
                        </ul>
                    </Box>
                </Box>
            </Box>
        )
    }

    return (
        <>
            {show ? render() : <div style={{height: '215px'}}></div>}
        </>
    )
}

export default School