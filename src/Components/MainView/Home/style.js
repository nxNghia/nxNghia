import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    root: {
        width: '80%',
        margin: 'auto',
        marginTop: 100,
        marginBottom: 150
    },
    me_image: {
        borderRadius: '50%',
        width: 'auto',
        height: '100%'
    },
    image_container: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center'
    },
    basic_info: {
        display: 'flex',
        height: '50%',
        '& li': {
            fontSize: 'x-large',
            marginBottom: 20
        }
    },
    basic_info_smaller: {
        '& li': {
            fontSize: 'x-large',
            marginBottom: 20
        }
    },
    basic_info_name: {
        flexGrow: 1,
        '& h5': {
            fontSize: 50
        }
    },
    quote: {
        marginTop: 150,
        textAlign: 'center',
        margin: 'auto',
        width: '60%',
        fontStyle: 'italic'
    },
    quote_smaller: {
        marginTop: 150,
        textAlign: 'center',
        margin: 'auto',
        fontStyle: 'italic'
    }
}))