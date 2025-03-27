import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#bff0fd',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 24,
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



const BacterialOptions = ({construct}) => {

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

    const StrainHandler = (construct) => {
        let constructText = ""
        constructText = (construct.Strains.length===1?construct.Strains[0]:construct.Strains.map((value, index, array) => {
            if (index === (array.length - 1)) {
                return "and " + value
            } else {
                return value + ", "
            }
        }).join(""))
        return constructText
    }

    const proteaseCoExpressHandler = (construct) => {
        let coExpressText = ""
        if (construct.CoTEV) {
            coExpressText = ", co-transformed with plasmid from Abbvie Project 504b - E.coli | P504-2:M-[p504 (1-242) S129V] | (WO# U828NGD300-1),"
        } else if (construct.CoULP1) {
            coExpressText = ", co-transformed with plasmid from Abbvie Project 170c - E.coli | P170-2:M-[p170 (1-219)] | (WO# U765XGC250-1),"
        }
        return coExpressText
    }

    const ExpressionTest = (construct) => {
        if (construct.SDS || construct.Western) {
            return (
                <View style={styles.row}>
                    <Text style={styles.header1}>Please perform expression testing in {StrainHandler(construct)}{proteaseCoExpressHandler(construct)} running SDS-PAGE {construct.Western?"and Western Blot":""} </Text>
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

    /*
    ULP1 U765XGC250-1
    TEV U828NGD300-1
    */

    return (
    <Fragment>
        <View style={styles.Container}>
            <Fragment>{ReferenceText(construct)}</Fragment>
            <View style={styles.row}><Text style={styles.header1}>Please send all expression clones (10 µg DNA) to AbbVie</Text></View>
            <View style={styles.row}><Text style={styles.header1}>Ship DNA to Abbvie as soon as sequence verification and QC is complete</Text></View>
            <Fragment>{ExpressionTest(construct)}</Fragment>
        </View>
    </Fragment>
)};

export default BacterialOptions