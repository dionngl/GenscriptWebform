import React, {Fragment} from 'react';
import {Text, View, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: "Open Sans",
  fonts: [
    { src: "http://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf", fontWeight: 400 },
  ],
})

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'center',
        width: '100%',
        fontFamily: "Open Sans",
        fontSize: '20px',
        fontWeight: 'bold',
       },
});



const Header = ({data, projectNumber, internal}) => {
    let construct_name_site1 = (data.Site1!==null?data.Site1.map((subelement) => {
            let temp_name = subelement.element_name
            temp_name = (internal?temp_name:(Object.hasOwn(subelement, "element_redacted_name")?temp_name.replace(subelement.element_immutable_name,subelement.element_redacted_name):temp_name))
            return temp_name}).join("-"):"")
    construct_name_site1 = (data.Site1!==null?(data.Site1[0].element_sequence.slice(0,1)==="M"?construct_name_site1:"M-"+construct_name_site1):construct_name_site1)
    let construct_name_site2 = (data.Site2!==null?data.Site2.map((subelement) => {
            let temp_name = subelement.element_name
            temp_name = (internal?temp_name:(Object.hasOwn(subelement, "element_redacted_name")?temp_name.replace(subelement.element_immutable_name,subelement.element_redacted_name):temp_name))
            return temp_name}).join("-"):"")
    construct_name_site2 = (data.Site2!==null?(data.Site2[0].element_sequence.slice(0,1)==="M"?construct_name_site2:"M-"+construct_name_site2):construct_name_site2)
    let isDuet = data.vector_info.mcs2!==null
    let construct_name = ""
    if (isDuet) {
        construct_name = ((construct_name_site1.length>0?construct_name_site1+" in Site 1   |   ":"")+(construct_name_site2.length>0?construct_name_site2+" in Site 2":""))
    } else {
        construct_name = construct_name_site1
    }
    construct_name = "P"+String(projectNumber)+"-"+String(data.Number)+": "+construct_name

    return (
        <Fragment>
            <View>
                <Text style={styles.header}>{construct_name}</Text>
            </View>
        </Fragment>
    )};

export default Header