import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import UserItem from './UserItem';
import './UserList.css';

const UserList = ({ users, onDragEnd, onSelectUser }) => {
    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
            return;
        }
        onDragEnd(result);
    };

    return (
        <div className="UserList">
            <h2>User List</h2>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="userList">
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            {users.map((user, index) => (
                                <Draggable key={user.id} draggableId={user.id.toString()} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={`UserItem ${snapshot.isDragging ? 'is-dragging' : ''}`}
                                        >
                                            <UserItem user={user} onSelectUser={onSelectUser} />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default UserList;
