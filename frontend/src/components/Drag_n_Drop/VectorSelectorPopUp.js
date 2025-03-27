import React, {useState} from 'react';
import {
    Dialog,
    DialogContent,
    DialogActions,
    Button,
    Select,
    InputLabel,
    MenuItem,
    FormHelperText,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Grid,
    Box,
    FormControl,
} from "@mui/material/";
import update from "immutability-helper";


function VectorSelectorPopUp ({vectorpopupstate, changevectorpopupstate, vector_list, board, setConstructList, construct_list}) {

    const [vector, setVector] = useState(null)
    const [mcsenabled, setMCSEnabled] = useState(true)
    const [mcs2enabled, setMCS2Enabled] = useState(true)
    const [mcs1restriction1, setMCS1Restriction1] = useState(null)
    const [mcs1restriction2, setMCS1Restriction2] = useState(null)
    const [showMCS2, setShowMCS2] = useState(false)
    const [mcs2restriction1, setMCS2Restriction1] = useState(null)
    const [mcs2restriction2, setMCS2Restriction2] = useState(null)
    const [siteselection, setSiteSelection] = useState("Site1")
    const [siteSelectionenabled, setSiteSelectionEnabled] = useState(true)


    const handleVectorSelection = (event) => {
        setVector(event.target.value)
        setMCS1Restriction1(event.target.value.mcs1_defaults[0])
        setMCS1Restriction2(event.target.value.mcs1_defaults[1])
        {event.target.value.mcs2 !== null ? setShowMCS2(true) : setShowMCS2(false)}
        {event.target.value.mcs2 !== null && setMCS2Restriction1(event.target.value.mcs2_defaults[0])}
        {event.target.value.mcs2 !== null && setMCS2Restriction2(event.target.value.mcs2_defaults[1])}
        {event.target.value.mcs2 !== null && setMCS2Enabled(false)}
        {event.target.value.mcs2 !== null && setSiteSelectionEnabled(false)}
        setMCSEnabled(false);
        if (Object.hasOwn(event.target.value, "filledDuet")) {
            if (event.target.value.filledDuet === "Site1") {
                setSiteSelection("Site2");
                setSiteSelectionEnabled(true);
                setMCSEnabled(true);
            } else {
                setSiteSelection("Site1");
                setSiteSelectionEnabled(true);
                setMCS2Enabled(true);
            }
        }
    };

    const handleM1RSite1Selection = (event) => {
        setMCS1Restriction1(event.target.value)
    };

    const handleM1RSite2Selection = (event) => {
        setMCS1Restriction2(event.target.value)
    };

    const handleM2RSite1Selection = (event) => {
        setMCS2Restriction1(event.target.value)
    };

    const handleM2RSite2Selection = (event) => {
        setMCS2Restriction2(event.target.value)
    };

    const handleSiteSelector = (event) => {
        setSiteSelection(event.target.value)
    };

    const MCS2 = () => (
        <Grid container justifyContent="center" spacing={2}>
            <Grid key={0} item>
                <FormControl sx={{mt:2}}>
                    <Select
                        disabled={mcs2enabled}
                        value={mcs2restriction1}
                        defaultValue={mcs2restriction1}
                        label="MCS2"
                        onChange={handleM2RSite1Selection}
                    >
                        {vector !== null && vector.mcs2.slice(0,vector.mcs2.findIndex((x)=> x === mcs2restriction2)).map((site) => <MenuItem value={site}>{site}</MenuItem>)}
                    </Select>
                    <FormHelperText>MCS2 Restriction Site 1</FormHelperText>
                </FormControl>
            </Grid>
            <Grid key={1} item>
                <FormControl sx={{mt:2}}>
                    <Select
                        disabled={mcs2enabled}
                        value={mcs2restriction2}
                        defaultValue={mcs2restriction2}
                        label="MCS2"
                        onChange={handleM2RSite2Selection}
                    >
                        {vector !== null && vector.mcs2.slice(vector.mcs2.findIndex((x)=> x === mcs2restriction1)+1,).map((site) => <MenuItem value={site}>{site}</MenuItem>)}
                    </Select>
                    <FormHelperText>MCS2 Restriction Site 2</FormHelperText>
                </FormControl>
            </Grid>
        </Grid>
    )

    const SiteSelector = () => (
        <Grid container justifyContent="center" spacing={2}>
            <Grid key={0} item>
                <FormControl sx={{mt:2}}>
                    <FormLabel>Select Which Site</FormLabel>
                    <RadioGroup row value={siteselection} onChange={handleSiteSelector} >
                        <FormControlLabel disabled={siteSelectionenabled} value="Site1" control={<Radio sx={{color: "#4466dd", '&.Mui-checked': {color: "#4466dd"}}}/>} label="Site 1" />
                        <FormControlLabel disabled={siteSelectionenabled} value="Site2" control={<Radio sx={{color: "#4466dd", '&.Mui-checked': {color: "#4466dd"}}}/>} label="Site 2" />
                    </RadioGroup>
                </FormControl>
            </Grid>
        </Grid>

    )

    const handleAddSingle = () => {

        let con_name = board.map((element) => element.element_name).join("-")
        if (board[0].element_sequence[0] !== "M") {
            con_name = "M-" + con_name
        }
        if (vector.mcs2 !== null && !Object.hasOwn(vector, "filledDuet")) {
            let temp_REs = (siteselection === "Site1" ? [mcs1restriction1, mcs1restriction2] : [mcs2restriction1, mcs2restriction2])
            let test = {
                vector_name: vector.vector_name+" with "+con_name+" in "+siteselection,
                vector_perm_name: vector.vector_name,
                vector_system: vector.vector_system,
                mcs1: vector.mcs1,
                mcs1_defaults: vector.mcs1_defaults,
                mcs2: vector.mcs2,
                mcs2_defaults: vector.mcs2_defaults,
                filledDuet: siteselection
            }
            test[siteselection] = [...board]
            test[siteselection+"REs"] = [...temp_REs]
            vector_list.unshift(test)
        }
        setConstructList((prev_clist) => {
            let temp = {
                vector_info: vector,
            }
            console.log("in add single 3")
            if (vector.hasOwnProperty("Site1")) {
                /*site1 = vector.site1, site2 == board */
                /*temp.vector_info.vector_name = temp.vector_info.vector_perm_name
                temp["Site1"] = vector["Site1"]
                temp["Site1 REs"] = vector["Site1REs"]
                temp["Site2"] = [...board]
                temp["Site2 REs"] = [mcs1restriction1, mcs1restriction2]*/
                temp = update(temp, {
                    vector_info: {vector_name: {$set: temp.vector_info.vector_perm_name}},
                    Site1: {$set: vector["Site1"]},
                    Site1REs: {$set: vector["Site1REs"]},
                    Site1Selected: {$set: false},
                    Site2: {$set: [...board]},
                    Site2REs: {$set: [mcs2restriction1, mcs2restriction2]},
                    Site2Selected: {$set: false},
                })
            } else if (vector.hasOwnProperty("Site2")) {
                /*site1 = board, site2 == vector.site2 */
                /*temp.vector_info.vector_name = temp.vector_info.vector_perm_name
                temp["Site1"] = [...board]
                temp["Site1REs"] =  [mcs1restriction1, mcs1restriction2]
                temp["Site2"] = vector["Site2"]
                temp["Site2REs"] = vector["Site2REs"]*/
                temp = update(temp, {
                    vector_info: {vector_name: {$set: temp.vector_info.vector_perm_name}},
                    Site1: {$set: [...board]},
                    Site1REs: {$set: [mcs1restriction1, mcs1restriction2]},
                    Site1Selected: {$set: false},
                    Site2: {$set: vector["Site2"]},
                    Site2REs: {$set: vector["Site2REs"]},
                    Site2Selected: {$set: false},
                })
            } else {
                /*siteselection = board, othersite == null */
                let temp_REs = (siteselection === "Site1" ? [mcs1restriction1, mcs1restriction2] : [mcs2restriction1, mcs2restriction2])
                let othersite = (siteselection === "Site1" ? "Site2" : "Site1")
                temp[siteselection] = [...board]
                temp[siteselection+"REs"] = temp_REs
                temp[siteselection+"Selected"] = false
                temp[othersite] = null
                temp[othersite+"REs"] =null
                temp[othersite+"Selected"] = false
            }

            return [...prev_clist, temp]
        })
        changevectorpopupstate([false, false])
    }

    const handleAddBatch = () => {
        let selected_constructs = construct_list.filter((element)=>(element.Site1Selected===true||element.Site2Selected===true))
        let selected_boards = selected_constructs.flatMap((element)=>(element.Site2Selected===true?(element.Site1Selected===true?[element.Site1,element.Site2]:[element.Site2]):[element.Site1]))

        selected_boards.map((selectedBoard) => {
            setConstructList((clist) => {
                let temp = {
                    vector_info: vector,
                }
                if (vector.hasOwnProperty("Site1")) {
                    temp = update(temp, {
                        vector_info: {vector_name: {$set: temp.vector_info.vector_perm_name}},
                        Site1: {$set: vector["Site1"]},
                        Site1REs: {$set: vector["Site1REs"]},
                        Site1Selected: {$set: false},
                        Site2: {$set: [...selectedBoard]},
                        Site2REs: {$set: [mcs2restriction1, mcs2restriction2]},
                        Site2Selected: {$set: false},
                    })
                } else if (vector.hasOwnProperty("Site2")) {
                    temp = update(temp, {
                        vector_info: {vector_name: {$set: temp.vector_info.vector_perm_name}},
                        Site1: {$set: [...selectedBoard]},
                        Site1REs: {$set: [mcs1restriction1, mcs1restriction2]},
                        Site1Selected: {$set: false},
                        Site2: {$set: vector["Site2"]},
                        Site2REs: {$set: vector["Site2REs"]},
                        Site2Selected: {$set: false},
                    })
                } else {
                    let temp_REs = (siteselection === "Site1" ? [mcs1restriction1, mcs1restriction2] : [mcs2restriction1, mcs2restriction2])
                    let othersite = (siteselection === "Site1" ? "Site2" : "Site1")
                    temp[siteselection] = [...selectedBoard]
                    temp[siteselection+"REs"] = temp_REs
                    temp[siteselection+"Selected"] = false
                    temp[othersite] = null
                    temp[othersite+"REs"] =null
                    temp[othersite+"Selected"] = false
                }
                return [...clist, temp]
            })
            changevectorpopupstate([false,false])
        })
    }

    return (
        <React.Fragment>
            <Dialog open={vectorpopupstate[0]} maxWidth={"md"} fullWidth={true}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid key={0} item>
                            <DialogContent fullWidth sx={{textAlign: 'center', typography:'h6'}}>
                                Choose a Vector:
                            </DialogContent>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid key={0} item>
                            <FormControl sx={{minWidth: 200}}>
                                <InputLabel>Vector</InputLabel>
                                <Select
                                    value={vector}
                                    onChange={handleVectorSelection}
                                >
                                    {vector_list.map((vector) => <MenuItem value={vector}>{vector.vector_name}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item key={0}>
                            <FormControl sx={{mt:2}}>
                                <Select
                                    disabled={mcsenabled}
                                    value={mcs1restriction1}
                                    defaultValue={mcs1restriction1}
                                    label="MCS1"
                                    onChange={handleM1RSite1Selection}
                                >
                                    {vector !== null && vector.mcs1.slice(0,vector.mcs1.findIndex((x)=> x === mcs1restriction2)).map((site) => <MenuItem value={site}>{site}</MenuItem>)}
                                </Select>
                                <FormHelperText>Restriction Site 1</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item key={1}>
                            <FormControl sx={{mt:2}}>
                                <Select
                                    disabled={mcsenabled}
                                    value={mcs1restriction2}
                                    defaultValue={mcs1restriction2}
                                    label="MCS2"
                                    onChange={handleM1RSite2Selection}
                                >
                                    {vector !== null && vector.mcs1.slice(vector.mcs1.findIndex((x)=> x === mcs1restriction1)+1,).map((site) => <MenuItem value={site}>{site}</MenuItem>)}
                                </Select>
                                <FormHelperText>Restriction Site 2</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container minHeight={180} justifyContent="center" spacing={2}>
                    {showMCS2 ? <MCS2 /> : null}
                    {showMCS2 ? <SiteSelector /> : null}
                    </Grid>
                    <DialogActions>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item key={0}>
                                {vectorpopupstate[1]?<Button
                                    variant={"contained"}
                                    onClick={handleAddBatch}>
                                    Batch Add To Vector
                                </Button>
                                :<Button
                                    variant={"contained"}
                                    onClick={handleAddSingle}>
                                    Add To Vector
                                </Button>}
                            </Grid>
                            <Grid item key={1}>
                                <Button
                                    variant={"contained"}
                                    onClick={() => changevectorpopupstate([false,false])}>
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </DialogActions>
                </Box>
            </Dialog>
        </React.Fragment>
    )
}

export default VectorSelectorPopUp

/*<Button
                                    variant={"contained"}
                                    onClick={() => {
                                        console.log("vector state", vector)
                                        console.log("restriction site 1", mcs1restriction1)
                                        console.log("restriction site 2", mcs1restriction2)
                                        console.log("showMCS2", showMCS2)
                                        console.log("site selection", siteselection)
                                    }
                                    }>
                                    Print Data
                                </Button>*/