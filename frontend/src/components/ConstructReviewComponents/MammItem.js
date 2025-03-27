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
    } from "@mui/material/";
import update from "immutability-helper";


function MammItem ({constr, mam_index, mammalianAmounts, setMammalianAmounts, ConstructNumber, projectnumber}) {

    const handleDNAAmount = (index) => (event) => {

        let temp = event.target.value
        temp = temp.replace(/[^0-9]/g, "")
        temp = temp.replace(/^0*/g, "")
        temp = ((temp===""||temp==="0")?"1":temp)
        temp = Number(temp)
        temp =  (temp>20?20:temp)
        let temp_state = update(mammalianAmounts, {[index]: {0: {$set: temp}}})
        setMammalianAmounts(temp_state)
    }

    const handleReference = (index) => (event) => {
        let temp = event.target.value
        temp = temp.toUpperCase()
        temp = temp.slice(0,1).replace(/^[^U]/g, "U")+temp.slice(1,temp.length)
        temp = temp.slice(0,1)+[...temp.slice(1,8)].map((i)=>i.replace(/[^A-Z0-9]/g, "")).join('')+temp.slice(8,temp.length)
        temp = temp.slice(0,8)+temp.slice(8,9).replace(/[^G]/g, "G")+temp.slice(9,temp.length)
        temp = temp.slice(0,9)+temp.slice(9,10).replace(/[^0]/g, "0")+temp.slice(10,temp.length)
        temp = temp.slice(0,10)+temp.slice(10,11).replace(/[^-]/g, "-")+temp.slice(11,temp.length)
        temp = temp.slice(0,11)+temp.slice(11,14).replace(/[^0-9]/g, "")
        let temp_state = update(mammalianAmounts, {[index]: {1: {$set: temp}}})
        setMammalianAmounts(temp_state)
    }


    let construct = constr
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
    let mamAmount = mammalianAmounts[mam_index][0]
    let construct_number = Number(ConstructNumber)+Number(mam_index)
    construct_name = "P"+projectnumber+"-"+String(construct_number)+": "+construct_name

    return (
        <ListItem fullWidth>
            <ListItemText
                primary={construct_name}
                secondary={"in "+construct.vector_info.vector_name}/>
            <ListItemSecondaryAction>
                <TextField
                        size="small"
                        label="Project Reference"
                        helperText="Exampless: U528PGHGG0"
                        value={mammalianAmounts[mam_index][1]}
                        onChange={handleReference(mam_index)}
                        sx={{height:'100%',
                            mt:1,
                            pr:14,
                            '.MuiFormHelperText-root': {mt:-0.4} }}
                    />
                <FormControlLabel
                    sx={{'.MuiFormControlLabel-label': {mr:2}}}
                    labelPlacement="start"
                    control={<TextField
                        size="small"
                        sx={{height:'100%',
                            maxWidth:'20%',
                            }}
                        key={mam_index}
                        defaultValue={mamAmount.toString()}
                        value={mamAmount.toString()}
                        onChange={handleDNAAmount(mam_index)} />}
                    label="Amount of DNA: "/>
            </ListItemSecondaryAction>
        </ListItem>
    )
}


export default MammItem