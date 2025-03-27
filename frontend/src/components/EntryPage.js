import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {
    Button,
    FormControl,
    FormHelperText,
    Grid,
    Icon,
    IconButton,
    List,
    ListItem,
    ListItemText,
    TextareaAutosize,
    TextField,
    Typography,
} from "@mui/material/"

const uniprot_regex = RegExp('[OPQ][0-9][A-Z0-9]{3}[0-9]|[A-NR-Z][0-9]([A-Z][A-Z0-9]{2}[0-9]){1,2}')

function EntryPage ({}) {

    const [proteinName, setProteinName] = useState("")
    const [uniprotID, setUniprotID] = useState("")
    const [proteinSeq, setProteinSeq] = useState("")
    const [residueOffset, setResidueOffset] = useState(1)
    const [TCPRcode, setTCPRcode] = useState("")
    const [projectNumber, setProjectNumber] = useState("")
    const [submitterName, setSubmitterName] = useState("")
    const [geneList, setGeneList] = useState([])
    const navigate = useNavigate()


    const handleProteinName = e => {
        setProteinName(e.target.value)
    }

    const handleUniprotIDchange = e => {
        setUniprotID(e.target.value)
    }

    const handleUniprotIDblur = e => {
        console.log("in Uniprot")
        let temp = e.target.value
        temp = (uniprot_regex.test(temp) ? temp : "")
        setUniprotID(temp)
    }

    const handleResidueIndex = e => {
        console.log("RI", e.target.value)
        let temp = Number(e.target.value)
        console.log("RI type", typeof temp)
        let isInteger = Number.isInteger(temp)
        let isPositive = temp >= 1
        temp = (isInteger && isPositive ? temp : 1 )
        setResidueOffset(temp)
    }

    const handleAminoSequence = e => {
        let temp = e.target.value
        temp = temp.replace(/[^ac-ik-np-tvwyAC-IK-NP-TVWY]/g, "").toUpperCase()
        setProteinSeq(() => temp)
    }

    const handleTCPRcode = e => {
        setTCPRcode(e.target.value)
    }

    const handleSubmitterNameChange = e => {
        setSubmitterName(e.target.value)
    }

    const handleProjectNumber = e => {
        let temp = Number(e.target.value)
        let isInteger = Number.isInteger(temp)
        let isPositive = temp >= 0
        temp = (isInteger && isPositive ? temp : 0 )
        setProjectNumber(temp)
    }

    const handleAddGeneButtonPress = () => {
        let temp_proteinName = proteinName
        let temp_Uniprot = (uniprotID.length>0 ? uniprotID : null)
        let temp_offset = residueOffset
        let temp_sequence = proteinSeq
        let temp_construct = "("+proteinSeq.slice(0,1)+temp_offset.toString()+"-"+proteinSeq.slice(-1)+(temp_offset+temp_sequence.length-1).toString()+")"
        let temp_gene = {
            element_name: "["+temp_proteinName+" "+temp_construct+"]",
            element_sequence: temp_sequence,
            element_index: 1,
            element_offset: temp_offset,
            element_uniprot: temp_Uniprot,
            element_system: "All",
            element_color: "#FFFFFF",
            element_type: "Gene",
            element_immutable_sequence:temp_sequence,
            element_immutable_name:temp_proteinName,
            element_mutations:null,}
        setGeneList((prevlist) => {
            return [...prevlist, temp_gene]
        })
        setProteinName("")
        setUniprotID("")
        setResidueOffset(1)
        setProteinSeq("")
    }

    const handleContinueButtonPress = () => {
        let temp_gene_list = [...geneList]
        if (proteinSeq.length > 0) {
            let temp_proteinName = proteinName
            let temp_Uniprot = (uniprotID.length > 0 ? uniprotID : null)
            let temp_offset = residueOffset
            let temp_sequence = proteinSeq
            let temp_Redacted_Name = "p"+String(projectNumber)
            let temp_construct = "(" + proteinSeq.slice(0, 1) + temp_offset.toString() + "-" + proteinSeq.slice(-1) + (temp_offset + temp_sequence.length - 1).toString() + ")"
            let temp_gene = {
                element_name: "[" + temp_proteinName + " " + temp_construct + "]",
                element_sequence: temp_sequence,
                element_index: 1,
                element_offset: temp_offset,
                element_uniprot: temp_Uniprot,
                element_system: "All",
                element_color: "#FFFFFF",
                element_type: "Gene",
                element_immutable_sequence: temp_sequence,
                element_immutable_name: temp_proteinName,
                element_mutations: null,
            }
            temp_gene_list = [...geneList, temp_gene]
        }
        temp_gene_list.forEach((e,i)=>e["element_redacted_name"] = "p"+String(projectNumber)+"_"+String(i+1))
        navigate("/ConstructDesigner", { state: {
            Submitter: submitterName,
            TCPR: TCPRcode,
            ProjectNumber: projectNumber,
            GeneList: temp_gene_list
        }})
    }

    const handleDeleteGene = (ind) => {
        let temp = geneList.splice(ind,1)
        setGeneList(temp)
    }

    const Gene = ({element, ind}) => {
        let gene_name = element.element_name
        return <ListItem
                secondaryAction={
                    <IconButton
                        edge="end"
                        ariaLabel="Delete"
                        value={ind}
                        onClick={() => handleDeleteGene(ind)}
                    >
                        <Icon sx={{ fontSize: 10 }}>X</Icon>
                    </IconButton>
                }>
                <ListItemText
                    primary={gene_name}
                />
            </ListItem>
    }

    return (
        <div className="center">
            <Grid container justifyContent="center" spacing={3}>
                <Grid container justifyContent="center" spacing={3}>
                    <Grid item key={0}>
                        <Typography component={"h4"} variant={"h4"}>
                            Create New Genscript Order
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container mt={1} justifyContent="center" spacing={3}>
                    <Grid item key={0}>
                        <FormControl>
                            <TextField
                                required={true}
                                type={"text"}
                                label={"Your Name"}
                                variant={"outlined"}
                                value={submitterName}
                                onChange={handleSubmitterNameChange}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item key={1}>
                        <FormControl>
                            <TextField
                                required={true}
                                type={"text"}
                                label={"TCPR/Compass Code"}
                                variant={"outlined"}
                                value={TCPRcode}
                                onChange={handleTCPRcode}
                            />
                            <FormHelperText>
                                <div align={"Left"}>
                                    Examples: GD 644021
                                </div>
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item key={2}>
                        <FormControl>
                            <TextField
                                required={true}
                                type={"number"}
                                label={"Project Number"}
                                variant={"outlined"}
                                value={projectNumber}
                                onChange={handleProjectNumber}
                            />
                            <FormHelperText>
                                <div align={"Left"}>
                                    Examples: 522 or 1032
                                </div>
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container mt={1} justifyContent="center" spacing={3}>
                    <Grid item key={0}>
                        <FormControl>
                            <TextField
                                required={true}
                                type={"text"}
                                label={"Protein Name"}
                                variant={"outlined"}
                                value={proteinName}
                                onChange={handleProteinName}
                            />
                        </FormControl>
                        <FormHelperText>
                                <div align={"Left"}>
                                    Examples: ARP1 (hu) or Pol (ec)
                                </div>
                            </FormHelperText>
                    </Grid>
                    <Grid item key={1}>
                        <FormControl>
                            <TextField
                                type={"text"}
                                label={"Uniprot ID"}
                                variant={"outlined"}
                                value={uniprotID}
                                onChange={handleUniprotIDchange}
                                onBlur={handleUniprotIDblur}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item key={2}>
                        <FormControl>
                            <TextField
                                type={"number"}
                                defaultValue={residueOffset}
                                label={"Starting Residue Position"}
                                variant={"outlined"}
                                value={residueOffset}
                                onChange={handleResidueIndex}
                            />
                            <FormHelperText>
                                <div align={"Left"}>
                                    Used if you are entering a partial sequence
                                </div>
                            </FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container fullWidth  mt={1} justifyContent="center" spacing={3}>
                    <Grid item key={0} sx={{width:(geneList.length>0?"65%":"100%")}}>
                        <FormControl fullWidth>
                            <TextField
                                label={"Enter Protein Amino Acid Sequence"}
                                required={true}
                                multiline={true}
                                resize={false}
                                rows={10}
                                value={proteinSeq}
                                onChange={handleAminoSequence}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item key={1} sx={{width:(geneList.length>0?"30%":"0%")}}>
                        <List dense={true}>
                            {geneList.map((elem, ind) => <Gene element={elem} ind={ind}/>)}
                        </List>
                    </Grid>
                </Grid>
                <Grid container mt={1} justifyContent="center" spacing={3}>
                    <Grid item key={0}>
                        <Button disabled={!((proteinName.length>0) && (proteinSeq.length>0))} color="primary" variant={"contained"} onClick={handleAddGeneButtonPress}>
                            Add Another Gene
                        </Button>
                    </Grid>
                    <Grid item key={1}>
                        <Button
                            disabled={!((TCPRcode.length>0) && (projectNumber>0) && (((proteinName.length>0) && (proteinSeq.length>0)) || geneList.length>0) && (submitterName.length>0))}
                            color="primary"
                            variant={"contained"}
                            onClick={handleContinueButtonPress}>
                            Go To Construct Designer
                        </Button>
                    </Grid>
                    <Grid item key={2}>
                        <Button
                            color="primary"
                            variant={"contained"}
                            onClick={ () => {
                                console.log("protein name length", proteinName.length);
                                console.log("proteinSeq length", proteinSeq.length);
                                console.log("testing ", (proteinName.length>0), (proteinSeq.length>0), !((proteinName.length>0) && (proteinSeq.length>0)) );
                                console.log("genelist", geneList);
                            }}>
                            Debug
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default EntryPage