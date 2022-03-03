import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const AppHeader = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="/"> <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                    >
                        Languista
                    </Typography></Link>
                    <Link to="/profile"> <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                    >
                        Profile
                    </Typography></Link>


                    {/*<Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>*/}
                    {/*    <IconButton*/}
                    {/*        size="large"*/}
                    {/*        aria-label="account of current user"*/}
                    {/*        aria-controls="menu-appbar"*/}
                    {/*        aria-haspopup="true"*/}
                    {/*        onClick={handleOpenNavMenu}*/}
                    {/*        color="inherit"*/}
                    {/*    >*/}
                    {/*        <MenuIcon/>*/}
                    {/*    </IconButton>*/}
                    {/*    <Menu*/}
                    {/*        id="menu-appbar"*/}
                    {/*        anchorEl={anchorElNav}*/}
                    {/*        anchorOrigin={{*/}
                    {/*            vertical: 'bottom',*/}
                    {/*            horizontal: 'left',*/}
                    {/*        }}*/}
                    {/*        keepMounted*/}
                    {/*        transformOrigin={{*/}
                    {/*            vertical: 'top',*/}
                    {/*            horizontal: 'left',*/}
                    {/*        }}*/}
                    {/*        open={Boolean(anchorElNav)}*/}
                    {/*        onClose={handleCloseNavMenu}*/}
                    {/*        sx={{*/}
                    {/*            display: {xs: 'block', md: 'none'},*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        {pages.map((page) => (*/}
                    {/*            <MenuItem key={page} onClick={handleCloseNavMenu}>*/}
                    {/*                <Typography textAlign="center">{page}</Typography>*/}
                    {/*            </MenuItem>*/}
                    {/*        ))}*/}
                    {/*    </Menu>*/}
                    {/*</Box>*/}
                    <Link to="/">
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                    >
                        LOGO
                    </Typography>
                    </Link>
                    <Link to="/profile">
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}
                        >
                            Profile
                        </Typography>
                    </Link>
                    {/*<Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>*/}
                    {/*    {pages.map((page) => (*/}
                    {/*        <Button*/}
                    {/*            key={page}*/}
                    {/*            onClick={handleCloseNavMenu}*/}
                    {/*            sx={{my: 2, color: 'white', display: 'block'}}*/}
                    {/*        >*/}
                    {/*            {page}*/}
                    {/*        </Button>*/}
                    {/*    ))}*/}
                    {/*</Box>*/}

                    {/*<Box sx={{flexGrow: 0}}>*/}
                    {/*    <Tooltip title="Open settings">*/}
                    {/*        <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>*/}
                    {/*            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>*/}
                    {/*        </IconButton>*/}
                    {/*    </Tooltip>*/}
                    {/*    <Menu*/}
                    {/*        sx={{mt: '45px'}}*/}
                    {/*        id="menu-appbar"*/}
                    {/*        anchorEl={anchorElUser}*/}
                    {/*        anchorOrigin={{*/}
                    {/*            vertical: 'top',*/}
                    {/*            horizontal: 'right',*/}
                    {/*        }}*/}
                    {/*        keepMounted*/}
                    {/*        transformOrigin={{*/}
                    {/*            vertical: 'top',*/}
                    {/*            horizontal: 'right',*/}
                    {/*        }}*/}
                    {/*        open={Boolean(anchorElUser)}*/}
                    {/*        onClose={handleCloseUserMenu}*/}
                    {/*    >*/}
                    {/*        {settings.map((setting) => (*/}
                    {/*            <MenuItem key={setting} onClick={handleCloseUserMenu}>*/}
                    {/*                <Typography textAlign="center">{setting}</Typography>*/}
                    {/*            </MenuItem>*/}
                    {/*        ))}*/}
                    {/*    </Menu>*/}
                    {/*</Box>*/}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default AppHeader
