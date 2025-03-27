import React, { useRef } from 'react'
import { ItemTypes } from './DragTypes'
import { useDrag, useDrop } from 'react-dnd'
import Chip from "@mui/material/Chip"

function Geneblock({id, name, color, source_block, moveBoard, removeBoard, addToBoardWhileHover, type, index}) {

    const ref = useRef(null)
    const [{ handlerID }, drop] = useDrop({
        accept: ItemTypes.GENEBLOCK,
        collect(monitor) {
            return {
                handlerID: monitor.getHandlerId(),
            }
        },
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientX = clientOffset.x - hoverBoundingRect.left
            if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
                return
            }
            if (!(dragIndex === undefined)) {
                console.log("in Geneblock_Hover")
                moveBoard(dragIndex, hoverIndex)
                item.index = hoverIndex
            } else {
                addToBoardWhileHover(hoverIndex, item)
                item.index = hoverIndex
            }
        },
    })
    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.GENEBLOCK,
        item: { id: id,
                source_block: source_block,
                index: index,
                type: type,
                },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
        end: (item, monitor) => {
            if (!monitor.didDrop()) {
                if (!(item.index === undefined)) {
                    console.log("in Geneblock USeDrag Hook", item, item.index)
                    removeBoard(item.index)
                }
            }

        },}));
    drag(drop(ref))
    if (type === "Gene") {
        return (
          <div
              ref={ref}
              style={{
                  opacity: isDragging ? 0.5 : 1,
                  fontSize: 25,
                  fontWeight: 'bold',
                  cursor: 'move',
                  display: "inline-block"
              }}
          >
              <Chip
                  style={{backgroundColor: color}}
                  variant={"outlined"}
                  label={name}/>
          </div>
        )
      } else { return (
          <div
              ref={ref}
              style={{
                  opacity: isDragging ? 0.5 : 1,
                  fontSize: 25,
                  fontWeight: 'bold',
                  cursor: 'move',
                  display: "inline-block"
              }}
          >
              <Chip
                  style={{backgroundColor: color}}
                  label={name}/>
          </div>
    )
      }

}

export default Geneblock