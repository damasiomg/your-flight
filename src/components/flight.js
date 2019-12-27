import React from 'react'
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'



const styles = {
    card: {
        padding: 25,
        marginTop: -40,  
        backgroundColor: 'transparent',
        boxShadow: 'unset'
    },    
    media: {
        height: 120,
        borderRadius: 5 
    },

    city: {
        color: 'white',
        fontSize: 20,
        display: 'flex',
        marginTop: -30,
        marginLeft: 7,
        padding: 5,
        fontFamily: 'Questrial'

    },
    date: {
        color: 'white',
        fontSize: 14,
        display: 'flex',
        marginTop: -31,
        marginLeft: 7,
        padding: 5,
        fontFamily: 'Questrial',
        justifyContent: 'flex-end'
    },

    spanText: {
        backgroundColor: '#13131f94',
        borderRadius: 6,
        padding: 2
    }

}

var theme = createMuiTheme({
    overrides: {
    }
})

class Flight extends React.Component {

    render(){
        const { classes } = this.props
        var { image, title, city, date } = this.props
        //console.log('this.state', this.state)
        
        return(
            <MuiThemeProvider theme={theme}><div>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={image}
                        title={title}
                        />
                        <div className={classes.city}><span className={classes.spanText}>{city}</span></div>
                        <div className={classes.date}><span className={classes.spanText}>{date}</span></div>
                    </CardActionArea>
                </Card> 
            </div></MuiThemeProvider>
        )
    }
}

Flight.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Flight)