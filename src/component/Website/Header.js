import { AppBar, Button, Container, Hidden, IconButton, List, ListItem, ListItemText, makeStyles, Toolbar, Fab, Grid, Typography, createMuiTheme, ThemeProvider, Divider, Icon, ListItemIcon, Menu, MenuItem, Avatar, Box, ListItemSecondaryAction, FormControl, InputLabel, OutlinedInput, InputAdornment, useMediaQuery, Dialog, DialogTitle, DialogContent, TextField, DialogActions, DialogContentText } from "@material-ui/core";
import { Home, KeyboardArrowUp } from "@material-ui/icons";
import HideOnScroll from "./HideOnScroll";
import SideDrawer from "./SideDrawer";
import BackToTop from "./BackToTop";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useState } from "react";
import fullFace from '../../images/fullface.png'
import modular from '../../images/modular.png'
import halfFace from '../../images/halfface.png'
import search from '../../images/search.png';
import cart from '../../images/cart.png';
import user from '../../images/user.png';
import { withStyles } from "@material-ui/styles";
  
const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Montserrat',
    ].join(','),
    fontSize:'12px'
    },
    overrides:{
        MuiListItemIcon:{
            root:{
                minWidth:'0px'
            }
        },
        MuiListItem:{
            root:{
                width:''
            },
            gutters:{
                paddingRight:'10px',
                paddingLeft:'10px'
            }
        },
    }
});

