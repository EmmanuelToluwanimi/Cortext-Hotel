import React,{useEffect, useContext} from 'react';
import './style.css';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ModalContext from '../../store/Modalcontext';
import {AiFillCloseCircle} from 'react-icons/ai'

const useStyles = makeStyles((theme) => ({
    textField: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(0),
        // width: 300,
    },
}));


function Bookmodal() {
    const modalValue = useContext(ModalContext);
    const classes = useStyles();

    useEffect(() => {
        Aos.init({ duration: 500 })
    }, []);

    return (
        <div data-aos="fade-in" className="modalOverlay">
            <div className="bookingContainer">
                <div className="closebtn">
                    <button className="btn" onClick={modalValue.toggleModal}><AiFillCloseCircle/></button>
                </div>
                <h3 className="bookingTitle">Make a Booking today</h3>
                <form className="bookingForm">
                    <TextField
                        id="date"
                        label="CHECK - IN"
                        type="date"
                        fullWidth
                        // defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <TextField
                        id="date"
                        label="CHECK - OUT"
                        type="date"
                        fullWidth
                        // defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <button className="bookBtn_sm">Submit</button>

                </form>
            </div>
        </div>
    )
}

export default Bookmodal;
