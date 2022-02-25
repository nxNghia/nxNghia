import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        marginTop: 40,
        '& > a': {
            marginLeft: 10,
            marginRight: 10,
            color: '#000'
        }
    }
}))