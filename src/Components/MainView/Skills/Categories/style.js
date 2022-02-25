import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    category: {
        marginLeft: 30,
        marginBottom: 40,
        minHeight: 150
    },
    skills_container: {
        marginBottom: 20,
        paddingLeft: 30,
        paddingTop: 10,
        borderTop: '2px solid #555',
        minHeight: 100,
        '& > div': {
            marginBottom: 20
        }
    },
    title: {
        fontSize: 'xx-large',
        marginBottom: 10
    }
}))