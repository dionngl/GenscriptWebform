import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 24,
        width: '100%',
        flexGrow: 1,
    },
    header1: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'center',
        fontSize: '10px',
       },
    header2: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'center',
        fontSize: '10px',
       },
});



const MammalianOptions = ({construct}) => {

    const ReferenceText = (construct) => {
        if (construct.Reference.length > 0) {
            return (
                <View style={styles.row}>
                    <Text style={[styles.header1, {width:'100%', textAlign: 'left'}]}>Please use {construct.Reference} as a template</Text>
                </View>
            )
        } else {
            return (
                <View>
                    <Text></Text>
                </View>
            )
        }
    }

    const Amount  = (construct) => {
        return (
            <View style={styles.row}>
                <Text style={[styles.header1, {width:'100%', textAlign: 'left'}]}>Please make {construct.DNAAmount} mg advanced SC grade DNA and send to AbbVie 1 mg/mL final concentration</Text>
            </View>
        )
    }

    return (
    <Fragment>
        <View style={styles.Container}>
            <Fragment>{ReferenceText(construct)}</Fragment>
            <View style={styles.row}><Text style={styles.header1}>Please send all expression constructs (10 µg DNA) to AbbVie</Text></View>
            <Fragment>{Amount(construct)}</Fragment>
        </View>
    </Fragment>
)};

export default MammalianOptions