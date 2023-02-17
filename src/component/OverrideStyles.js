import { createMuiTheme } from "@material-ui/core";

const overrides = createMuiTheme({
    overrides:{
        MuiTypography:{
            root:{
                color:'#525252',
                fontFamily:'Poppins'
            }
        },
        MuiButton:{
            containedPrimary:{
                margin:'2px',
            }
        },
        MuiOutlinedInput:{
            root:{
                fontFamily:'Poppins'
            }
        },
        MuiformLabel:{
            root:{
                fontFamily:'Poppins'
            }    
        },
        MuiMenuItem:{
            root:{
                fontFamily:'Poppins'
            }    
        },
        MuiTextField:{
            root:{
                fontFamily:'Poppins'
            }    
        },
        MuiInputLabel:{
            root:{
                fontFamily:'Poppins'
            }    
        }
    },
    pallete:{
        primary:{
            main:'#009d69'
        },
        secondary:{
            main:'#dc3545'
        }
    }
})

export default overrides