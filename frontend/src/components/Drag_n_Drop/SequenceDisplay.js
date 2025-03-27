import React, { useState } from 'react'

function SequenceDisplay({board, sequencestring, setSequenceString, constructstring, setConstructString}) {


    let con_name = board.map((element) => element.element_name).join("-")
    let seq = board.map((element) => element.element_sequence).join("")
    if ((seq.length > 0) && (!(seq[0] === "M"))) {
        seq = 'M' + seq
        con_name = 'M-'+ con_name
    }

    if (!(seq===sequencestring)) {
        setSequenceString(()=> seq)
    }
    if (!(con_name===constructstring)) {
        setConstructString(()=> con_name)
    }

    return (
        <>
            <div>
                <p1>Construct Name:</p1>
            </div>
            <div>
                <p1 className={'sequence-string'}>{constructstring}</p1>
            </div>
        <div>
            <p1>Construct Sequence:</p1>
        </div>
        <div>
            <p1 class={'sequence-string'}>{sequencestring}</p1>
        </div>
        </>
    )
}

export default SequenceDisplay