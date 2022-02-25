import {ReactComponent as Fb} from '../../../../Assets/Facebook.svg'
import {ReactComponent as Ins} from '../../../../Assets/Instagram.svg'
import {ReactComponent as Github} from '../../../../Assets/Github.svg'
import {ReactComponent as Gmail} from '../../../../Assets/Gmail.svg'
import { Box } from '@material-ui/core'
import { useStyles } from './style'


const Contact = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <a href='https://www.facebook.com/nguyenxuan.nghia.50/'><Fb width={50} height={50}/></a>
            <a href='https://www.instagram.com/nxnghiax/?hl=vi'><Ins width={50} height={50}/></a>
            <a href='https://github.com/nxNghia'><Github width={50} height={50}/></a>
            <a href='mailto:nghia141999@gmail.com'><Gmail width={55} height={55}/></a>
        </Box>
    )
}

export default Contact