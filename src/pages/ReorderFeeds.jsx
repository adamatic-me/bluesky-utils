import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GripVertical } from 'lucide-react';

const ReorderFeeds = () => {
  const [feeds, setFeeds] = useState([
    "Discover",
    "News",
    "Best of Follows",
    "Popular With Friends",
    "Science"
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(feeds);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setFeeds(items);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Re-order Feeds</h1>
      <Card>
        <CardHeader>
          <CardTitle>Your Feeds</CardTitle>
        </CardHeader>
        <CardContent>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="feeds">
              {(provided) => (
                <ul {...provided.droppableProps} ref={provided.innerRef}>
                  {feeds.map((feed, index) => (
                    <Draggable key={feed} draggableId={feed} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="flex items-center justify-between p-4 mb-2 bg-white rounded shadow"
                        >
                          <span>{feed}</span>
                          <div {...provided.dragHandleProps}>
                            <GripVertical className="text-gray-400" />
                          </div>
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReorderFeeds;