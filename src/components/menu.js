import React from 'react'
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AirplanemodeActiveOutlined from '@material-ui/icons/AirplanemodeActiveOutlined'
import MapOutlined from '@material-ui/icons/MapOutlined'
import CenterFocusStrongOutlined from '@material-ui/icons/CenterFocusStrongOutlined'
import CardTravelOutlined from '@material-ui/icons/CardTravelOutlined'



const styles = {
    root: {
        flexGrow: 1,
        width: 'inherit',
        backgroundColor: '#1D2029'
        
    },
}

var theme = createMuiTheme({
    overrides: {
        MuiTab: {
            root: {
                minWidth: 'unset !important',
                textTransform: 'none',
                fontFamily: 'Questrial'
            },
            textColorSecondary: {
                color: '#737479',
                "&$selected": {
                    "color": "white !important"
                }
            }
        },
        MuiTabs: {
            flexContainer: {
                justifyContent: 'space-around'
            }
        },

        MuiPaper: {
            elevation1: {
                boxShadow: 'inset 0px 11px 2px -10px #393a3c'
            }
        },

        PrivateTabIndicator: {
            colorSecondary: {
                backgroundColor: '#14DFCB'
            }
        }

    }
})

class Menu extends React.Component {

    constructor(props){
        super(props)
        this.state = { value: 'recents' }
    }

    handleChange = (event, value) => {
        this.setState({ value })
    }
    render(){
        const { classes } = this.props
        var { value } = this.state
        
        return(
            <MuiThemeProvider theme={theme}><div>
                <Paper square className={classes.root}>
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        variant="fullWidth"
                        indicatorColor="secondary"
                        textColor="secondary"
                        aria-label="icon label tabs example"
                    >
                        <Tab value='recents2' icon={<AirplanemodeActiveOutlined />} label="Book Flights" />
                        <Tab value='favorites' icon={<MapOutlined />} label="Map View" />
                        <Tab value='nearby' icon={<CenterFocusStrongOutlined />} label="Flight Status" />
                        <Tab value='recents' icon={<CardTravelOutlined/>} label="My Profile" />


                    </Tabs>
                </Paper>
            </div></MuiThemeProvider>
        )
    }
}

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Menu)