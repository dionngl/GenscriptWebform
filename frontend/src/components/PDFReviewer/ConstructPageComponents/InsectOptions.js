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



const InsectOptions = ({construct}) => {

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

    const GenerateVirus = (construct) => {
        if (construct.Virus) {
            return (
                <Fragment>
                    <View style={styles.row}>
                        <Text style={styles.header1}>Please Generate P1 and P2 virus</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.header1}>Please Send P1 and P2 viral stocks to AbbVie</Text>
                    </View>
                </Fragment>
            )
        } else {
            return (
                <View>
                    <Text></Text>
                </View>
            )
        }
    }

    const ExpressionTest = (construct) => {
        if (construct.SDS || construct.Western) {
            return (
                <View style={styles.row}>
                    <Text style={styles.header1}>Please perform expression testing in Sf9 cells, running SDS-PAGE {construct.Western?"and Western Blot":""} </Text>
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

    const ShippingText = (construct) => {
        if (construct.Virus) {
            return (
                <Fragment>
                    <View style={styles.row}>
                        <Text style={styles.header1}>Ship DNA and viruses to Abbvie as soon as sequence verification and QC is complete</Text>
                    </View>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <View style={styles.row}>
                        <Text style={styles.header1}>Ship DNA to Abbvie as soon as sequence verification and QC is complete</Text>
                    </View>
                </Fragment>
            )
        }
    }

    return (
    <Fragment>
        <View style={styles.Container}>
            <Fragment>{ReferenceText(construct)}</Fragment>
            <View style={styles.row}><Text style={styles.header1}>Please Send 10 µg DNA to AbbVie</Text></View>
            <Fragment>{GenerateVirus(construct)}</Fragment>
            <Fragment>{ShippingText(construct)}</Fragment>
            <Fragment>{ExpressionTest(construct)}</Fragment>
        </View>
    </Fragment>
)};

export default InsectOptions