import React, {Fragment} from "react";
import { useLocation } from 'react-router-dom';
import {
    Grid,
    Typography,
    Button,
} from "@mui/material/";
import {
    Document,
    PDFViewer,
    Page,
    Text,
    StyleSheet,
    Font,
} from "@react-pdf/renderer";
import SummaryTable from "./PDFReviewer/SummaryTable";
import ConstructPage from "./PDFReviewer/ConstructPage";
import CoverPage from "./PDFReviewer/CoverPage";
import ReferenceSequencesPage from "./PDFReviewer/ReferenceSequencesPage";

const styles = StyleSheet.create({
        page: {
            fontFamily: 'Helvetica',
            fontSize: 11,
            paddingTop: 30,
            paddingLeft:60,
            paddingRight:60,
            lineHeight: 1.5,
            flexDirection: 'column',
        },
        pageNumber: {
            position: 'absolute',
            fontSize: 12,
            bottom: 30,
            left: 0,
            right: 0,
            textAlign: 'center',
            color: 'grey',
        },})

function PDFReviewPage ({}) {

    let location = useLocation();
    let data = location.state

    const handleCoverPage = (data, internal) => {
        return (
                <Page size="Letter" style={styles.page}>
                    {<CoverPage data={data} internal={internal}/>}
                    <Text style={[styles.pageNumber, {flexDirection: 'none'}]} render={({ pageNumber, totalPages }) => (
                        `${pageNumber} / ${totalPages}`
                    )} fixed />
                </Page>
            )
    }

    const handleReferenceSequences = (data, internal) => {
        return (
                <Page size="Letter" style={styles.page}>
                    {<ReferenceSequencesPage data={data} internal={internal}/>}
                    <Text style={[styles.pageNumber, {flexDirection: 'none'}]} render={({ pageNumber, totalPages }) => (
                        `${pageNumber} / ${totalPages}`
                    )} fixed />
                </Page>
            )
    }

    const handleTables  = (constructs, system, internal) => {
        if (constructs.length>0) {
            return (
                <Page size="Letter" style={styles.page}>
                    <SummaryTable data={constructs} projectNumber={data.ProjectNumber} system={system} internal={internal}/>
                    <Text style={[styles.pageNumber, {flexDirection: 'none'}]} render={({ pageNumber, totalPages }) => (
                        `${pageNumber} / ${totalPages}`
                    )} fixed />
                </Page>
            ) } else {
            return
        }
    }

    const handlePages = (constructs, system, internal) => {
        if (constructs.length>0) {
            return (
                <Page size="Letter" style={styles.page}>
                    {constructs.map((construct, index)=><ConstructPage data={construct} system={system} projectNumber={data.ProjectNumber} index={index} internal={internal}/>)}
                    <Text style={[styles.pageNumber, {flexDirection: 'none'}]} render={({ pageNumber, totalPages }) => (
                        `${pageNumber} / ${totalPages}`
                    )} fixed />
                </Page>
            ) } else {
            return
        }
    }

    return (
        <div>
            <Grid container fullWidth sx={{width:"100%", height:"90vh", overflow: "hidden", overflowY: "scroll"}} justifyContent={"center"} overflow={"auto"}>
                <Grid container fullWidth justifyContent={"center"}>
                    <Grid item>
                        <Typography>Test</Typography>
                    </Grid>
                </Grid>
                <Grid container sx={{width:"100%"}} fullWidth justifyContent={"center"}>
                    <Grid item>
                        <PDFViewer width={'700fr'} height={"800vh"}>
                            <Document>
                                <Fragment>{handleCoverPage(data, true)}</Fragment>
                                <Fragment>{handleReferenceSequences(data, true)}</Fragment>
                                <Fragment>{handleTables(data.BacterialConstructs, "Bacterial", true)}</Fragment>
                                <Fragment>{handleTables(data.InsectConstructs, "Insect", true)}</Fragment>
                                <Fragment>{handleTables(data.MammalianConstructs, "Mammalian", true)}</Fragment>
                                <Fragment>{handlePages(data.BacterialConstructs, "Bacterial", true)}</Fragment>
                                <Fragment>{handlePages(data.InsectConstructs, "Insect", true)}</Fragment>
                                <Fragment>{handlePages(data.MammalianConstructs, "Mammalian", true)}</Fragment>
                            </Document>
                        </PDFViewer>
                    </Grid>
                    <Grid item>
                        <PDFViewer width={'700fr'} height={"800vh"}>
                            <Document>
                                <Fragment>{handleCoverPage(data, false)}</Fragment>
                                <Fragment>{handleReferenceSequences(data, false)}</Fragment>
                                <Fragment>{handleTables(data.BacterialConstructs, "Bacterial", false)}</Fragment>
                                <Fragment>{handleTables(data.InsectConstructs, "Insect", false)}</Fragment>
                                <Fragment>{handleTables(data.MammalianConstructs, "Mammalian", false)}</Fragment>
                                <Fragment>{handlePages(data.BacterialConstructs, "Bacterial", false)}</Fragment>
                                <Fragment>{handlePages(data.InsectConstructs, "Insect", false)}</Fragment>
                                <Fragment>{handlePages(data.MammalianConstructs, "Mammalian", false)}</Fragment>
                            </Document>
                        </PDFViewer>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container sx={{width:"100%"}} fullWidth justifyContent={"center"}>
                <Grid item>
                    <Button
                        variant={'contained'}
                        onClick={() => {
                            console.log("Debugger START")
                            console.log("data", data)
                            console.log("CHECK BUTTON END")
                            return }}>
                        Debugger
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default PDFReviewPage

/*
<Fragment>{handleCoverPage(data)}</Fragment>
 */