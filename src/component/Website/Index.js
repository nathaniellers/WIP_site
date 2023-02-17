import { Avatar, Button, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Container, createMuiTheme, Divider, Grid, IconButton, Paper, Typography, withStyles, Link, ListItemText, ListItemAvatar, ListItem, List, useMediaQuery, Hidden, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import BG from '../../images/bgOrig.png'
import right from '../../images/right.png'
import left from '../../images/left.png'
import helmet1 from '../../images/helmet1.png'
import helmet2 from '../../images/helmet2.png'
import helmet3 from '../../images/helmet3.png'
import helmet4 from '../../images/helmet4.png'
import blog1 from '../../images/blog1.png'
import blog2 from '../../images/blog2.png'
import blog3 from '../../images/blog3.png'
import Slider from 'react-slick'
import banner from '../../images/banner2.png'
import { Image } from "@material-ui/icons";
import product from '../../images/product.png'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../../App.css'
import { motion } from 'framer-motion'
import { useState } from "react";

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Montserrat',
      ].join(','),
    },
    overrides:{
        MuiAvatar:{
            img:{
                height:'20px',
                width:'20px',
                objectFit:'contain'
            }
        },
        MuiCardMedia:{
            root:{
                backgroundSize:'contain'
            }
        }
    }
})

const blog = createMuiTheme({
    overrides:{
        MuiAvatar:{
            root:{
                height:'100%',
                width:'100%',
                objectFit:'contain'
            },
            img:{
                height:'100%',
                width:'100%'
            }
        },
        MuiListItemText: {
            root:{
                marginTop: 0,
                marginBottom: 0
            },
            multiline:{
                marginTop: 0,
                marginBottom: 0
            }
        }
    }
})

const BuyButton = withStyles((theme) => ({
    root:{
        backgroundColor:'#ff4f37',
        color:'#fff',
        borderRadius:'0px',
        boxShadow:'1px 1px 5px #585858',
        '&:hover':{
            backgroundColor:'#f5422a',
        }
    }
}))(Button);

const InfoButton = withStyles((theme) => ({
    root:{
        backgroundColor:'#fff',
        color:'#595959',
        borderRadius:'0px',
        boxShadow:'1px 1px 5px #585858',
        '&:hover':{
            backgroundColor:'#eaeaea',
        }
    }
}))(Button);

const pageStyles = makeStyles((theme) => ({
    root:{
        width:'100%'
    },
    media:{
        width:'100%',
        height:'400px',
    },
    banner:{
        height:'100%',
        minHeight:"300px",
        width:"100%"
    },
    blog:{
        width:'100%',
        // maxWidth:'400px'
    },
    title:{
        color:'#909090'
    },
    item:{
        backgroundColor:'#f9f9f9',
    },
    themeColor:{
        color:'#ff4f37'
    },
    activeHelmet:{
        // position:'absolute',
        marginTop:'-270px',
        height:'220px',
        width:'250px',
        float:'right',
        marginRight:'-20px'
        // marginLeft:'200px'
    },
    helmet:{
        marginTop:'-160px',
        height:'100px',
        width:'100px',
        float:'right'
    },
    list:{
        height:'200px',
        width:'50%',
        paddingTop:'20px',
        paddingBottom:'20px',
        whiteSpace:'normal'
    },
    list2:{
        height:'150px',
        width:'90%',
        paddingTop:'20px',
        paddingBottom:'20px',
        whiteSpace:'normal'
    },
    name:{
        fontSize:'20px',
        fontWeight:'300'
    },
    nam2:{
        fontSize:'16px',
        fontWeight:'300'
    },
    amount:{
        fontWeight:'bold',
        fontSize:'25px'
    },
    blogDetails:{
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        marginLeft: '10px'
    },
    btnReadmore:{
        color: '#ff4f37',
        textDecoration: 'underline'
    },
    helmet4Banner:{
        width: '100%',
        height: '100%', 
        display: 'flex'
    },
    helmet4:{
        // width: '200px',
        // height:'200px'
    },
    containerPadding:{
        paddingLeft: '100px',
        paddingRight: '100px',
        paddingRop: '100px',
        height: '100%'
    },
    helmet4Container:{
        // height: '100%',
        display: 'flex',
        marginLeft: '-100px', 
        // flexDirection: 'column',
        // justifyContent: 'center'
        paddingTop: '30px'
    },
    agvSeller:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        marginTop:'-50px'
    },
    agvText:{
       color: '#fff',
       fontWeight: '700',
       fontSize:'40px',
       marginBottom:'-10px'
    },
    btnShopContainer:{
        display: 'flex',
        justifyContent: 'flex-end',
        // marginTop: '20px'
    },
    dividerContainer:{
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '20px'
    },
    textWhite:{
        color: 'white',
        backgroundColor: 'white',
        width: '50%'
    },
    populartext:{
        color: 'white',
        fontSize:'15px',
        fontWeight:'300',
        marginTop: '20px'
    },
    helmet4Mobile:{
        width: '200px',
        height: '200px',
    },
    infoBtn:{
        position:'absolute',
        marginTop:'-70px',
    },
    blogImage:{
        height:'50px',
        width:'50px'
    }
}))

