import React, { useState, useCallback } from "react";
import {
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Checkbox,
    Icon,
    IconButton,
    TextField,
    Select,
    MenuItem,
    Button,
    FormControlLabel,
    Collapse,
    } from "@mui/material/";
import { useLocation, useNavigate } from 'react-router-dom';
import update from "immutability-helper";
import MammItem from "./ConstructReviewComponents/MammItem";
import BacItem from "./ConstructReviewComponents/BacItem";
import InsectItem from "./ConstructReviewComponents/InsectItem";

function ConstructReviewPage ({}) {

    let location = useLocation();
    const navigate = useNavigate();
    const [currentConstructNumber, setCurrentConstructNumber] = useState(1)

    let data = location.state
    let constructs = data.ConstructList
    let construct_indices = constructs.map((_,index) => index)
    let bacterial_indices = construct_indices.filter((index) => constructs[index].vector_info.vector_system==="Bacterial")
    let insect_indices = construct_indices.filter((index) => constructs[index].vector_info.vector_system==="Insect")
    let mammalian_indices = construct_indices.filter((index) => constructs[index].vector_info.vector_system==="Mammalian")
    let special_indices = construct_indices.filter((index) => constructs[index].vector_info.vector_system==="All")

    let InsectConstructNumber = currentConstructNumber+bacterial_indices.length
    let MammalianConstructNumber = InsectConstructNumber+insect_indices.length
    //These should be an array of objects as opposed to an array of arrays
    //until I have time to fix that, here are the keys
    //Bacterial: SDS, Western, Strain selections, project reference, coexpress with TEV, coexpress with ULP1 (last two are mutually exclusive)
    const [bacterialChecks, setBacterialChecks] = useState(bacterial_indices.map((ind) => [true, true, ["BL21(DE3)"], "", false, false]))
    //Insect: SDS, Western, Generate Virus, project reference
    const [insectChecks, setInsectChecks] = useState(insect_indices.map((ind) => [true, true, true, ""]))
    //Insect: DNA amount, project reference
    const [mammalianAmounts, setMammalianAmounts] = useState(mammalian_indices.map(()=> [1, ""]))

    const handleConstructNumber = (event) => {
        let temp = event.target.value
        temp = temp.replace(/[^0-9]/g, "")
        temp = temp.replace(/^0*/g, "")
        temp = ((temp===""||temp==="0")?"1":temp)
        temp = Number(temp)
        temp =  (temp>1000?1000:temp)
        setCurrentConstructNumber(temp)
    }

    const handleBacStrainSelector = (index) => (event) => {
        let temp_value = ((bacterialChecks[index][0]||bacterialChecks[index][1])&&event.target.value.length===0?["BL21(DE3)"]:event.target.value)
        let temp = update(bacterialChecks, {[index]: {2: {$set: temp_value}}})
        setBacterialChecks(temp)
    }

    const handleSDSEval = (index, state, setter) => (event) => {
        let temp = update(state, {[index]: {0: {$set: event.target.checked}}})
        setter(temp)
    }

    const handleWesternEval = (index, state, setter) => (event) => {
        let temp = update(state, {[index]: {1: {$set: event.target.checked}}})
        setter(temp)
    }

    const handleGenerateVirus = (index, state, setter) => (event) => {
        let temp = update(state, {[index]: {2: {$set: event.target.checked}}})
        setter(temp)
    }

    const BacHandler = (con_index, index, currentConstructNumber) => {

        return(
            <BacItem
                con_index={con_index}
                bac_index={index}
                bacChecks={bacterialChecks[index]}
                constructs={constructs}
                handleSDSEval={handleSDSEval}
                handleWesternEval={handleWesternEval}
                bacterialChecks={bacterialChecks}
                setBacterialChecks={setBacterialChecks}
                handleBacStrainSelector={handleBacStrainSelector}
                currentConstructNumber={currentConstructNumber}
                projectnumber={data.ProjectNumber}/>
        )

    }

    const InsectHandler = (con_index, index) => {

        return(
            <InsectItem
                con_index={con_index}
                ins_index={index}
                insChecks={insectChecks[index]}
                constructs={constructs}
                handleSDSEval={handleSDSEval}
                handleWesternEval={handleWesternEval}
                handleGenerateVirus={handleGenerateVirus}
                insectChecks={insectChecks}
                setInsectChecks={setInsectChecks}
                ConstructNumber={InsectConstructNumber}
                projectnumber={data.ProjectNumber}
            />
        )
    }

    const MammHandler = (con_index, index) => {

        return (
            <MammItem
                constr={constructs[con_index]}
                mam_index={index}
                mammalianAmounts={mammalianAmounts}
                setMammalianAmounts={setMammalianAmounts}
                ConstructNumber={MammalianConstructNumber}
                projectnumber={data.ProjectNumber}/>
        )
    }

    const BacterialHeader = () => {
        const handleSDSChange = (event) => {
            let temp = bacterialChecks
                        temp = temp.map((element) => update(element, {0: {$set: event.target.checked}}))
            setBacterialChecks(temp)
        }

        const handleWesternChange = (event) => {
            let temp = bacterialChecks
                        temp = temp.map((element) => update(element, {1: {$set: event.target.checked}}))
            setBacterialChecks(temp)
        }

        let sdsAllTrue = bacterialChecks.every((element) => element[0] === true)
        let sdsAllFalse = bacterialChecks.every((element) => element[0] === false)

        let westernAllTrue = bacterialChecks.every((element) => element[1] === true)
        let westernAllFalse = bacterialChecks.every((element) => element[1] === false)

        return (
            <ListItem fullWidth sx={{backgroundColor:'#aabbff', minHeight:'7vh'}}>
                <ListItemText
                    primary={"Bacterial Constructs3"}/>
                <ListItemSecondaryAction>
                    <FormControlLabel
                        sx={{'.MuiFormControlLabel-label': {mt:-1.5}}}
                        labelPlacement="bottom"
                        control={
                        <Checkbox
                            checked={sdsAllTrue}
                            indeterminate={sdsAllTrue===sdsAllFalse}
                            onChange={handleSDSChange}/>}
                                      label="Select All SDS-PAGE"/>
                    <FormControlLabel
                        sx={{'.MuiFormControlLabel-label': {mt:-1.5}}}
                        labelPlacement="bottom"
                        control={
                        <Checkbox
                            checked={westernAllTrue}
                            indeterminate={westernAllTrue===westernAllFalse}
                            onChange={handleWesternChange}/>}
                                      label="Select All Western"/>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }

    const InsectHeader = () => {

        const handleVirusChange = (event) => {
            let temp = insectChecks
                        temp = temp.map((element) => update(element, {2: {$set: event.target.checked}}))
            setInsectChecks(temp)
        }

        const handleSDSChange = (event) => {
            let temp = insectChecks
                        temp = temp.map((element) => update(element, {0: {$set: event.target.checked}}))
            setInsectChecks(temp)
        }

        const handleWesternChange = (event) => {
            let temp = insectChecks
                        temp = temp.map((element) => update(element, {1: {$set: event.target.checked}}))
            setInsectChecks(temp)
        }

        let sdsAllTrue = insectChecks.every((element) => element[0] === true)
        let sdsAllFalse = insectChecks.every((element) => element[0] === false)

        let westernAllTrue = insectChecks.every((element) => element[1] === true)
        let westernAllFalse = insectChecks.every((element) => element[1] === false)

        let virusAllTrue = insectChecks.every((element) => element[2] === true)
        let virusAllFalse = insectChecks.every((element) => element[2] === false)

        return (
            <ListItem fullWidth sx={{backgroundColor:'#aabbff', minHeight:'7vh'}}>
                <ListItemText
                    primary={"Insect Constructs"}/>
                    <FormControlLabel
                        sx={{'.MuiFormControlLabel-label': {mt:-1.5}}}
                        labelPlacement="bottom"
                        control={
                    <Checkbox
                        checked={virusAllTrue}
                        indeterminate={virusAllTrue===virusAllFalse}
                        onChange={handleVirusChange}/>}
                                  label="Select All Virus"/>
                <FormControlLabel
                    sx={{'.MuiFormControlLabel-label': {mt:-1.5}}}
                    labelPlacement="bottom"
                    control={
                    <Checkbox
                        checked={sdsAllTrue}
                        indeterminate={sdsAllTrue===sdsAllFalse}
                        onChange={handleSDSChange}/>}
                                  label="Select All SDS-PAGE"/>
                <FormControlLabel
                    sx={{'.MuiFormControlLabel-label': {mt:-1.5}}}
                    labelPlacement="bottom"
                    control={
                    <Checkbox
                        checked={westernAllTrue}
                        indeterminate={westernAllTrue===westernAllFalse}
                        onChange={handleWesternChange}/>}
                                  label="Select All Western"/>
            </ListItem>
        )
    }

    const MammalianHeader = () => {

        const [headerAmount, setHeaderAmount] = useState(1)

        const handleAmountChange = (event) => {
            let temp = event.target.value
            temp = temp.replace(/[^0-9]/g, "")
            temp = temp.replace(/^0*/g, "")
            temp = ((temp===""||temp==="0")?"1":temp)
            temp = Number(temp)
            temp =  (temp>20?20:temp)
            setHeaderAmount(temp)
        }

        const handleApplyToAll = () => {
            setMammalianAmounts((prevAmounts) => prevAmounts.map(() => headerAmount) )
        }

        return (
            <ListItem fullWidth sx={{backgroundColor:'#aabbff', minHeight:'7vh'}}>
                <ListItemText
                    primary={"Mammalian Constructs"}/>
                    <FormControlLabel
                        sx={{'.MuiFormControlLabel-label': {mr:2}}}
                    labelPlacement="start"
                    control={<TextField
                        sx={{maxWidth:"20%",
                        mr:5}}
                        size="small"
                        defaultValue={headerAmount}
                        value={headerAmount}
                        onChange={handleAmountChange} />}
                    label="Amount of DNA"/>
                    <Button
                    variant={"contained"}
                    onClick={handleApplyToAll}>
                        Apply To All
                    </Button>
            </ListItem>
        )
    }

    //TODO: collate data, create object to pass data and navigate to PDF
    const handleToPDFReview = () => {
        let bacterial_constructs = bacterial_indices.map((ind)=>constructs[ind])
        bacterial_constructs = bacterial_constructs.map((construct, ind) => {
            return update(construct, {
                SDS: {$set: bacterialChecks[ind][0]},
                Western: {$set: bacterialChecks[ind][1]},
                Strains: {$set: bacterialChecks[ind][2]},
                Reference: {$set: bacterialChecks[ind][3]},
                CoTEV: {$set: bacterialChecks[ind][4]},
                CoULP1: {$set: bacterialChecks[ind][5]},
                Number: {$set: currentConstructNumber+ind}
            })})
        let offset = bacterial_constructs.length
        let insect_constructs = insect_indices.map((ind)=>constructs[ind])
        insect_constructs = insect_constructs.map((construct, ind)=> {
            return update(construct, {
                SDS: {$set: insectChecks[ind][0]},
                Western: {$set: insectChecks[ind][1]},
                Virus: {$set: insectChecks[ind][2]},
                Reference: {$set: insectChecks[ind][3]},
                Number: {$set: currentConstructNumber+ind+offset}
            })
        })
        offset = offset + insect_constructs.length
        let mammalian_constructs = mammalian_indices.map((ind)=>constructs[ind])
        mammalian_constructs = mammalian_constructs.map((construct, ind)=> {
            return update(construct, {
                DNAAmount: {$set: mammalianAmounts[ind][0]},
                Reference: {$set: mammalianAmounts[ind][1]},
                Number: {$set: currentConstructNumber+ind+offset}
            })
        })
        navigate("/PDFReviewer", {state: {
                Submitter: data.Submitter,
                TCPR: data.TCPR,
                ProjectNumber: data.ProjectNumber,
                GeneList: data.GeneList,
                BacterialConstructs: bacterial_constructs,
                InsectConstructs: insect_constructs,
                MammalianConstructs: mammalian_constructs,
            }})

    }

     //TODO: at end, make pretty

    return (
        <div>
            <Grid container fullWidth sx={{width:"100%", height:"90vh", overflow: "hidden", overflowY: "scroll"}} justifyContent={"center"} overflow={"auto"}>
                <Grid container justifyContent={"center"} sx={{mt:2}}>
                    <Grid item>
                        <Typography>Review Construct Options12</Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent={"center"} sx={{mt:2}}>
                    <Grid item>
                        <TextField
                        size="small"
                        label="Starting Construct Number"
                        value={currentConstructNumber}
                        onChange={handleConstructNumber}
                        sx={{height:'100%',
                            mt:1,
                            }}
                    />
                    </Grid>
                </Grid>
                <Grid container fullWidth sx={{width:"100%"}} justifyContent={"center"}>
                    <List dense={true} fullWidth sx={{width:"70%"}}>
                        <BacterialHeader/>
                        {bacterial_indices.map((con_index, index)=> BacHandler(con_index, index, currentConstructNumber))}
                    </List>
                </Grid>
                <Grid container fullWidth sx={{width:"100%"}} justifyContent={"center"}>
                    <List dense={true} fullWidth sx={{width:"70%"}}>
                        <InsectHeader/>
                        {insect_indices.map((con_index, index)=> InsectHandler(con_index, index))}
                    </List>
                </Grid>
                <Grid container fullWidth sx={{width:"100%"}} justifyContent={"center"}>
                    <List dense={true} fullWidth sx={{width:"70%"}}>
                        <MammalianHeader/>
                        {mammalian_indices.map((con_index, index)=> MammHandler(con_index, index))}
                    </List>
                </Grid>
            </Grid>
            <Grid container fullWidth sx={{width:"100%"}} justifyContent={"center"}>
                <Button
                    variant={'contained'}
                    onClick={()=>handleToPDFReview()}>
                    Click to View PDF
                </Button>
                <Button
                    variant={'contained'}
                    onClick={() => {
                        console.log("CHECK BUTTON START")
                        console.log("data", data)
                        console.log("bac constructs", bacterial_indices.map((ind) =>constructs[ind]))
                        console.log("mamState", mammalianAmounts)
                        console.log("CHECK BUTTON END")
                        return }}>
                    Debugger
                </Button>
            </Grid>
        </div>
    )
}

export default ConstructReviewPage
