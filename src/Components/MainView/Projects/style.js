import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    root: {
        paddingLeft: 40,
        paddingRight: 40,
        marginTop: 150,
        marginBottom: 150,
        minHeight: 550
    },
    root_smaller: {
        marginTop: 150,
        marginBottom: 150
    },
    projects: {
        minHeight: 550,
    },
    projects_container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    button_container: {
        textAlign: 'center',
        marginTop: 50
    }
}))