import React, { useState, useCallback } from 'react'
import { ItemTypes } from './DragTypes'
import { useDrop } from 'react-dnd'
import { Elem_list } from "./Data";
import Geneblock from "./Geneblock";

function Board({board, setBoard, moveBoard, removeBoard, addToBoardWhileHover, gene_list, changecabbagepopupstate}) {

  let [{isOver}, drop] = useDrop(() => ({
    accept: ItemTypes.GENEBLOCK,
    drop: (item) => {
      if (item.type === "cabbage") {
        changecabbagepopupstate(true)
      } else {
        addImageToBoard(item, gene_list, board)
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }),[gene_list, board]);

  let addImageToBoard = (item, gene_list, board) => {
    if (board.some((item)=>Object.hasOwn(item, "fromATBWH"))) {
      setBoard((board) => {
        let temp = [...board]
        temp.forEach((item) => delete item.fromATBWH)
        return [...temp]
      })
    } else {
      if (item.source_block && !(item.type === "Gene")) {
        const pictureList = Elem_list.filter((picture) => item.id === picture.id);
        setBoard((board) => {
          return [...board, pictureList[0]]
        });
      } else if (item.source_block && (item.type === "Gene")) {
        const pictureList = gene_list.filter((picture) => item.id === picture.id);
        setBoard((board) => {
          return [...board, pictureList[0]];
        })
      }
    }
  };


  return (
      <div className={'inner-workspace'} ref={drop}>
        {board.map((element, i) => {
          return <Geneblock
              id={element.id}
              color={element.element_color}
              name={element.element_name}
              source_block={false}
              moveBoard={moveBoard}
              removeBoard={removeBoard}
              addToBoardWhileHover={addToBoardWhileHover}
              type={element.element_type}
              index={i}/>;
        })}
      </div>

  )
}

export default Board