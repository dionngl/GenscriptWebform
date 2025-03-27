import React, {Fragment} from 'react';
import {Text, View, StyleSheet, Font} from '@react-pdf/renderer';

Font.register({
  family: "Open Sans",
  fonts: [
    { src: "http://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf", fontWeight: 400 },
  ],
})

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: 24,
        width: '100%',
        flexGrow: 1,
    },
    header1: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'center',
        fontSize: '10px',
        fontFamily: "Open Sans",
       },
    header2: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'center',
        fontSize: '10px',
        fontFamily: "Open Sans",
       },
});



const FormattedConstruct = ({construct, restrictionSites, bacterial, projectNumber, internal}) => {

    const formattedElements = construct.map( (element, ind) => {
        let temp_name = element.element_name
        temp_name = (internal?temp_name:(Object.hasOwn(element, "element_redacted_name")?temp_name.replace(element.element_immutable_name,element.element_redacted_name):temp_name))
        if (ind===0 && (element.element_sequence.slice(0,1)!=="M")) {
            return (
                <View style={{flexDirection: 'row', alignItems: 'center',}}>
                    <Text style={{
                        color: "#000000",
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        textAlign: 'center',
                        fontSize: '10px',
                        fontFamily: "Open Sans",
                    }}>M</Text>
                    <Text style={{
                        color: "#000000",
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        textAlign: 'center',
                        fontSize: '10px',
                        fontFamily: "Open Sans",
                    }}>—</Text>
                    <Text style={{
                        color: (element.element_color !== "#FFFFFF" ? element.element_color : "#000000"),
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        textAlign: 'center',
                        fontSize: '10px',
                        fontFamily: "Open Sans",
                    }}>{temp_name}</Text>
                    <Text style={{
                        color: "#000000",
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        textAlign: 'center',
                        fontSize: '10px',
                        fontFamily: "Open Sans",
                    }}>—</Text>
                </View>
            )
        } else {
            return (
                <View style={{flexDirection: 'row', alignItems: 'center',}}>
                    <Text style={{
                        color: (element.element_color !== "#FFFFFF" ? element.element_color : "#000000"),
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        textAlign: 'center',
                        fontSize: '10px',
                        fontFamily: "Open Sans",
                    }}>{temp_name}</Text>
                    <Text style={{
                        color: "#000000",
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        textAlign: 'center',
                        fontSize: '10px',
                        fontFamily: "Open Sans",
                    }}>—</Text>
                </View>
            )
        }
    }
    )

    const Kozak = (bacterial) => {
        if (bacterial) {
            return <View><Text></Text></View>
        } else {
            return (
                <Fragment>
                    <Text style={[styles.header1, {backgroundColor: '#00eeee'}]}>Kozak Sequence</Text>
                    <Text style={styles.header1}>—</Text>
                </Fragment>
            )
        }
    }


    return (
    <Fragment>
        <View style={styles.row}>
            <Text style={[styles.header1, {backgroundColor: '#eeee00'}]}>{restrictionSites[0]}</Text>
            <Text style={styles.header1}>—</Text>
            <Fragment>{Kozak(bacterial)}</Fragment>
            <Fragment>{formattedElements}</Fragment>
            <Text style={[styles.header1, {backgroundColor: '#ee0000'}]}>Stop Codon</Text>
            <Text style={styles.header1}>—</Text>
            <Text style={[styles.header1, {backgroundColor: '#aaaaaa'}]}>{restrictionSites[1]}</Text>
        </View>
    </Fragment>
)};

export default FormattedConstruct