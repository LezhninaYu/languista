import React, {useContext, useMemo, useState} from 'react';
import checkMobile from "helpers/checkMobile";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link, useNavigate} from "react-router-dom";
import {ROUTES} from "routes";
import Button from "@mui/material/Button";
import {Menu, MenuItem} from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import AppContext from "context/AppContext";
import './AppHeader.css'

const AppHeader = () => {
    let navigate = useNavigate()
    const isMobile = useMemo(checkMobile, []);
    const {setState} = useContext(AppContext)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleEngRus = () => {
        setAnchorEl(null);
        setState(true)

    };
    const handleRusEng = () => {
        setAnchorEl(null);
        setState(false)

    };

    const handleCourse = () => {
        setAnchorEl(null);
        navigate(ROUTES.course)
    }

    const handleDictaphone = () => {
        setAnchorEl(null);
        navigate(ROUTES.dictaphone)
    }
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to={ROUTES.main} className='nav'>
                        <LanguageIcon sx={{mr: 2, display: {xs: 'flex', md: 'flex'}}}/>
                    </Link>
                    <Link to={ROUTES.words} className='nav'> <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        data-testid="words"
                        sx={{mr: isMobile ? 1 : 2, display: {xs: 'flex', md: 'flex'}}}
                    >
                        Words
                    </Typography></Link>
                    <Link to={ROUTES.phrases} className='nav'> <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        data-testid="phrases"
                        sx={{mr: isMobile ? 1 : 2, display: {xs: 'flex', md: 'flex'}}}
                    >
                        Phrases
                    </Typography></Link>
                    <Link to={ROUTES.profile} className='nav'> <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        data-testid="profile"
                        sx={{mr: 2, display: {xs: 'flex', md: 'flex'}}}
                    >
                        Profile
                    </Typography></Link>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        variant='contained'
                    >
                        Change
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleEngRus}>Eng-Rus</MenuItem>
                        <MenuItem onClick={handleRusEng}>Rus-Eng</MenuItem>
                        <MenuItem onClick={handleCourse}>Course</MenuItem>
                        <MenuItem onClick={handleDictaphone}>Dictaphone</MenuItem>
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    )
};

export default AppHeader
