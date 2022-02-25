import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    root: {
        background: 'inherit',
        boxShadow: 'none',
        height: 100,
        paddingTop: 20
    },
    pageTitle: {
        color: '#000',
        flexGrow: 1,
        fontSize: '50px',
        cursor: 'pointer',
        fontWeight: 'bold'
    },
    pageIndex: {
        color: '#000',
        padding: 15,
        width: 100
    },
    pageIndex_active: {
        color: '#000',
        padding: 15,
        width: 100,
        background: 'rgba(200, 200, 200, 0.5)',
    },
    pageIndex_smaller: {
        color: '#000',
        padding: 15,
        width: '100%',
    },
    pageIndex_active_smaller: {
        color: '#000',
        padding: 15,
        width: '100%',
        background: 'rgba(200, 200, 200, 0.5)',
    },
    indexContainer: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'space-around'
    }
}))