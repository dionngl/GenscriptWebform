import {
    Checkbox,
    FormControlLabel,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    TextField,
} from "@mui/material/";
import React from "react";
import update from "immutability-helper";


function InsectItem ({con_index, ins_index, insChecks,  constructs, handleSDSEval, handleWesternEval, handleGenerateVirus, insectChecks, setInsectChecks, ConstructNumber, projectnumber}) {

    let construct = constructs[con_index]
    let construct_name_site1 = (construct.Site1!==null?construct.Site1.map((subelement) => subelement.element_name).join("-"):"")
    construct_name_site1 = (construct.Site1!==null?(construct.Site1[0].element_sequence.slice(0,1)==="M"?construct_name_site1:"M-"+construct_name_site1):construct_name_site1)
    let construct_name_site2 = (construct.Site2!==null?construct.Site2.map((subelement) => subelement.element_name).join("-"):"")
    construct_name_site2 = (construct.Site2!==null?(construct.Site2[0].element_sequence.slice(0,1)==="M"?construct_name_site2:"M-"+construct_name_site2):construct_name_site2)
    let isDuet = construct.vector_info.mcs2!==null
    let construct_name = ""
    if (isDuet) {
        construct_name = ((construct_name_site1.length>0?construct_name_site1+" in site 1; ":"")+(construct_name_site2.length>0?construct_name_site2+" in site 2":""))
    } else {
        construct_name = construct_name_site1
    }
    let construct_number = Number(ConstructNumber)+Number(ins_index)
    construct_name = "P"+projectnumber+"-"+String(construct_number)+": "+construct_name


    const handleReference = (index) => (event) => {
        let temp = event.target.value
        temp = temp.toUpperCase()
        temp = temp.slice(0,1).replace(/^[^U]/g, "U")+temp.slice(1,temp.length)
        temp = temp.slice(0,1)+[...temp.slice(1,8)].map((i)=>i.replace(/[^A-Z0-9]/g, "")).join('')+temp.slice(8,temp.length)
        temp = temp.slice(0,8)+temp.slice(8,9).replace(/[^G]/g, "G")+temp.slice(9,temp.length)
        temp = temp.slice(0,9)+temp.slice(9,10).replace(/[^0]/g, "0")+temp.slice(10,temp.length)
        temp = temp.slice(0,10)+temp.slice(10,11).replace(/[^-]/g, "-")+temp.slice(11,temp.length)
        temp = temp.slice(0,11)+temp.slice(11,14).replace(/[^0-9]/g, "")
        let temp_state = update(insectChecks, {[index]: {3: {$set: temp}}})
        setInsectChecks(temp_state)
    }

    return <ListItem fullWidth>
        <ListItemText
            primary={construct_name}
            secondary={"in "+construct.vector_info.vector_name}/>
        <ListItemSecondaryAction>
            <TextField
                        size="small"
                        label="Project Reference"
                        helperText="Exampless: U528PGHGG0"
                        value={insChecks[3]}
                        onChange={handleReference(ins_index)}
                        sx={{height:'100%',
                            mt:1,
                            pr:15.5,
                            '.MuiFormHelperText-root': {mt:-0.4} }}
                    />
            <FormControlLabel
                sx={{'.MuiFormControlLabel-label': {mt:-1.5}}}
                labelPlacement="bottom"
                control={<Checkbox
                    checked={insChecks[2]}
                    onChange={handleGenerateVirus(ins_index, insectChecks, setInsectChecks)} />}
                label="Generate Virus"/>
            <FormControlLabel
                sx={{'.MuiFormControlLabel-label': {mt:-1.5}}}
                labelPlacement="bottom"
                control={<Checkbox
                    checked={insChecks[0]}
                    onChange={handleSDSEval(ins_index, insectChecks, setInsectChecks)} />}
                label="SDS-PAGE"/>
            <FormControlLabel
                sx={{'.MuiFormControlLabel-label': {mt:-1.5}}}
                labelPlacement="bottom"
                control={<Checkbox
                    checked={insChecks[1]}
                    onChange={handleWesternEval(ins_index, insectChecks, setInsectChecks)} />}
                label="Western"/>
        </ListItemSecondaryAction>
    </ListItem>
}

export default InsectItem