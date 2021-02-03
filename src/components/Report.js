// import React from 'react';
// import PropTypes from 'prop-types'
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import TransparentButton from '../components/ui/TransparentButton'
// import pdf from '../Assets/pdf.png'
// const StyledTableCell = withStyles((theme) => ({

// }))


// export default function Report() {
//     return (
//         <div>
//             <TransparentButton text="EXPORT AS PDF" icon={pdf}/>
//         </div>
//     )
// }



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import TransparentButton from '../components/ui/TransparentButton'
import ViewButton from '../components/ui/ViewButton'
import Activity from '../Assets/graph.png'
import BlackTimesheet from '../Assets/timer_blue.png'
import pdf from '../Assets/pdf.png'


export default function SimpleCard() {
    const data = [
        { id: 1, name: "WEEKLY ACTIVITY", percent: "52", icon: Activity },
        { id: 1, name: "WORKED THIS WEEK", percent: "11:56:33", icon: BlackTimesheet },

    ];
    return (
        <div className="Report-card-div">
            {data.map((user, index) => (
                <div>
                    {(index === 0 ?
                        (
                            <Card className="Report-Card" style={{ backgroundColor: "#3f51b5" }}>
                                <div>
                                    <ListItem>
                                        <div style={{ width: "40px", backgroundColor:"rgb(42, 63, 172)", margin: "0px 10px", padding:"3px 7px", borderRadius:"2px" }}>
                                            <ListItemAvatar>
                                                <img src={user.icon} />
                                            </ListItemAvatar>
                                        </div>
                                        <ListItemText primary={user.name} secondary={user.percent} style={{ fontWeight:"1px" }} />

                                        {(index === 0 ?
                                            (
                                                <Card edge="end" style={{ backgroundColor: "#39C084", width: "50px", height: "20px",  }} >
                                                   <ArrowDropUpIcon style={{color:"white", margin:" -2px 6px 0 0", width:"20px"}}/>  <span style={{margin: "-108px 0 0 -9px", color:"white"}}>17%</span>
                                                </Card>)
                                            :
                                            (
                                                <Card edge="end" style={{ backgroundColor: "#EECFCF", width: "50px", height: "20px",  }} >
                                                   <ArrowDropDownIcon style={{color:"#F42525", margin:" -2px 6px 0 0", width:"20px"}}/>   <span style={{margin: "-108px 0 0 -9px", color:"#F42525" }}>17%</span>
                                                </Card>)
                                        )}
                                    </ListItem>
                                </div>
                            </Card>
                        )
                        :
                        (
                            <Card className="Report-Card" style={{ backgroundColor: "#F0F0F0" }}>
                                <div>
                                    <ListItem>
                                        <div style={{ width: "40px", backgroundColor:"#FFFFFF", margin: "0px 10px", padding:"3px 7px", borderRadius:"2px" }}>
                                        <ListItemAvatar>
                                            <img src={user.icon} />
                                        </ListItemAvatar>
                                        </div>
                                        <ListItemText primary={user.name} secondary={user.percent} style={{ fontSize: "12px" }} />

                                        {(index === 0 ?
                                            (
                                                <Card  style={{ backgroundColor: "#39C084", width: "50px", height: "20px",  }} >
                                                  <ArrowDropUpIcon style={{color:"white", margin:" -2px 6px 0 0", width:"20px"}}/>  <span style={{margin: "-108px 0 0 -9px", color:"white" }}>17%</span>
                                                </Card>)
                                            :
                                            (
                                                <Card style={{ backgroundColor: "#EECFCF", width: "50px", height: "20px",}} >
                                                  <ArrowDropDownIcon style={{color:"#F42525", margin:" -2px 6px 0 0", width:"20px"}}/>   <span style={{margin: "-108px 0 0 -9px", color:"#F42525" }}>17%</span>
                                                </Card>)
                                        )}
                                    </ListItem>
                                </div>
                            </Card>
                        )


                    )}

                </div>
            ))}
            <TransparentButton text="EXPORT AS PDF" icon={pdf} />
        </div>
    );
}
