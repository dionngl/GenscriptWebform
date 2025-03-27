import React, {useState} from 'react';
import {
    Dialog,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    FormControl,
    Grid,
} from "@mui/material/";
import update from "immutability-helper";

//TODO: when sequence gets larger than 10 characters, new textfield should appear to name the sequence
//TODO: delete CNME, directly add to the board with setBoard and immunitibility helper

function CabbagePopUp ({cabbagepopupstate, changecabbagepopupstate, board, setBoard}) {

    const [enteredstring, setEnteredString] = useState('');
    const [showcabbageName, setShowCabbageName] = useState(false);
    const [cabbageName, setCabbageName] = useState('');

    const maintainDisplay = e => {
        let temp = e.target.value
        temp = temp.replace(/[^ac-ik-np-tvwyAC-IK-NP-TVWY]/g, "").toUpperCase()
        if (temp.length>10) {setShowCabbageName(true)}
        else {
            setShowCabbageName(false)
            setCabbageName("")
        }
        setEnteredString(() => temp)
    }

    const maintainNameDisplay = e => {
        setCabbageName(e.target.value.slice(0,10))
    }

    const addCabbage = () => {
        let cabbage_sequence = enteredstring
        let cabbage_name = (cabbageName.length > 0?cabbageName:enteredstring)
        let temp_element = {
            element_name: cabbage_name,
            element_sequence: cabbage_sequence,
            element_index: 1,
            element_system: "All",
            element_color: "#338833",
            element_type: "Cabbage"}
        let hold_index = board.findIndex((elem) => elem.element_type === "Holder")
        console.log(board)
        console.log("hold_index", hold_index, temp_element)
        if (hold_index === -1) {
            setBoard((prevBoard) => update(prevBoard, {$push: [temp_element]}))
        } else {
            setBoard((prevBoard) => update(prevBoard, {$splice: [[hold_index,1,temp_element]]}))
        }
    }



    return (
        <Dialog open={cabbagepopupstate} maxWidth={"sm"} fullWidth={true}>
            <Grid container width={"100%"} justifyContent="center" spacing={2}>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item key={0}>
                        <DialogContent>
                            Enter Sequence:
                        </DialogContent>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" width={"100%"} spacing={2}>
                    <Grid item sx={{ width: '75%', mt:2}} key={0}>
                        <FormControl fullWidth sx={{ width: '100%'}}>
                            <TextField
                                required
                                label={"Sequence Input"}
                                variant={"outlined"}
                                value={enteredstring}
                                multiline
                                maxRows={4}
                                overflow="scroll"
                                onChange={maintainDisplay}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" width={"100%"} spacing={2}>
                    <Grid item key={0} minHeight={90} sx={{ width: '75%', mt:2}}>
                        {showcabbageName?<FormControl fullWidth sx={{ width: '100%'}}>
                            <TextField
                                label={"Sequence Name"}
                                variant={"outlined"}
                                value={cabbageName}
                                multiline
                                maxRows={4}
                                overflow="scroll"
                                onChange={maintainNameDisplay}
                            />
                        </FormControl>:<div />}
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item key={0}>
                        <DialogActions>
                            <Button
                                disabled={!(enteredstring.length > 0)||(enteredstring.length > 10 && !(cabbageName.length > 0))}
                                variant={"contained"}
                                onClick={() => {
                                    if (enteredstring.length > 0) {
                                        changecabbagepopupstate(false)
                                        addCabbage()
                                        setEnteredString("")
                                        setCabbageName("")
                                        setShowCabbageName(false)
                                    }
                                }}>
                                Add
                            </Button>
                        </DialogActions>
                    </Grid>
                </Grid>
            </Grid>
        </Dialog>
    )
}

export default CabbagePopUp