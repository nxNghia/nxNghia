import { Box, Typography } from "@material-ui/core"
import Item from "../../Items"

const Interest = ({ skills }) => {
    return (
        <Box>
            <Typography variant="h6">Currently interesting:</Typography>
            {skills.map((skill, index) => <Item key={index} data={skill} />)}
        </Box>
    )
}

export default Interest