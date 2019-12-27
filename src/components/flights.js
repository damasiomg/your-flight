import React from 'react'
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Flight from './flight'
import axios from 'axios'
import { white } from 'ansi-colors'


const styles = {
    category: {
        textTransform: 'uppercase',
        color: '#66666E',
        padding: 14,
        paddingBottom: 25,
        fontSize: 14,
        fontFamily: 'Questrial',
        fontWeight: 14

    },

    divFlights: {
        height: 560,
        overflow: 'scroll'
    },

    nothing: {
        color: 'white',
        fontSize: 14,
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Questrial'

    }

}

const months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
}

var theme = createMuiTheme({
    overrides: {
    }
})



class Flights extends React.Component {

    constructor(props){
        super(props)
        this.state = { data: [] }
    }

    sortFlights = (items) => {
        var items = items.sort((a, b) => {
            if (a.time < b.time) return 1
            if (a.time > b.time) return -1
            return 0
        })
        return(items)
    }

    prepareData = (data) => {

        var newData = []
        var today = (new Date()).getTime()

        data.map((flight, i) => {
            flight['time'] = new Date(flight.outboundDate).getTime()
            if(today > flight['time'])
                flight['past'] = true
            else
                flight['past'] = false
            

            //make period
            var outboundDay = new Date(flight.outboundDate).getDate()
            var outboundMonth = months[new Date(flight.outboundDate).getMonth()]
            var inboundDay = new Date(flight.inboundDate).getDate()
            var inboundMonth = months[new Date(flight.inboundDate).getMonth()]

            flight['period'] = `${outboundDay} ${outboundMonth} - ${inboundDay} ${inboundMonth}`
            data[i] = flight

            
        })

        this.setState({ data })

        



    }

    async componentDidMount(){
        try{
            const request = await axios.get('https://5ba412108da2f20014654cf8.mockapi.io/api/v1/flights')
            this.prepareData(request.data)
        }catch(err){
            console.warn(err)
        }
        
    }

    render(){
        const { classes } = this.props
        var { data } = this.state
        var upcomingFlights = []
        var pastFlights = []

        if(data.length > 0){
            upcomingFlights = this.sortFlights(data.filter(flight => { return !flight.past }))
            pastFlights = this.sortFlights(data.filter(flight => { return flight.past }))
        }
          
        return(
            <MuiThemeProvider theme={theme}><div className={classes.divFlights}>

                <div className={classes.category}>Upcoming</div>

                {upcomingFlights.map(flight => {
                    return(
                        <Flight
                            key={flight.time} 
                            image={flight.thumb}
                            title={`${flight.destination} (${flight.period})`}
                            city={flight.destination}
                            date={flight.period}
                        />
                    )
                })}

                {upcomingFlights.length === 0 && <div className={classes.nothing}>&#10007; no records!</div>}

                <div className={classes.category}>Past</div>
                {pastFlights.map(flight => {
                    return(
                        <Flight 
                            key={flight.time} 
                            image={flight.thumb}
                            title={`${flight.destination} (${flight.period})`}
                            city={flight.destination}
                            date={flight.period} 

                        />
                    )
                })}

                {pastFlights.length === 0 && <div className={classes.nothing}>&#10007; no records!</div>}

               
            </div></MuiThemeProvider>
        )
    }
}

Flights.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Flights)