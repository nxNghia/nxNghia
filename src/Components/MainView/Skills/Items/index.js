import { useStyles } from "./style"

const Item = ({ data }) => {
    const classes = useStyles()

    return (
        <img className={classes.skill_tag} height={50} src={data} alt='tag'/>
    )
}

export default Item