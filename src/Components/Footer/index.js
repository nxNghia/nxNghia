import { Box, Typography } from "@material-ui/core"

import { useStyles } from "./style"

const Footer = () => {
    const classes = useStyles()

    const renderTime = () => {
        const time = new Date()

        const month = time.getMonth() + 1

        return time.getDate() + '/' + month + '/' + time.getFullYear()
    }

    return (
        <Box className={classes.root}>
            <Typography>{renderTime()}</Typography>
            <Typography>{`Make by Nguyen Xuan Nghia 🤘`}</Typography>
        </Box>
    )
}

export default Footer