const helmetStyle = {
    paperContainer: {
        backgroundImage: `url(${banner})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain', 
        backgroundSize:'100%'
    },
    banner:{
        backgroundImage: `url(${BG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain', 
        backgroundSize:'100%'
    }
}

const Index = () => {
    const classes = pageStyles()
    const isMobile = useMediaQuery("(max-width: 500px)")
    const [show, setShow] = useState(false)
    const blogDetails = [
        {
            "id":1,
            "date":"Jan 9, 2021",
            "image":blog1,
            "details":"Dennis wins Van Doren Invitational WSBC Champ"
        },
        {
            "id":2,
            "date":"Apr 23, 2021",
            "image":blog2,
            "details":"Dennis wins Van Doren Invitational WSBC Champ"
        },
        {
            "id":3,
            "date":"Oct 12, 2020",
            "image":blog3,
            "details":"Dennis wins Van Doren Invitational WSBC Champ"
        },
    ]
    const blogs = (
        <ThemeProvider theme={blog}>
            <List>
                {blogDetails.map((data)=> (
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar variant="rounded" src={data.image}/>
                            </ListItemAvatar>
                            <div className = {classes.blogDetails}>
                                <ListItemText primary="" secondary={data.date} />
                                <ListItemText primary={data.details} secondary="" />
                                <Link>
                                    <ListItemText onClick={()=>tabHandler(data.id)} primary="READ MORE" secondary="" className = {classes.btnReadmore} />
                                </Link>
                            </div>
                        </ListItem> 
                    </motion.div>
                ))}
            </List>
        </ThemeProvider>
    )

    const handleShow = () => {
        setShow(!show)
    }

    const tabHandler = (id) => {
        blogDetails.map((data) => {
            if (data.id === id) {
                
            }
        })
        setShow(true)
    }
    return (
        <>
            <Dialog open={show} onClose={handleShow}>
                <DialogContent>
                <ListItemAvatar>
                <Avatar className={classes.blogImage} variant="rounded" src={blog1}/>
                </ListItemAvatar>
                <ListItemText primary="" secondary={`Apr 23, 2021`} />
                <DialogContentText>
                <ListItem>
                    <div className = {classes.blogDetails}>
                        <ListItemText primary={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`} secondary="" />
                    </div>
                </ListItem> 
                </DialogContentText>
                </DialogContent>
            </Dialog>
            <ThemeProvider theme={theme}>
                <Grid container>
                    <Carousel>
                        <div>
                            <img src={BG} />
                        </div>
                        <div>
                            <img src={BG} />
                        </div>
                        <div>
                            <img src={BG} />
                        </div>
                    </Carousel>
                </Grid>
                <Grid container>
                    <Grid container className={classes.infoBtn}>
                        <Grid item>
                            <Box p={1}>
                                <InfoButton>COLOR</InfoButton>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box p={1}>
                                <InfoButton>PRICE $125.9</InfoButton>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box p={1}>
                                <BuyButton>VIEW PRODUCT</BuyButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Box>
                    <Grid container justify="center" alignItems="center">
                        <IconButton>
                            <Avatar className={classes.nav} src={left}/>
                        </IconButton>
                        <Typography className={classes.title} variant="h5">NEW PRODUCTS</Typography>
                        <IconButton>
                            <Avatar className={classes.nav} src={right}/>
                        </IconButton>
                    </Grid>
                </Box>
                    <>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={6}>
                                <Box p={2}>
                                    <Paper elevation={2} className={classes.item}>
                                        <Box mt={0} ml={2} mr={2} mb={5}>
                                            <Grid className={classes.list}>
                                                <Box m={1} textOverflow="ellipsis" overflow="hidden">
                                                    <Typography className={classes.name}>HJC CL-17 CAPTAIN AMERICA (SNELL)</Typography>
                                                </Box>
                                                <Box m={1}>
                                                    <Typography className={classes.amount}>$350.5</Typography>
                                                </Box>
                                                <Box mt={3} ml={1} mr={1}>
                                                    <BuyButton variant="contained">Buy now</BuyButton>
                                                </Box>
                                            </Grid>
                                            <Box mt={5}>
                                            </Box>
                                            <motion.div whileHover={{ scale: 1.05 }}>
                                                <img className={classes.activeHelmet} src={helmet1}/>
                                            </motion.div>
                                        </Box>
                                    </Paper>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Box p={1} mt={3}>
                                            <Paper elevation={2} className={classes.item}>
                                                <Box mt={0} ml={2} mr={2} mb={5}>
                                                    <Grid className={classes.list2}>
                                                        <Box m={1} textOverflow="ellipsis" overflow="hidden">
                                                            ZEUS Z-806 NEW SUPERTECH II50 MATT
                                                            <Typography className={classes.name2}></Typography>
                                                        </Box>
                                                        <Box m={1}>
                                                            <Typography className={classes.amount}>$350.5</Typography>
                                                        </Box>
                                                        <Box mt={3} ml={1} mr={1}>
                                                            <BuyButton>Buy now</BuyButton>
                                                        </Box>
                                                    </Grid>
                                                    <Box mt={5}>
                                                    </Box>
                                                    <motion.div whileHover={{ scale: 1.05 }}>
                                                        <img className={classes.helmet} src={helmet2}/>
                                                    </motion.div>
                                                </Box>
                                            </Paper>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Box p={1} mt={3}>
                                            <Paper elevation={2} className={classes.item}>
                                                <Box mt={0} ml={2} mr={2} mb={5}>
                                                    <Grid className={classes.list2}>
                                                        <Box m={1} textOverflow="ellipsis" overflow="hidden">
                                                            ARAII TOUR CROSS 3- DETOUR RED
                                                        </Box>
                                                        <Box m={1}>
                                                            <Typography className={classes.amount}>$350.5</Typography>
                                                        </Box>
                                                        <Box mt={3} ml={1} mr={1}>
                                                            <BuyButton>Buy now</BuyButton>
                                                        </Box>
                                                    </Grid>
                                                    <Box mt={5}>
                                                    </Box>
                                                    <motion.div whileHover={{ scale: 1.05 }}>
                                                        <img className={classes.helmet} src={helmet3}/>
                                                    </motion.div>
                                                </Box>
                                            </Paper>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </>
                    <Box mb={5}>
                        <Container>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Grid>
                                        <Hidden mdDown>
                                            <Grid container justify="flex-end">
                                                {blogs}
                                            </Grid>
                                        </Hidden>
                                        <Hidden lgUp>
                                            <Grid container justify="center">
                                                {blogs}
                                            </Grid>
                                        </Hidden>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} style = {helmetStyle.paperContainer}>
                                    <Box mb={3}>
                                        <div className = {classes.helmet4Banner}>
                                            <Grid container className = {classes.agvSeller}>
                                                <Grid container justify="flex-end">
                                                    <Box pt={5} pr={5}>
                                                        <Typography className = {classes.agvText} align = "right">AGV <br/> BEST <br/> SELLERS</Typography>
                                                    </Box>
                                                </Grid>
                                                <div className = {classes.dividerContainer}>
                                                    <Divider variant="middle"  className = {classes.textWhite}/>
                                                </div>
                                                <Box pr={4}>
                                                    <Grid container justify="flex-end">
                                                        <div className = {classes.btnShopContainer}>
                                                        <Typography className={classes.populartext}>SEE OUR MOST POPULAR PRODUCTS</Typography>
                                                        </div>
                                                    </Grid>
                                                    <Grid container justify="flex-end">
                                                        <div className = {classes.btnShopContainer}>
                                                            <BuyButton variant="contained">Shop Now</BuyButton>
                                                        </div>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                        </div>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
            </ThemeProvider>
        </>
    );
}
 
export default Index;