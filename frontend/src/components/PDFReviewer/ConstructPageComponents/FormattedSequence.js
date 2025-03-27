import React, {Fragment} from 'react';
import {Text, View, StyleSheet, Font } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '100%',
        flexGrow: 1,
    },
    header1: {
        flexDirection: 'row',

        flexWrap: 'wrap',
        textAlign: 'center',
        fontSize: '12px',
       },
    header2: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'center',
        fontSize: '12px',
       },
});



const FormattedSequence = ({construct}) => {

    /*need to create logic that will split sequences around point mutations so they can be highlighted*/

    const elementSplitter = (element) => {
        let seq = element.element_sequence
        seq = [...seq]
        return (
            seq.map((item) => <Text style={{
                    color: "#000000",
                    fontSize: '12px',
                    fontFamily: 'Courier-Bold',
                    backgroundColor:element.element_color
                }}>{item}</Text>)
        )
    }

    const formattedElements = (construct) => {
        let temp = construct.map( (element, ind) => {
            if (Object.hasOwn(element, "element_mutations_array")) {
                if (ind === 0 && (element.element_sequence.slice(0, 1) !== "M")) {
                    return (
                        <Fragment>
                            <Text style={{
                                color: "#000000",
                                textAlign: 'left',
                                fontSize: '12px',
                                fontFamily: 'Courier-Bold'
                            }}>M</Text>
                            <Fragment>{element.element_mutations_array.map((subelement) => elementSplitter(subelement))}</Fragment>
                        </Fragment>
                    )
                } else {
                    return (
                        <Fragment>{element.element_mutations_array.map((subelement) => elementSplitter(subelement))}</Fragment>
                    )
                }
            } else {
                if (ind === 0 && (element.element_sequence.slice(0, 1) !== "M")) {
                    return (
                        <Fragment>
                            <Text style={{
                                color: "#000000",
                                textAlign: 'left',
                                fontSize: '12px',
                                fontFamily: 'Courier-Bold'
                            }}>M</Text>
                            <Fragment>{elementSplitter(element)}</Fragment>
                        </Fragment>
                    )
                } else {
                    return (
                        <Fragment>{elementSplitter(element)}</Fragment>
                    )
                }
            }
            }
        )
        return temp
    }



    return (
    <Fragment>
        <View style={styles.Container}>
            <Fragment>{formattedElements(construct)}</Fragment>
            <Text style={[styles.header1, {backgroundColor: '#ee0000'}]}>*</Text>
        </View>
    </Fragment>
)};

export default FormattedSequence