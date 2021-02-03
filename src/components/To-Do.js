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
import TransparentButton from '../components/ui/TransparentButton'
import ViewButton from '../components/ui/ViewButton'
import pdf from '../Assets/pdf.png'
import more from '../Assets/more.png'
export default function SimpleCard() {
    const data = [
        { id: 1, name: "Revamp Instagram App", percent: "Today", Date: 20, month: "May" },
        { id: 1, name: "Prototyping", percent: "Upcomming", Date: 20, month: "May" },
        { id: 1, name: "Collect Reference for new Project", percent: "Upcomming", Date: 20, month: "May" },

    ];


    return (
        <div className="Todo-card-div">
            {data.map((user, index) => (
                <div>

                    {(index === 0 ?
                        (
                            <div>
                                <div className="Todo-Card-Date">
                                    <ListItemText style={{ color: "#382F9C",}} primary={user.Date} />
                                    <ListItemText style={{ color: "#382F9C",}} primary={user.month} />
                                </div>
                                <Card className="Todo-Card-content">
                                    <ListItem>
                                        <ListItemText primary={user.name} secondary={user.percent} className="screenshot-text Todo" />
                                        <img edge="end" src={more} />
                                    </ListItem>
                                </Card>
                            </div>
                        )


                        : (
                            <div>
                                <div className="Todo-Card-Date"  >
                                    <ListItemText style={{ color: "#000000" }} primary={user.Date} />
                                    <ListItemText style={{ color: "#000000" }}  secondary={user.month} />
                                </div>
                                <Card className="Todo-Card-content">
                                    <ListItem style={{backgroundColor:"#F0F0F0"}} >
                                        <ListItemText primary={user.name} secondary={user.percent} />
                                        <img edge="end" src={more} />
                                    </ListItem>
                                </Card>
                            </div>

                        )
                    )}

                </div>

            ))}
        </div>
    );
}
