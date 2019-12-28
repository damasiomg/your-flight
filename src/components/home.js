import React from 'react'
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Header from './header'
import Flights from './flights'
import Menu from './menu'



const styles = {

    page: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20   
    },
    root: {
        backgroundColor: '#13131F',
        width: 'auto',
        maxWidth: 408

     
    }    
    
}

var theme = createMuiTheme({
    overrides: {
    }
})


class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = { }
    }

    render(){
        const { classes } = this.props
        
        
        return(
            <MuiThemeProvider theme={theme}>
                
                <Grid container spacing={0} className={classes.page}>
                    <Grid item className={classes.root} xs={12} sm={6} md={4}>
                        <Header/>
                        <Flights/>
                        <Menu/>
                    </Grid>


                </Grid>
               


                
            </MuiThemeProvider>
        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home)