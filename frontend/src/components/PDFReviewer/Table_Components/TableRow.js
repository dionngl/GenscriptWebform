import React, {Fragment} from 'react';
import {Text, View, StyleSheet, Font} from '@react-pdf/renderer';


Font.register({
  family: "Open Sans",
  fonts: [
    { src: "http://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf", fontWeight: 400 },
  ],
})

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        minHeight: 24,
        flexGrow: 1,
        fontSize: '10px',
        fontFamily: "Open Sans",
    },
    description: {
        width: '70%',
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
        flexWrap: true,
        flexDirection:"column",
    },
    qty: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    rate: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    amount: {
        width: '15%',
        textAlign: 'right',
        paddingRight: 8,
    },
  });


const TableRow = ({items, projectNumber, internal}) => {

    const rows = items.map( (item) => {
        let construct_name_site1 = (item.Site1!==null?item.Site1.map((subelement) => {
            let temp_name = subelement.element_name
            temp_name = (internal?temp_name:(Object.hasOwn(subelement, "element_redacted_name")?temp_name.replace(subelement.element_immutable_name,subelement.element_redacted_name):temp_name))
            return temp_name}).join("-"):"")
        construct_name_site1 = (item.Site1!==null?(item.Site1[0].element_sequence.slice(0,1)==="M"?construct_name_site1:"M-"+construct_name_site1):construct_name_site1)
        let construct_name_site2 = (item.Site2!==null?item.Site2.map((subelement) => {
            let temp_name = subelement.element_name
            temp_name = (internal?temp_name:(Object.hasOwn(subelement, "element_redacted_name")?temp_name.replace(subelement.element_immutable_name,subelement.element_redacted_name):temp_name))
            return temp_name}).join("-"):"")
        construct_name_site2 = (item.Site2!==null?(item.Site2[0].element_sequence.slice(0,1)==="M"?construct_name_site2:"M-"+construct_name_site2):construct_name_site2)
        let isDuet = item.vector_info.mcs2!==null
        let construct_name = ""
        if (isDuet) {
            construct_name = ((construct_name_site1.length>0?construct_name_site1+" in Site 1   |   ":"")+(construct_name_site2.length>0?construct_name_site2+" in Site 2":""))
        } else {
            construct_name = construct_name_site1
        }

        return(
        <View style={styles.row}>
            <Text style={styles.qty}>{"P" + String(projectNumber) + "-" + item.Number}</Text>
            <Text style={styles.description}>{construct_name}</Text>
            <Text style={styles.qty}>{item.vector_info.vector_name}</Text>
        </View>
        )
    })
    return (<Fragment>{rows}</Fragment> )
};

export default TableRow