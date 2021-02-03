import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const button = (props) => (
    <div>
        {props.type === "image" ?
            <Button className="view-Button" variant="outlined" color="primary" size="small" >
                View
        </Button>
            :
            <Button style={{backgroundColor:"#3f51b5",color:"white"}}size="small" >
                Play
        </Button>
        }
    </div>


)

button.propTypes = {

}

export default button