const ContinueButton = withStyles((theme) => ({
    root:{
        backgroundColor:'#ff4f37',
        color:'#fff',
        borderRadius:'.5rem',
        boxShadow:'1px 1px 5px #585858',
        '&:hover':{
            backgroundColor:'#f5422a',
        }
    }
}))(Button);
  const useStyles = makeStyles({
    themeColor:{
        color: '#ff4f37'
    },
    navTitle:{
        fontSize:'25px',
        fontWeight:'bold',
        color:'#ff4f37',
    },
    navbarDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`
    },
    navListDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`
    },
    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `white`
    },
    white:{
        backgroundColor:'#fff',
        color:'#585858'
    },
    navIcons:{
        height:'20px',
        width:'20px'
    }
  });
  
  const Header = () => {
    const isMobile = useMediaQuery("(max-width: 940px)");
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null)
    const [open, setOpen] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const dialogHandler = () => {
        setOpen(!open)
    }
    const cartHandler = () => {
        setOpenCart(!openCart)
    }
    const dialogClose = () => {
        setOpen(false)
    }
    const cartClose = () => {
        setOpenCart(false)
    }
    return (
      <>
      <ThemeProvider theme={theme}>
        <HideOnScroll>
          <AppBar position="fixed" className={classes.white}>
            <Toolbar component="nav">
              <Grid container justify="space-between">
                
                    <Button className={classes.navTitle}>EVNX.</Button>
               
                <Hidden mdDown>
                  <List
                    component="nav"
                    className={classes.navListDisplayFlex}
                  >
                        <ListItem button>
                            <ListItemText primary="HOME"/>
                        </ListItem>
                        <Divider orientation="vertical" variant="middle"/>
                        <ListItem button>
                            <ListItemText primary="BLOG"/>
                        </ListItem>
                        <Divider orientation="vertical" variant="middle"/>
                        <ListItem button onClick={handleClick}>
                        <ListItemText primary="CATEGORY"/>
                            <ListItemIcon><ArrowDropDownIcon className={classes.themeColor} /></ListItemIcon>
                        </ListItem>
                        <Menu
                          anchorEl={anchorEl}
                        //   keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                            <MenuItem onClick={()=>handleClose()}>
                                <List>
                                    <ListItem>
                                        <Box mr={3}>
                                            <ListItemIcon><Avatar src={fullFace}/></ListItemIcon>
                                        </Box>
                                    <ListItemText primary={`FULL FACE HELMET`}/>
                                    </ListItem>
                                </List>
                            </MenuItem>
                            <MenuItem onClick={()=>handleClose()}>
                                <List>
                                    <ListItem>
                                        <Box mr={3}>
                                            <ListItemIcon><Avatar src={modular}/></ListItemIcon>
                                        </Box>
                                    <ListItemText primary={`MODULAR HELMET`}/>
                                    </ListItem>
                                </List>
                            </MenuItem>
                            <MenuItem onClick={()=>handleClose()}>
                                <List>
                                    <ListItem>
                                        <Box mr={3}>
                                            <ListItemIcon><Avatar src={halfFace}/></ListItemIcon>
                                        </Box>
                                    <ListItemText primary={`HALF FACE HELMET`}/>
                                    </ListItem>
                                </List>
                            </MenuItem>
                        </Menu>
                        <Divider orientation="vertical" variant="middle"/>
                        <ListItem button>
                        <ListItemText primary="CONTACTS"/>
                        </ListItem>
                  </List>
                </Hidden>
               <Hidden xsDown>
                <List
                    component="nav"
                    className={classes.navListDisplayFlex}
                >
                        <Hidden smDown>
                            <ListItem button onClick={handleClick}>
                            <ListItemText primary="USD"/>
                                <ListItemIcon><ArrowDropDownIcon className={classes.themeColor} /></ListItemIcon>
                            </ListItem>
                        </Hidden>
                        <ListItem>
                            <FormControl fullWidth size="small" variant="outlined">
                                <InputLabel>SEARCH</InputLabel>
                                <OutlinedInput name="receiver" label="SEARCH"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Avatar className={classes.navIcons} src={search}/>
                                    </InputAdornment>
                                }/>
                            </FormControl>
                        </ListItem>
                        <ListItem button>
                            <Avatar variant="square" className={classes.navIcons} src={cart}/>
                        </ListItem>
                        <ListItem button>
                            <Avatar variant="square" className={classes.navIcons} src={user}/>
                        </ListItem>
                        <Hidden mdUp>
                            <ListItem button>
                                <SideDrawer/>
                            </ListItem>
                        </Hidden>
                    </List>
                </Hidden>
                <Hidden smUp>
                    <List className={classes.navListDisplayFlex}>
                        <ListItem onClick={dialogHandler}>
                            <IconButton>
                                <Avatar variant="square" className={classes.navIcons} src={search}/>
                            </IconButton>
                        </ListItem>
                        <ListItem onClick={cartHandler}>
                            <IconButton>
                                <Avatar variant="square" className={classes.navIcons} src={cart}/>
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <SideDrawer/>
                        </ListItem>
                    </List>
                    <Dialog open={open} onClose={dialogClose} fullWidth={true} maxWidth="sm" disableBackdropClick disableEscapeKeyDown>
                        <DialogTitle>Search</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Search helmet brands.."
                                type="text"
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={dialogClose}>Cancel</Button>
                            <Button onClick={dialogClose}>Search</Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog open={openCart} onClose={cartClose} fullWidth={true} maxWidth="sm" disableBackdropClick disableEscapeKeyDown>
                        <DialogTitle>Cart Items</DialogTitle>
                        <DialogContent>
                            <Grid container justify="center">
                                <Box mt={5} mb={5}>
                                    <DialogContentText>
                                            Oopss.. there are no items in this cart yet!
                                    </DialogContentText>
                                </Box>
                                <Box mb={3}>
                                    <ContinueButton onClick={cartClose} variant="contained">Continue Shopping</ContinueButton>
                                </Box>
                            </Grid>
                        </DialogContent>
                    </Dialog>
                </Hidden>
              </Grid>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar id="back-to-top-anchor" />
        <BackToTop>
          <Fab color="secondary" size="large" aria-label="scroll back to top">
            <KeyboardArrowUp />
          </Fab>
        </BackToTop>
        </ThemeProvider>
      </>
    );
  };
  
  export default Header;
  