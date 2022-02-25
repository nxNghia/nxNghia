import { Box } from "@material-ui/core";

import { useStyles } from "./style";
import Category from "./Categories";
import { languages, framework, database, other } from "./Items/data";

const Skills = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Category name="Language" data={languages} turn={0}/>
            <Category name="Framework / Library" data={framework} turn={1}/>
            <Category name="Database" data={database} turn={2}/>
            <Category name="Other" data={other} turn={3}/>
        </Box>
    )
}

export default Skills