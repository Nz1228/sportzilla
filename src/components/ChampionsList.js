import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import fencing from "../assets/fencing.jpg";

import { withStyles } from '@material-ui/styles';

import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import * as actionTypes from '../store/actions.js';
import Champions from './Champions.js';

const styles = theme => ({
    root: {
        maxWidth: 345,
        minHeight: 345,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}); 


class ChampionsList extends Component {

    state = {
        fencers: [
            { name: 'Me', image: fencing, score: 10, victoryHistory: 12, isVisible: true },
            { name: 'Nancy', image: fencing, score: 1, victoryHistory: 0, isVisible: true },
        ]
    }

    render() {
        const { classes } = this.props;
        let champions = null;
        champions = (
            <div>
                {this.props.fencers.map((champion) => {
                    return (
                        <GridListTile item={true}  style={{ display: "flex" }}>
                            <Champions
                                id={champion.id}
                                nm={champion.name}
                                img={champion.image}
                                scr={champion.score}
                                vH={champion.victoryHistory}
                                disqualify={this.props.onDisqualify}
                            />
                        </GridListTile >


                     )})}
            </div>
        );
      
        return (
            <div className={classes.root}>
                <GridList item={true} cellHeight={1780} spacing={1} cols={1} cellWidth={1000} className={classes.gridList} style={{ display: "flex" }}>
                    { champions }
                </GridList>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        fencers: state.fencers,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onDisqualify: (id) => dispatch({ actions.disqualify(id) })
        //onDisqualify: (id) => dispatch({ type: actionTypes.DISQUALIFY_CHAMPIONS, id:id})
        //onDisqualify: (id) => dispatch(actionTypes.disqualify(id))
    };
}
export default connect(mapStateToProps,mapDispatchToProps) (withStyles(styles)(ChampionsList));