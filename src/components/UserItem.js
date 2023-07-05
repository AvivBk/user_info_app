import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const UserItem = ({ user, onSelectUser, index }) => {
    return (
        <Draggable draggableId={user.id.toString()} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                        ...provided.draggableProps.style,
                        opacity: snapshot.isDragging ? 0.5 : 1,
                        cursor: 'move',
                        padding: '0.5rem',
                        backgroundColor: '#f2f2f2',
                        marginBottom: '0.5rem',
                    }}
                >
                    {user.name}
                </div>
            )}
        </Draggable>
    );
};

export default UserItem;
