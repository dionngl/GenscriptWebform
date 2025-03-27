import React, { useState,useCallback } from "react";
import {
    Button,
    Grid,
} from "@mui/material/";
import update from "immutability-helper";
import { Elem_list, vector_list } from "./Data";
import Geneblock from "./Geneblock";
import Board from "./ConstructWorkspace";
import SequenceDisplay from "./SequenceDisplay";
import MutationInput from "./MutationInput";
import ConstructLister from "./ConstructLister";
import AlertPopUp from "./AlertPopUp";
import CabbagePopUp from "./CabbagePopUp";
import VectorSelectorPopUp from "./VectorSelectorPopUp";
import { useNavigate } from "react-router-dom";

//TODO:Add button that clears the board
//TODO:Add functionallity to click on construct in list sets board with clicked constructs board

function DragDrop({state}) {

    //The following are state variables
    state.GeneList.map((element, index) => element.id = index);
    const gene_list = state.GeneList
    const [board, setBoard] = useState([]);
    const [sequencestring, setSequenceString] = useState('');
    const [constructstring, setConstructString] = useState('');
    const [construct_list, setConstructList] = useState([]);
    const [mutationstring, setMutationString] = useState('');
    const [selectedGene, setSelectedGene] = useState(null);
    const navigate = useNavigate();

    //The following are used to help update the above states for various tasks
    //updated ATBWH so that objects added to board via this method are tagged
    const addToBoardWhileHover = useCallback( (index, item) => {
        if (item.type === "Gene") {
            const pictureList = gene_list.filter((picture) => item.id === picture.id)
            let temp = update(pictureList[0], {fromATBWH: {$set: true}})
            setBoard((prevBoard) =>
                update(prevBoard, {
                    $splice: [
                        [index, 0, temp],
                    ],

                }),
            )
        } else if (item.type === "cabbage") {
            let temp = {id: 0,
                        element_name: "Holder",
                        element_sequence: "",
                        element_system: "All",
                        element_color: "#338833",
                        element_type: "Holder"}
            setBoard((prevBoard) =>
                update(prevBoard, {
                    $splice: [
                        [index, 0, temp],
                    ],

                }),
            )
        } else {
            const pictureList = Elem_list.filter((picture) => item.id === picture.id)
            let temp = update(pictureList[0], {fromATBWH: {$set: true}})
            setBoard((prevBoard) =>
                update(prevBoard, {
                    $splice: [
                        [index, 0, temp],
                    ],

                }),
            )
        }
    }, []);
    const moveBoard = useCallback((dragIndex, hoverIndex) => {
        setBoard((prevBoard) =>
            update(prevBoard, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevBoard[dragIndex]],
                ],
            })
        )
    }, []);
    const removeBoard = useCallback((Index) => {
        setBoard((prevBoard) =>
        update (prevBoard, {
            $splice: [
                [Index, 1],

                ],
        }),
        )
    }, []);


    const handleReviewButton = e => {
        navigate("/ConstructReviewer", { state: {
                Submitter: state.Submitter,
                TCPR: state.TCPR,
                ProjectNumber: state.ProjectNumber,
                GeneList: gene_list,
                ConstructList: construct_list,
            }})
    }

    //the following are state variables used to make pop up messages, cabbage input, and vector selection
    const [popupstate, changepopupstate] = useState(false);
    const [popupmessage, changepopupmessage] = useState('');
    const [cabbagepopupstate, changecabbagepopupstate] = useState(false);
    const [vectorpopupstate, changevectorpopupstate] = useState([false, false]);

    return (
        <div className={'construct-designer-grid-container'}>
            <div className={"workspace"}>
                <Board
                    board={board}
                    setBoard={setBoard}
                    moveBoard={moveBoard}
                    removeBoard={removeBoard}
                    addToBoardWhileHover={addToBoardWhileHover}
                    gene_list={gene_list}
                    changecabbagepopupstate={changecabbagepopupstate}/>
                    <Button
                        sx={{
                            color: "#ff0000",
                            left: '80%',
                        }}
                        onClick={() => setBoard([])}>
                        Clear Board
                    </Button>
            </div>
            <div className={'sequence-display'}>
                <SequenceDisplay
                    board={board}
                    sequencestring={sequencestring}
                    setSequenceString={setSequenceString}
                    constructstring={constructstring}
                    setConstructString={setConstructString}/>
            </div>

            <div className={'construct-list-display'}>
                <ConstructLister
                construct_list={construct_list}
                setConstructList={setConstructList}
                setBoard={setBoard}
                setMutationString={setMutationString}
                setSelectedGene={setSelectedGene}
                />
            </div>
            <div className={'gene-cabbage-bank'}>
                <div>
                    <p1>Genes and Cabbages</p1>
                </div>
                <div>
                    {gene_list.map((element, ind) => (
                        <Geneblock
                    id={ind}
                    sequence={element.element_sequence}
                    immutable_sequence={element.element_immutable_sequence}
                    name={element.element_name}
                    color={element.element_color}
                    type={element.element_type}
                    removeBoard={removeBoard}
                    source_block={true}/>
                    ))}
                </div>
            </div>
            <div className={'geneblock-bank'}>
                {Elem_list.map((element) => (
                    <Geneblock
                        id={element.id}
                        color={element.element_color}
                        name={element.element_name}
                        source_block={true}
                        removeBoard={removeBoard} />
                ))}
                <Geneblock
                    name={"🥬"}
                    color={"#338833"}
                    type={"cabbage"}
                    removeBoard={removeBoard}
                    source_block={true}/>
            </div>
            <div className={'mutation-input'}>
                <MutationInput
                    disabled={!(board.filter((element) => element.element_type === "Gene").length>0)}
                    board={board}
                    setBoard={setBoard}
                    changepopupmessage={changepopupmessage}
                    changepopupstate={changepopupstate}
                    mutationstring={mutationstring}
                    setMutationString={setMutationString}
                    selectedGene={selectedGene}
                    setSelectedGene={setSelectedGene}
                />
            </div>
            <div>
                <Grid container spacing={2}>
                    <Grid container spacing={2} mt={0.5}>
                        <Grid item>
                            <Button
                                disabled={(board.length ? false : true)}
                                variant={'contained'}
                                onClick={() => changevectorpopupstate([true, false])}>
                                Add To A Vector
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} mt={0.5}>
                        <Grid item>
                            <Button
                                disabled={(construct_list.some((element)=>element.Site1Selected===true) ? false : true)}
                                variant={'contained'}
                                onClick={() =>
                                    changevectorpopupstate([true, true])}>
                                Batch Add To A Vector test
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} mt={0.5}>
                        <Grid item>
                            <Button
                                disabled={!(construct_list.length>0)}
                                variant={'contained'}
                                onClick={() => handleReviewButton()}>
                                Review Constructs
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} mt={0.5}>
                        <Grid item>
                            <Button
                                variant={'contained'}
                                onClick={() => {
                                    console.log("CHECK BUTTON START")
                                    console.log("board ,", board)
                                    console.log("CHECK BUTTON END")
                                    return }}>
                                Check test 12
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <AlertPopUp
                popupstate={popupstate}
                popupmessage={popupmessage}
                changepopupstate={changepopupstate}/>
            <CabbagePopUp
                cabbagepopupstate={cabbagepopupstate}
                changecabbagepopupstate={changecabbagepopupstate}
                board={board}
                setBoard={setBoard}/>
            <VectorSelectorPopUp
                vectorpopupstate={vectorpopupstate}
                changevectorpopupstate={changevectorpopupstate}
                vector_list={vector_list}
                board={board}
                setConstructList={setConstructList}
                construct_list={construct_list}/>
        </div>
    );
};

export default DragDrop

/*<Grid container spacing={2} mt={0.5}>
                        <Grid item>
                            <Button
                                variant={'contained'}
                                onClick={() => {
                                    console.log("CHECK BUTTON START")
                                    console.log("genelist", gene_list)
                                    console.log("board, ", board)
                                    console.log("board have gene?, ", board.filter((element) => element.element_type === "Gene"))
                                    console.log("board have gene?, ", board.filter((element) => element.element_type === "Gene").length>0)
                                    console.log("construct_list ,", construct_list)
                                    console.log("CHECK BUTTON END")
                                    return }}>
                                Check test 3
                            </Button>
                        </Grid>
                    </Grid>*/