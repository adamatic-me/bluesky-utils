import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const AddStarterPack = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState(['Journalists', 'Astronomy', 'Bluesky']);
  const [selectedPack, setSelectedPack] = useState(null);
  const [userLists, setUserLists] = useState(['My Favorites', 'Tech News', 'Friends']);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // TODO: Implement actual search logic
  };

  const handleSelectPack = (pack) => {
    setSelectedPack(pack);
  };

  const handleAddToList = (list) => {
    console.log(`Adding ${selectedPack} to ${list}`);
    // TODO: Implement actual add to list logic
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Add Starter Pack to List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Starter Pack</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              type="text"
              placeholder="Find Starter Pack..."
              value={searchTerm}
              onChange={handleSearch}
              className="mb-4"
            />
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                className="mr-2 mb-2"
                onClick={() => handleSelectPack(suggestion)}
              >
                {suggestion}
              </Button>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Lists</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="mb-4">New List</Button>
            {userLists.map((list, index) => (
              <div key={index} className="flex justify-between items-center mb-2">
                <span>{list}</span>
                <Button
                  onClick={() => handleAddToList(list)}
                  disabled={!selectedPack}
                >
                  Add
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddStarterPack;