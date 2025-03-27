import React, {Fragment} from 'react';
import {View, StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    tableContainer: {
        marginTop: 24,
        width:'100%',
        },
    Container: {
        marginTop: 12,
        borderWidth: 1,
        borderColor: '#222222',
    },
    FastaContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    Header: {
        color: '#000000',
        letterSpacing: 2,
        fontSize: 25,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    Sequence: {
        fontFamily: 'Courier-Bold',
    }
});


const ReferenceSequencesPage = ({data, internal}) => {
    let GeneList = data.GeneList

    const handleName = (name) => {

        return (
            <Fragment>
                <Text>Protein Name: {name}</Text>
            </Fragment>
        )
    }

    const handleUniprot = (uniprot) => {

        if (uniprot!==null) {
            return (
                <Fragment>
                    <Text>Uniprot ID: {uniprot}</Text>
                </Fragment>
            )
        } else {
            return (
                <Fragment></Fragment>
            )
        }
    }

    const sequenceFormatter = (sequence, offset) => {
        let offset_modulo = offset % 10
        let temp_sequence = sequence.padStart(sequence.length + (((offset_modulo)+9) % 10)," ")
        let sequence_array = temp_sequence.match(/.{1,10}/g)

        let temp_count = 0 + offset - ((offset-1)%10) - 1
        let count_array = sequence_array.map((item) => {
            temp_count += item.length
            return String(temp_count).padStart(10," ")
        })
        let chunkSize = 5
        let text_array = []
        for (let i = 0; i < sequence_array.length; i += chunkSize) {
            text_array.push("|  "+count_array.slice(i, i + chunkSize).join(" "))
            text_array.push("|  "+sequence_array.slice(i, i + chunkSize).join(" "))
        }
        return (
            <Fragment>{text_array.map((i)=><Text style={styles.Sequence}>{i}</Text>)}</Fragment>
        )
    }

    const fastaWrapper = (sequence) => {
        let seq = sequence
        seq = [...seq]
        return (
            seq.map((item) => <Text style={styles.sequence}>{item}</Text>)
        )
    }

    const handleSequence = (sequence, name, offset) => {

        return (
            <Fragment>
                <Fragment>{sequenceFormatter(sequence, offset)}</Fragment>
                <Text> </Text>
                <Text>>{name}_Fasta</Text>
                <View style={styles.FastaContainer}>
                <Fragment>{fastaWrapper(sequence)}</Fragment>
                </View>
            </Fragment>
        )
    }

    const handleMap = (gene, index, internal) => {
        let temp_name = (internal ? gene.element_immutable_name :gene.element_redacted_name)

        return (
            <Fragment>
                <View style={styles.Container} break={index!==0}>
                <Fragment>{handleName(temp_name)}</Fragment>
                <Fragment>{(internal?handleUniprot(gene.element_uniprot):"")}</Fragment>
                <Text>Starting Residue Number: {gene.element_offset}</Text>
                <Text> </Text>
                <Fragment>{handleSequence(gene.element_immutable_sequence, temp_name, gene.element_offset)}</Fragment>
                <Text> </Text>
                </View>
            </Fragment>
        )
    }

    return (
        <View>
            <Text style={styles.Header}>Reference Sequences:</Text>
            <Fragment>{GeneList.map((gene, index)=>handleMap(gene, index, internal))}</Fragment>
        </View>
    )
}

export default ReferenceSequencesPage