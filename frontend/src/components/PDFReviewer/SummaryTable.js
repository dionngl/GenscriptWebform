import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import TableHeader from './Table_Components/TableHeader'
import TableBlankRow from './Table_Components/TableBlankRow'
import TableRow from './Table_Components/TableRow'

const tableRowsCount = 20;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#bff0fd',
    },
});

const SummaryTable = ({data, projectNumber, system, internal}) => (
    <View style={styles.tableContainer}>
        <TableHeader system={system}/>
        <TableRow items={data} projectNumber={projectNumber} internal={internal}/>
        <TableBlankRow rowsCount={ tableRowsCount - data.length} />
    </View>
);

export default SummaryTable