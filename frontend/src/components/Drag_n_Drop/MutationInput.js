import React, { useState } from 'react'
import {
    TextField,
    FormControl,
    FormHelperText,
    Select,
    InputLabel,
    MenuItem,
} from "@mui/material/";
import Button from "@mui/material/Button";
import update from "immutability-helper";

const mutation_regex = RegExp('^[ac-ik-np-tvwyAC-IK-NP-TVWY][0-9]{1,5}[ac-ik-np-tvwyAC-IK-NP-TVWY]$')
const deletion_regex = RegExp('^del[0-9]{1,5}-[0-9]{1,5}$|^del[0-9]{1,5}$')
//const insertion_regex = RegExp('^ins[0-9]{1,5}[ac-ik-np-tvwyAC-IK-NP-TVWY]+$')


function MutationInput ({disabled, board, setBoard, changepopupstate, changepopupmessage, mutationstring, setMutationString, selectedGene, setSelectedGene}) {

    var board_indices = board.map((_,index) => index)
    var mutable_elements_indices = board_indices.filter((ind) => board[ind].element_type === "Gene")

    function splitMutationInputs(item_list) {

        let draft_mutation_items = item_list.filter((item) => mutation_regex.test(item))
        let draft_deletion_items = item_list.filter((item) => deletion_regex.test(item))
        //let draft_insertion_items = item_list.filter((item) => insertion_regex.test(item))
        //let invalid_items = item_list.filter((item) => (!insertion_regex.test(item)&&!mutation_regex.test(item)&&!deletion_regex.test(item)))
        let invalid_items = item_list.filter((item) => (!mutation_regex.test(item)&&!deletion_regex.test(item)))

        let permanentSequence = board[selectedGene].element_immutable_sequence
        let index = board[selectedGene].element_offset

        let deletion_items_nonconflicting = []
        draft_deletion_items.forEach((item) => {
            var deletion_indices = item.slice(3,).split('-')
            deletion_indices = (deletion_indices.length > 1) ? deletion_indices : [deletion_indices[0],deletion_indices[0]]
            deletion_indices = deletion_indices.map((item) => Number(item))
            if ((index === deletion_indices[0]) && (deletion_indices[1] === (index + permanentSequence.length - 1))) {
                changepopupmessage('Deletion would delete entire protein. Discarding.')
                changepopupstate(true)
            } else if ((index <= deletion_indices[0])
                && (deletion_indices[0] <= deletion_indices[1])
                && (deletion_indices[1] <= (index + permanentSequence.length - 1))) {
                    if (!(deletion_items_nonconflicting.length > 0)) {
                        deletion_items_nonconflicting.push([deletion_indices[0],deletion_indices[1]])
                    } else {
                        deletion_items_nonconflicting.forEach((nonconflicting) => {
                            if ((nonconflicting[0] <= deletion_indices[0] && deletion_indices[0] <= nonconflicting[1]) ||
                                (nonconflicting[0] <= deletion_indices[1] && deletion_indices[1] <= nonconflicting[1])) {
                                    changepopupmessage('Deletion '+item+' overlaps with del'+nonconflicting[0]+'-'+nonconflicting[1]+". Discarding.")
                                    changepopupstate(true)
                            } else {
                                deletion_items_nonconflicting.push([deletion_indices[0],deletion_indices[1]])
                            }
                        })}
            } else {
                changepopupmessage('Deletion '+item+' is malformed. Discarding.')
                changepopupstate(true)
            }
        })

        draft_mutation_items = draft_mutation_items.map((item) => item.toUpperCase())
        draft_mutation_items.forEach((item) => {
            var amino = item.slice(0,1)
            var position = Number(item.slice(1,-1))
            if (!(position >= index && position <= (index + permanentSequence.length - 1))) {
                changepopupmessage('Point mutation '+item+' is not within range. Discarding.')
                changepopupstate(true)
            } else if (!(permanentSequence[position-index] === amino)) {
                changepopupmessage('Point mutation '+item+' mismatched: Residue '+position+' is '+permanentSequence[position-index]+' not '+amino+'. Discarding.')
                changepopupstate(true)
            } else if (deletion_items_nonconflicting.some((item) => ((item[0] <= position) && (item[1] >= position)))) {
                const conflicting_del = deletion_items_nonconflicting.find((item) => ((item[0] <= position) && (item[1] >= position)))
                changepopupmessage('Point mutation '+item+' inside deletion del'+conflicting_del[0]+'-'+conflicting_del[1]+'. Discarding.')
                changepopupstate(true)
            }
        })

        draft_mutation_items = draft_mutation_items.filter((item) => (Number(item.slice(1,-1)) >= index && Number(item.slice(1,-1)) <= (index + permanentSequence.length - 1)))
        draft_mutation_items = draft_mutation_items.filter((item) => (permanentSequence[item.slice(1,-1)-index] === item.slice(0,1)))
        draft_mutation_items = draft_mutation_items.filter((item) => !deletion_items_nonconflicting.some(jtem => (jtem[0] <= Number(item.slice(1,-1)))&&(Number(item.slice(1,-1)) <= jtem[1])))

        /*draft_insertion_items.forEach((item) => {
            var [idx, seq] = item.slice(3,).match(/[a-zA-Z]+|[0-9]+/g)
            if (!((index <= Number(idx)) && (Number(idx) <= (index + permanentSequence.length -1)))) {
                changepopupmessage('Insertion '+item+' is not within range. Discarding.')
                changepopupstate(true)
            } else if (deletion_items_nonconflicting.some((item) => ((item[0] <= Number(idx)) && (item[1] >= Number(idx))))) {
                var [start, fin] = deletion_items_nonconflicting.find((item) => (item[0] <= Number(idx))&&(item[1] >= Number(idx)))
                changepopupmessage('Insertion '+item+' inside deletion del'+start+'-'+fin+'. Discarding.')
                changepopupstate(true)
            }
        })

        draft_insertion_items = draft_insertion_items.map((item) => "ins"+item.slice(3,).toUpperCase())
        draft_insertion_items = draft_insertion_items.filter((item) => {
            return (index<=item.match(/[0-9]+/g))&&(item.match(/[0-9]+/g)<=(index + permanentSequence.length - 1))
        })
        draft_insertion_items = draft_insertion_items.filter((item) => {
            return !deletion_items_nonconflicting.some(jtem => {
                return (jtem[0] <= Number(item.match(/[0-9]+/g)[0]))&&(Number(item.match(/[0-9]+/g)[0]) <= jtem[1])
            })
        })*/
        let mutation_items = draft_mutation_items.map((item) => [Number(item.slice(1,-1)),'mutation',item])
        let deletion_items = deletion_items_nonconflicting.map((item) => [item[0],'deletion','del'+item[0]+'-'+item[1]])
        //let insertion_items = draft_insertion_items.map((item) => [Number(item.match(/[0-9]+/g)[0]),'insertion',item])
        mutation_items.sort((a,b) => a[0] - b[0])
        deletion_items.sort((a,b) => a[0] - b[0])
        //insertion_items.sort((a,b) => a[0] - b[0])


        if (invalid_items.length > 0) {
            changepopupmessage('The following unrecognized items will be removed: ' + invalid_items.join("\n"))
            changepopupstate(true)
        }
        //return ([deletion_items, insertion_items, mutation_items])
        return ([deletion_items, mutation_items])

    }

    const apply_mutation = (final_list) => {
        let sequence = board[selectedGene].element_immutable_sequence
        let sequence_for_array = sequence
        let sequence_array = []
        let start_residue_position = board[selectedGene].element_offset
        let offset = start_residue_position-1
        let end_residue_position = offset + sequence.length
        let offset_array = start_residue_position-1
        let name = board[selectedGene].element_immutable_name
        if ((final_list.length>0)) {
            final_list.forEach((item) => {
                if ((item[1]==="mutation")) {
                    sequence = sequence.slice(0,item[0]+item[3]-1-offset)+item[2].slice(-1)+sequence.slice(item[0]+item[3]-offset,)
                } else if ((item[1]==="deletion")) {
                    let boundaries = item[2].slice(3,).split('-')
                    boundaries = boundaries.map((i) => Number(i))
                    start_residue_position = (boundaries[0] === start_residue_position ? boundaries[1]+1: start_residue_position)
                    end_residue_position = (boundaries[1] === end_residue_position ? boundaries[0]-1: end_residue_position)
                    sequence = sequence.slice(0,(boundaries[0]+item[3]-1-offset))+sequence.slice((boundaries[1]+item[3]-offset),)
                } else if ((item[1]==="insertion")) {
                    let insert = item[2].slice(3,).match(/[a-zA-Z]+|[0-9]+/g)[1]
                    sequence = sequence.slice(0,item[0]+item[3]-1)+insert+sequence.slice(item[0]+item[3]-1,)
                }
            })
        }
        if ((final_list.length>0)) {
            final_list.forEach((item) => {
                if ((item[1]==="mutation")) {

                    sequence_array.push({element_sequence: sequence_for_array.slice(0,item[0]+item[3]-1-offset_array),
                                            element_color: "#FFFFFF"})
                    sequence_array.push({element_sequence: item[2].slice(-1),
                                            element_color: "#FFFF00"})
                    let temp_shift = sequence_for_array.slice(0,item[0]+item[3]-1-offset_array).length+1
                    sequence_for_array = sequence_for_array.slice(item[0]+item[3]-offset_array,)
                    offset_array = offset_array+temp_shift

                } else if ((item[1]==="deletion")) {

                    let boundaries = item[2].slice(3,).split('-')
                    boundaries = boundaries.map((i) => Number(i))
                    sequence_for_array = sequence_for_array.slice(0,(boundaries[0]+item[3]-1-offset_array))+sequence_for_array.slice((boundaries[1]+item[3]-offset_array),)

                }
            })
        }
        sequence_array.push({element_sequence: sequence_for_array,
                                            element_color: "#FFFFFF"})
        console.log("post mutation array: ", sequence_array)
        console.log("sequence via array: ", sequence_array.map((i)=>i.element_sequence).join(""))
        console.log("sequence via OG: ", sequence)
        let temp_mut_string = final_list.map(item => item[2]).toString()
        final_list = final_list.filter((item) => {
            if ((item[1]==="deletion")) {
                let boundaries = item[2].slice(3,).split('-')
                boundaries = boundaries.map((i) => Number(i))
                let filtered = (boundaries[0]!==board[selectedGene].element_offset && boundaries[1]!==(board[selectedGene].element_immutable_sequence.length+board[selectedGene].element_offset-1))
                return filtered
            }
            else {return true}} )
        let final_list_string = final_list.map(item => item[2].replace("del","Δ")).toString()
        let temp_construct = "("+sequence.slice(0,1)+start_residue_position.toString()+"-"+sequence.slice(-1)+end_residue_position.toString()+")"
        name = "["+name+" "+temp_construct+" "+final_list_string+"]"
        let temp = update(board[selectedGene], {
            element_sequence: {$set: sequence},
            element_mutations: {$set: temp_mut_string},
            element_mutations_array: {$set: sequence_array},
            element_name: {$set: name},
        })
        setBoard((prevBoard) => update(prevBoard, {$splice: [[selectedGene, 1, temp]]}))
    }

    const handleGeneSelection = e => {
        setSelectedGene(e.target.value)
        let temp_mutation_string = (board[e.target.value].element_mutations !== null ?board[e.target.value].element_mutations:"")
        setMutationString(temp_mutation_string)
    }

    const maintainDisplay = e => {
        let temp = e.target.value
        setMutationString(() => temp)
    }

    const validateAndFormat = e => {
        let temp = e.target.value
        temp = temp.replace(/\s+/g, '').split(',').filter((item) => !(item === ''))
        //let [deletion_items, insertion_items, mutation_items] = splitMutationInputs(temp)
        let [deletion_items, mutation_items] = splitMutationInputs(temp)
        //let final_mutations = deletion_items.concat(insertion_items.concat(mutation_items))
        let final_mutations = deletion_items.concat(mutation_items)
        final_mutations.sort((a,b) => a[0]-b[0])
        let offsets = final_mutations.map((item) => {
            if (item[1] === 'mutation') {
                return 0
                } else if (item[1] === 'deletion') {
                    let offset = item[2].slice(3,).split('-')[0] - item[2].slice(3,).split('-')[1] - 1
                    return offset
                } else if (item[1] === 'insertion') {
                    let offset = item[2].slice(3,).match(/[a-zA-Z]+|[0-9]+/g)[1].length
                    return offset
                }
        })
        offsets = offsets.map((sum => value => sum += value)(0))
        offsets = [0, ...offsets].slice(0,-1)
        final_mutations = final_mutations.map((element, ind) => {
            return [...element, offsets[ind]]
        })
        apply_mutation(final_mutations)
        final_mutations = final_mutations.map(item => item[2])
        temp = final_mutations.toString()
        setMutationString(() => temp)
    }

    return (
        <div className={"mutation-input"}>
            <FormControl sx={{ width: '100%'}}>
                <InputLabel>Select Protein To Mutate</InputLabel>
                <Select
                    label={"Select Protein To Mutate"}
                    value={selectedGene}
                    onChange={handleGeneSelection}
                    sx={{ width: '75%'}}
                    disabled={disabled}>
                        {mutable_elements_indices.map((ind) => <MenuItem value={ind}>{board[ind].element_name}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl sx={{ width: '100%', mt:2}}>
                <TextField
                    disabled={disabled || selectedGene===null}
                    label={"Mutation Input"}
                    variant={"outlined"}
                    value={mutationstring}
                    multiline
                    maxRows={4}
                    overflow="scroll"
                    sx={{ width: '75%'}}
                    onChange={maintainDisplay}
                    onBlur={validateAndFormat}
                />
                <FormHelperText>
                    <div align={"Left"}>
                         Separate all modifications with a comma
                    </div>
                    <div align={"Left"}>
                         Point Mutations: A5G, L41K
                    </div>
                    <div align={"Left"}>
                         Deletions: del88-95, del17
                    </div>
                </FormHelperText>
            </FormControl>
        </div>
    )
}

export default MutationInput