import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        marginBottom: 70,
        cursor: 'pointer'
    },
    img: {
        width: 250,
        marginRight: 50
    },
    info: {
        background: '#FFFFFF',
        width: '100%',
        boxSizing: 'border-box',
        boxShadow: '1px 5px 5px',
        borderRadius: 15
    },
    upper_info: {
        position: 'relative',
        borderRadius: "15px 15px 0px 0px",
        boxSizing: 'border-box',
        padding: 20,
        '& > h5': {
            fontWeight: 'bold'
        }
    },
    lower_info: {
        fontSize: 'large',
        paddingTop: 15,
        boxSizing: 'border-box',
        '& li': {
            marginBottom: 15
        }
    },
    time: {
        position: 'absolute',
        top: 20,
        right: 40
    }
}))