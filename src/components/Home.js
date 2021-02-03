import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Timesheet from '../components/Timesheet'
import Report from '../components/Report'
import Screenshot from '../components/Screenshot'
import ToDO from '../components/To-Do'
import Button from '../components/ui/ButtonTable'
import more from '../Assets/more.png'
import Divider from '@material-ui/core/Divider';

class Home extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <div className="row row-content dashboard-container">
                    <div className="col-12 col-md-8">
                        <tr>
                            <th className="timesheet-channel-name">TimeSheet</th>
                        </tr>
                        <th > <Button text="VIEW FULL SHEET" >
                            </Button></th>
                        <img className="dot-time" src={more} />
                        <Timesheet />
                    </div>

                    <Divider orientation="vertical" className="home-verticalline" style={{backgroundColor:"red", }}/>

                    <div className="col-12 col-md-4">
                        Report
                        <Report />
                    </div>
                </div>
                <hr></hr>
                <div className="row row-content dashboard-container">
                    <div className="col-12 col-md-8">
                        To-Do List
                        <ToDO />
                    </div>
                    <div className="col-12 col-md-4">
                        Screenshots
                        <Screenshot />
                    </div>
                </div>
            </div>
        )
    }
}

Home.propTypes = {

}

export default Home