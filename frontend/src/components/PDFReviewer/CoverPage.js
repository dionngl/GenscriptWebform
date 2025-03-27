import React, {Fragment} from 'react';
import {View, StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    tableContainer: {
        marginTop: 24,
        width:'100%',
        },
    Title: {
        color: '#61dafb',
        letterSpacing: 4,
        fontSize: 25,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    ProjectNumber: {
        color: '#000000',
        letterSpacing: 2,
        fontSize: 25,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    PrimaryContacts: {
        color: '#000000',
        letterSpacing: 0,
        fontSize: 15,
        textAlign: 'center',
    }
});

const CoverPage = ({data, internal}) => {

    const handleProjectNumber = (projectnumber) => {
        return (
            <Fragment>
                <Text style={styles.ProjectNumber}>Project {projectnumber}</Text>
            </Fragment>
        )
    }

    const handleContacts = (submitter) => {
        return (
            <Fragment>
                <Text style={styles.PrimaryContacts}>Primary Contacts: {submitter}, Sarah Zerbs, and Chaohong Sun</Text>
            </Fragment>
        )
    }

    const handleDate = () => {
        let today = new Date()
        let month = today.getMonth()+1;
        let year = today.getFullYear();
        let date = today. getDate();
        let currentDate = month + "/" + date + "/" + year;
        return (
            <Fragment>
                <Text style={styles.PrimaryContacts}>Date: {currentDate} </Text>
            </Fragment>
        )
    }

    const handleTCPR = (TCPR, internal) => {
        if (internal) {
            return (
                <Fragment>
                    <Text style={styles.PrimaryContacts}>TCPR Code: {TCPR} </Text>
                </Fragment>
            )
        } else {
            return (
                <Fragment></Fragment>
            )
        }
    }

    return (
        <Fragment>
            <View style={styles.tableContainer}>
                <Text style={styles.Title}>GenScript Order</Text>
                <Text style={styles.Title}>For:</Text>
                <Fragment>{handleProjectNumber(data.ProjectNumber)}</Fragment>
                <Fragment>{handleContacts(data.Submitter)}</Fragment>
                <Fragment>{handleTCPR(data.TCPR, internal)}</Fragment>
                <Fragment>{handleDate()}</Fragment>
            </View>
        </Fragment>
    )
}

export default CoverPage