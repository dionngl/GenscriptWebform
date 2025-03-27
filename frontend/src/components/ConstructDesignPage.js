import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from "./Drag_n_Drop/DragDrop";
import { useLocation } from 'react-router-dom';

function ConstructDesignPage() {
        let location = useLocation();
        console.log("test use location", location);
        console.log("test use location state", location.state);

        return (
            <div>
                <DndProvider debugMode={true} backend={HTML5Backend}>
                    <DragDrop state={location.state}/>
                </DndProvider>
            </div>
        )
}

export default ConstructDesignPage