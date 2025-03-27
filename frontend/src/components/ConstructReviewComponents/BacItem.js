import {
    Checkbox,
    Collapse,
    ToggleButton,
    FormControlLabel,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Select,
    TextField
} from "@mui/material/";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState }  from "react";
import update from "immutability-helper";


function BacItem ({con_index, bac_index, bacChecks, constructs, handleSDSEval, handleWesternEval, bacterialChecks, setBacterialChecks, handleBacStrainSelector, currentConstructNumber, projectnumber}) {

    const [collapse, setCollapse] = useState(false)

    const handleCollapse = () => {
        setCollapse(!collapse)
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
        let temp_state = update(bacterialChecks, {[index]: {3: {$set: temp}}})
        setBacterialChecks(temp_state)
    }

    const handleProteaseCheckboxes = (bac_index, index) => (event) => {
        let other_index = (index===4?5:4)
        let other_state = bacChecks[other_index]
        other_state = (event.target.checked&&other_state?false:other_state)
        let temp_state = update(bacterialChecks, {[bac_index]: {[index]: {$set: event.target.checked}}})
        temp_state = update(temp_state, {[bac_index]: {[other_index]: {$set: other_state}}})
        setBacterialChecks(temp_state)
    }

    let construct = constructs[con_index]
    let construct_name_site1 = (construct.Site1!==null?construct.Site1.map((subelement) => subelement.element_name).join("-"):"")
    construct_name_site1 = (construct.Site1!==null?(construct.Site1[0].element_sequence.slice(0,1)==="M"?construct_name_site1:"M-"+construct_name_site1):construct_name_site1)
    let construct_name_site2 = (construct.Site2!==null?construct.Site2.map((subelement) => subelement.element_name).join("-"):"")
    construct_name_site2 = (construct.Site2!==null?(construct.Site2[0].element_sequence.slice(0,1)==="M"?construct_name_site2:"M-"+construct_name_site2):construct_name_site2)
    let construct_seq_site1 = (construct.Site1!==null?construct.Site1.map((subelement) => subelement.element_sequence).join("-"):"")
    let construct_seq_site2 = (construct.Site2!==null?construct.Site2.map((subelement) => subelement.element_sequence).join("-"):"")
    let isDuet = construct.vector_info.mcs2!==null
    let construct_name = ""
    if (isDuet) {
        construct_name = ((construct_name_site1.length>0?construct_name_site1+" in site 1; ":"")+(construct_name_site2.length>0?construct_name_site2+" in site 2":""))
    } else {
        construct_name = construct_name_site1
    }
    let construct_number = Number(currentConstructNumber)+Number(bac_index)
    construct_name = "P"+projectnumber+"-"+String(construct_number)+": "+construct_name

    //need to check if a construct has a TEV/SUMO site and is not in a pCDFDUET vector
    let has_tev = construct.vector_info.vector_name!=="pCDFDuet-1"&&(construct_seq_site1.search(/ENLYFQ[GS]/g)!==-1||construct_seq_site2.search(/ENLYFQ[GS]/g)!==-1)
    const SUMO_regex = RegExp('SDSEVNQEAKPEVKPEVKPETHINLKVSDGSSEIFFKIKKTTPLRRLMEAFAKRQGKEMDSLRFLYDGIRIQADQTPEDLDMEDNDIIEAHREQIGG')
    let has_SUMO = construct.vector_info.vector_name!=="pCDFDuet-1"&&(SUMO_regex.test(construct_seq_site1)||SUMO_regex.test(construct_seq_site2))

    return (
        <List>
            <ListItem fullWidth sx={{maxHeight:'5vh'}}>
                <ListItemText
                    primary={construct_name}
                    secondary={"in "+construct.vector_info.vector_name}/>
                <ListItemSecondaryAction>
                    <TextField
                        size="small"
                        label="Project Reference"
                        helperText="Exampless: U528PGHGG0"
                        value={bacChecks[3]}
                        onChange={handleReference(bac_index)}
                        sx={{height:'100%',
                            mt:1,
                            pr:10,
                            '.MuiFormHelperText-root': {mt:-0.4} }}
                    />
                    <FormControlLabel sx={{'.MuiFormControlLabel-label': {mt:-1.5}}}
                                      labelPlacement="bottom"
                                      control={<Checkbox
                                          checked={bacChecks[0]}
                                          onChange={handleSDSEval(bac_index, bacterialChecks, setBacterialChecks)} />}
                                      label="SDS-PAGE"/>
                    <FormControlLabel sx={{'.MuiFormControlLabel-label': {mt:-1.5}}}
                                      labelPlacement="bottom"
                                      control={<Checkbox
                                          checked={bacChecks[1]}
                                          onChange={handleWesternEval(bac_index, bacterialChecks, setBacterialChecks)} />}
                                      label="Western"/>
                    <Select
                        sx={{maxHeight:'4vh',
                            mr:1.5}}
                        disabled={!(bacChecks[0]||bacChecks[1])}
                        multiple
                        value={bacChecks[2]}
                        onChange={handleBacStrainSelector(bac_index)}>
                        <MenuItem value={"BL21(DE3)"}>BL21(DE3)</MenuItem>
                        <MenuItem value={"SHUFFLE"}>SHUFFLE</MenuItem>
                    </Select>
                    <ToggleButton
                        disabled={!(has_tev||has_SUMO)}
                        sx={{maxHeight:'4vh', mb:0.5}}
                        selected={collapse}
                        onChange={handleCollapse}>{collapse?<ExpandLessIcon/>:<ExpandMoreIcon/>}</ToggleButton>
                </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
                <Collapse in={collapse}  timeout="auto" unmountOnExit>
                    <FormControlLabel sx={{'.MuiFormControlLabel-label': {mt:-1.5}}}
                                      labelPlacement="bottom"
                                      control={<Checkbox
                                          checked={bacChecks[4]}
                                          disabled={!has_tev}
                                          onChange={handleProteaseCheckboxes(bac_index,4)}
                                           />}
                                      label="Co-express with TEV Protease"/>
                    <FormControlLabel sx={{'.MuiFormControlLabel-label': {mt:-1.5}}}
                                      labelPlacement="bottom"
                                      control={<Checkbox
                                          checked={bacChecks[5]}
                                          disabled={!has_SUMO}
                                          onChange={handleProteaseCheckboxes(bac_index,5)}
                                           />}
                                      label="Co-express with ULP1 Protease"/>
                </Collapse>
            </ListItem>
        </List>

    )
}


export default BacItem