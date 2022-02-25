import { Box } from "@material-ui/core"
import Item from "../../Items"

const Currently = ({ skills }) => {
    return (
        <Box>
            {skills.map((skill, index) => <Item key={index} data={skill} />)}
        </Box>
    )
}

export default Currently