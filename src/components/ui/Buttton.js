import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const button = (props) => (
    <div>
        <Button className="Home-main" variant="contained" edge="end">
        {props.icon?<Icon color="primary">{props.icon}</Icon>:""}{props.text}
        </Button>
    </div>
)

button.propTypes = {

}

export default button