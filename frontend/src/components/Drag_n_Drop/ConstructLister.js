import React from 'react'
import {
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    ListItemButton,
    IconButton,
    Icon,
    Checkbox,
    FormControlLabel,
    Grid,
} from "@mui/material/"
import update from "immutability-helper";



function ConstructLister({construct_list, setConstructList, setBoard, setMutationString, setSelectedGene}) {

    var c_list = [...construct_list]

    const Construct = ({element, ind}) => {


        const handleDelete = (ind) => {
            c_list.splice(ind,1)
            setConstructList(c_list)
        }

        const handleClick = (construct) => {
            setBoard(() => [...construct])
            setSelectedGene(null)
            setMutationString("")
        }

        const handleCheckSite1 = (index) => (event) => {
            console.log("check site 1")
            let temp = update(element, {Site1Selected: {$set: event.target.checked}} )
            setConstructList((prev_list) => update(prev_list, {[index]: {$set: temp}}))

        }

        const handleCheckSite2 = (index) => (event) => {
            console.log("check site 2")
            let temp = update(element, {Site2Selected: {$set: event.target.checked}} )
            setConstructList((prev_list) => update(prev_list, {[index]: {$set: temp}}))

        }


        let construct_name_site1 = (element.Site1!==null?element.Site1.map((subelement) => subelement.element_name).join("-"):"")
        let construct_name_site2 = (element.Site2!==null?element.Site2.map((subelement) => subelement.element_name).join("-"):"")
        let isDuet = element.vector_info.mcs2!==null
        let construct_name = ""
        if (isDuet) {
            construct_name = ((construct_name_site1.length>0?construct_name_site1+" in site 1; ":"")+(construct_name_site2.length>0?construct_name_site2+" in site 2":""))
        } else {
            construct_name = construct_name_site1
        }
        let deutSite1 = !(construct_name_site1.length>0)
        let deutSite2 = !(construct_name_site2.length>0)
        let clickConstruct = (construct_name_site2.length>0?(construct_name_site1.length>0?null:element.Site2):element.Site1)

        return <ListItem>
            <ListItemButton disabled={!(deutSite1||deutSite2)} onClick={()=>handleClick(clickConstruct)} dense>
                <ListItemText
                    primary={construct_name}
                    secondary={element.vector_info.vector_name}
                />
            </ListItemButton>
            <ListItemSecondaryAction>
                <FormControlLabel
                    control={<Checkbox
                                checked={element.Site1Selected}
                                disabled={deutSite1}
                                onChange={handleCheckSite1(ind)} />}
                />
                {isDuet ? <FormControlLabel
                    control={<Checkbox
                                checked={element.Site2Selected}
                                disabled={deutSite2}
                                onChange={handleCheckSite2(ind)} />}
                />:<FormControlLabel
                    control={<Checkbox
                                sx = {{'&.Mui-disabled': {color: 'rgba(0,0,0,0)'}}}
                                checked={false}
                                disabled={true}
                                 />}
                />}
                <IconButton
                    edge="end"
                    ariaLabel="Delete"
                    value={ind}
                    onClick={() => handleDelete(ind)}
                >
                    <Icon sx={{ fontSize: 10 }}>X</Icon>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    }


    return (
        <>
            <div className={'construct-lister'}>
              <p1>Construct List:</p1>
            <Grid container fullWidth sx={{height: "100%"}}>
                <List
                    dense={true}
                    sx={{
                        width: "100%",
                        height: "100%",
                        overflow: 'auto',
                    }}>
                    {c_list.map((elem, ind) => <Construct element={elem} ind={ind}/>)}
                </List>
            </Grid>
            </div>
        </>
    )
}

export default ConstructLister
