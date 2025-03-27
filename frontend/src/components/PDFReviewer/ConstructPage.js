import React, {Fragment} from 'react';
import {View, StyleSheet, Text } from '@react-pdf/renderer';
import Header from './ConstructPageComponents/Header';
import FormattedConstruct from "./ConstructPageComponents/FormattedConstruct";
import FormattedSequence from "./ConstructPageComponents/FormattedSequence";
import BacterialOptions from "./ConstructPageComponents/BacterialOptions";
import InsectOptions from "./ConstructPageComponents/InsectOptions";
import MammalianOptions from "./ConstructPageComponents/MammalianOptions";

const styles = StyleSheet.create({
    tableContainer: {
        marginTop: 24,
        width:'100%',
        },
});

const ConstructPage = ({data, system, projectNumber, index, internal}) => {
    let testData = data

    const Options = () => {
        if (system==="Bacterial") {
            return (
                <View style={{width:'100%'}}><BacterialOptions construct={testData}></BacterialOptions></View>
            )
        } else if (system==="Insect"){
            return (
                <View style={{width:'100%'}}><InsectOptions construct={testData}></InsectOptions></View>
            )
        } else {
            return (
                <View style={{width:'100%'}}><MammalianOptions construct={testData}></MammalianOptions></View>
            )
        }
    }

    const pageHandler = (construct) => {
        if (Object.hasOwn(construct.vector_info, "filledDuet")) {
        return (
                <Fragment>
                    <Header data={testData} projectNumber={projectNumber} internal={internal}/>
                    <Text style={{textAlign: 'center'}}>Vector: {testData.vector_info.vector_name}</Text>
                    <Text style={{textAlign: 'center'}}>Site 1</Text>
                    <FormattedConstruct construct={testData.Site1} restrictionSites={testData.Site1REs} bacterial={testData.vector_info.vector_system==="Bacterial"} projectNumber={projectNumber} internal={internal}/>
                    <FormattedSequence construct={testData.Site1}/>
                    <Text style={{textAlign: 'center'}}> </Text>
                    <Text style={{textAlign: 'center'}}>Site 2</Text>
                    <FormattedConstruct construct={testData.Site2} restrictionSites={testData.Site2REs} bacterial={testData.vector_info.vector_system==="Bacterial"} projectNumber={projectNumber} internal={internal}/>
                    <FormattedSequence construct={testData.Site2}/>
                    <Options construct={testData}/>
                </Fragment>
        )
        } else {
            let temp_site = (testData.Site1===null?testData.Site2:testData.Site1)
            let temp_siteREs = (testData.Site1REs===null?testData.Site2REs:testData.Site1REs)
            return (
                <Fragment>
                    <Header data={testData} projectNumber={projectNumber} internal={internal}/>
                    <Text style={{textAlign: 'center'}}>Vector: {testData.vector_info.vector_name}</Text>
                    <FormattedConstruct construct={temp_site} restrictionSites={temp_siteREs} bacterial={testData.vector_info.vector_system==="Bacterial"} projectNumber={projectNumber} internal={internal}/>
                    <FormattedSequence construct={temp_site}/>
                    <Options construct={testData}/>
                </Fragment>
        )
        }
    }

    /*Format the return of construct page to deal with Filled Duets, single Duets can be passed similarly as nonDuets
    */

    return (
        <View style={styles.tableContainer} break={index!==0}>
        <Fragment>{pageHandler(testData)}</Fragment>
        </View>
)
};

export default ConstructPage