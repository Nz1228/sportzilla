import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import fencing from "../assets/fencing.jpg";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';

import Divider from '@material-ui/core/Divider';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Modal from '@material-ui/core/Modal';

import { Alert, AlertTitle } from '@material-ui/lab';
import * as actionTypes from '../store/actions.js';

const useStyles = makeStyles((theme) => ({
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
    }
}));

const Champions = (props) => {
    const useStyles = makeStyles((theme) => ({
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
        }
    }));
    const classes = useStyles();
    const box = AlertDialog(props);
    return (
        <div className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Profile Picture"
                    height="140"
                    image={props.img}
                    title="Profile Picture"
                />
                <CardContent>
                    <Typography gutterBottom variant="h3" component="h2">
                        {props.nm}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Fencer {props.nm} has {props.scr} wins in this tournament.
                            {props.nm} is a {props.vH} time champion.
                        </Typography>
                </CardContent>
                {box}
                <Divider />
            </CardActionArea>

        </div>
    );

}

function AlertDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [alert, setAlert] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleProceed = () => {
        setAlert(true);
        setOpen(false);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    const handleClose = () => {
        setOpen(false);
    };
    //const willDisqualify = (props) => {
    //    props.disqualify(props.id);
    //};
    return (
        <div>
            <Button color="secondary" size="medium" onClick={handleClickOpen}> Disqualify </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-disqualify"
                aria-describedby="alert-dialog-disqualifies player"
            >
                <DialogTitle id="alert-dialog-title">{"Disqualify Player?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Warning: this removes player from tournament and overall list of fencers. Cannot undo.
                    </DialogContentText>
                    <Alert severity="warning">
                        <AlertTitle>Warning</AlertTitle>
                        <strong>This will remove the fencer completely! </strong>
                    </Alert>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => props.onDisqualify(props.id)} color="primary" autoFocus>
                            Proceed
                        </Button>
                </DialogActions>
            </Dialog>
            {alert ?  < Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                <strong>Successfully Deleted!</strong>
            </Alert>
                : null}
          

        </div>
    );
}

const mapStateToProps = state => {
    return {
        fencers: state.fencers,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onDisqualify: (id) => dispatch({ type: actionTypes.DISQUALIFY_CHAMPIONS, id: id })
        //onDisqualify: (id) => dispatch(actionTypes.DISQUALIFY_CHAMPIONS(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Champions);
//export default connect(mapStateToProps)(Champions);
//export default Champions;