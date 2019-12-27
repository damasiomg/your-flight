import React from 'react'
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import SettingsOutlined from '@material-ui/icons/SettingsOutlined'


const styles = {

    title: {
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Questrial',
        padding: 8

    },

    configIcon: {
        color: 'white'
    },

    configDiv: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: -50
    }

}

var theme = createMuiTheme({
    overrides: {
    }
})

class Header extends React.Component {

    render(){
        const { classes } = this.props        
        return(
            <MuiThemeProvider theme={theme}><div>
                <div className={classes.title}>
                    <span className={classes.title}>My bookings</span>
                </div>

                <div className={classes.configDiv}>
                    <IconButton aria-label="configuration" className={classes.configIcon}>
                        <SettingsOutlined/>
                    </IconButton>
                </div>
            </div></MuiThemeProvider>
        )
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)