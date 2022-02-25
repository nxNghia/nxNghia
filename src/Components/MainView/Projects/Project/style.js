import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    root: {
        width: '45%',
        cursor: 'pointer',
        background: '#fff',
        marginBottom: 30,
        padding: 20,
        boxShadow: "1px 2px 5px",
        borderRadius: 10,
        '&:hover': {
            boxShadow: "1px 5px 5px",
            background: '#313131',
            color: '#fff'
        },
        transition: 'box-shadow 250ms, background 250ms, color 250ms',
        minHeight: 150
    },
    root_smaller: {
        width: '80%',
        cursor: 'pointer',
        background: '#fff',
        marginBottom: 30,
        padding: 20,
        boxShadow: "1px 2px 5px",
        borderRadius: 10,
        '&:hover': {
            boxShadow: "1px 5px 5px",
            background: '#313131',
            color: '#fff'
        },
        transition: 'box-shadow 250ms, background 250ms, color 250ms'
    },
    chip: {
        marginLeft: 10,
        fontWeight: 'bold',
        border: '1px solid #fff'
    },
    title: {
        fontSize: 'xx-large',
        marginBottom: 10
    },
    describe: {
        fontSize: 'x-large',
        marginBottom: 20
    }
}))