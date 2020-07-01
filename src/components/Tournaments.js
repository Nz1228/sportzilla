import React, { useState, Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';

import Tooltip from '@material-ui/core/Tooltip';
import GridList from '@material-ui/core/GridList';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import Backdrop from '@material-ui/core/Backdrop';
import fencing from "../assets/fencing.jpg";

import Champions from "./Champions.js";
import * as actions from '../store/actions.js';


const styles = theme => ({
    root: {
        minWidth: 275,
        maxWidth: 345,
        position: 'relative'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    dropdown: {
        position: 'absolute',
        top: 28,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid',

    },
    backdrop: {
        color: '#fff',
    },
});

class Tournaments extends Component {
    state = {
        clicked:false
    }

    render() {
        const { classes } = this.props;

        const showFencerHandler = () => {
            this.setState({ clicked: true });
        }

        const handleClose = () => {
            this.setState({ clicked: false });
        }
        const handleClick = () => {
            this.setState({ clicked: !clicked });
        } 
        //function player(fencer) {
        //    return (
        //        //{
        //        //    Object.keys(fencer).map(key => <div> <Champions {...fencer[key]} /> </div> )}
        //        <div>
        //            <Champions
        //                id={fencer.id}
        //                nm={fencer.name}
        //                img={fencer.image}
        //                scr={fencer.score}
        //                vH={fencer.victoryHistory}
        //            />
        //        </div>

        //    );
        //}
        let tournaments = null;
        const self = this;
        tournaments = (
            <div>
                {this.props.tournaments.map((tourn) => {
                    return (
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {tourn.title}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {tourn.date}
                                    <br />
                                </Typography>
                             </CardContent>
                            <CardActions>
                                <div> 
                                    <Tooltip title="Click to view Participants">
                                        <Button onClick={handleClick}>
                                            {clicked ? 'See Players' : 'Close Window'}
                                        </Button>
                                        <div>
                                            {clicked ? (
                                                <GridList>
                                                    {tourn.players.map((plyr) => {
                                                        {self.props.fencers.map((fencer) => {
                                                            return (
                                                                <div>
                                                                    <Champions

                                                                        id='5E'
                                                                        nm='Resa'
                                                                        img={fencing}
                                                                        scr='5'
                                                                        vH='12'/>
                                                                </div>);

                                                        })}
                                                    })}
                                                </GridList>)
                                                :null 
                                            }
                                        </div>
                                    </Tooltip>
                                   </div>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header">
                                        <Typography>Learn More</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            {tourn.title} is excited welcome all the players to the competition!
                                        </Typography>
                                    </ExpansionPanelDetails>
                                    </ExpansionPanel>   
                            </CardActions>
                        </Card>
                     )
                 })
                }
            </div>
           );

        return (
            <div>
                {tournaments}
            </div> 
        );
    }
}

const mapStateToProps = state => {
    return {
        tournaments: state.tournaments,
        fencers: state.fencers,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onDisqualify: (id) => dispatch(actions.disqualify(id))
        //onDisqualify: (disName) => dispatch(actionTypes.DISQUALIFY_CHAMPIONS(disName))
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Tournaments));