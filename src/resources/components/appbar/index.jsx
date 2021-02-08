// ((======= core import ========= ))
import React, {useEffect, useState} from 'react';

// ((======= library import ========= ))
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcons from '@material-ui/icons/HomeOutlined';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Hidden from '@material-ui/core/Hidden';
import { useHistory } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
// ((======= custom import ========= ))
import RoutePath from "../../../config/route-path";
import word from "../../language/word";
import AuthService from "../../../services/auth/service";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontFamily : "Koulen",
        letterSpacing : "1px",
        cursor : "pointer"
    },
    toolbarMargin : theme.mixins.toolbar,
    menuItem : {
        fontFamily : "Kh-Battambang",
    }
}));

export default function AppBarComponent() {
    const classes = useStyles();
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [ profile  ] = useState(AuthService.profile);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLogout = (  ) => {
        AuthService.logout();
        history.push(RoutePath.login);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const redirectHome = () => {
        history.push( RoutePath.home );
    }

    useEffect(() => {

    });

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Hidden smDown>
                        <IconButton onClick={ redirectHome } edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <HomeIcons/>
                        </IconButton>
                    </Hidden>
                    <Typography variant="h6" className={classes.title} onClick={redirectHome}>
                        { word.appbar_label }
                    </Typography>
                    <div>
                        <span className="avatar-name">{ profile.name }</span>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <Avatar alt="Remy Sharp" src="https://scontent.fpnh20-1.fna.fbcdn.net/v/t1.0-9/74682733_822188741529250_8914386690806644736_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEBjl9BeUxbSigIU1B50IWFiWnT54EllTGJadPngSWVMfJpF0y9wjk4KVnwNvVxHk5Rm7UJGOWUpO0CYzVZV1Mt&_nc_ohc=oNlGZhEJJxwAX-l90bE&_nc_ht=scontent.fpnh20-1.fna&oh=748fdafa21ca54af8f95cdce6ad3ec5e&oe=602227DD" />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem className={classes.menuItem} onClick={handleClose}>
                                <PersonOutlinedIcon/>{ word.profile }
                            </MenuItem>
                            <Divider/>
                            <MenuItem className={classes.menuItem} onClick={handleLogout}>
                                <ExitToAppIcon/>{ word.logout }
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin}/>
        </div>
    );
}
