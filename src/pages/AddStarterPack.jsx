import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Breadcrumb from '../components/Breadcrumb';

const AddStarterPack = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [allStarterPacks, setAllStarterPacks] = useState(['Journalists', 'Astronomy', 'Bluesky', 'Technology', 'Art', 'Music', 'Sports', 'Politics', 'Fashion', 'Food']);
  const [filteredStarterPacks, setFilteredStarterPacks] = useState(allStarterPacks);
  const [selectedPack, setSelectedPack] = useState(null);
  const [userLists, setUserLists] = useState(['My Favorites', 'Tech News', 'Friends']);
  const [showNewListInput, setShowNewListInput] = useState(false);
  const [newListName, setNewListName] = useState('');

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Add Starter Pack to List', path: '/add-starter-pack' },
  ];

  useEffect(() => {
    const filtered = allStarterPacks.filter(pack => 
      pack.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStarterPacks(filtered);
  }, [searchTerm, allStarterPacks]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectPack = (pack) => {
    setSelectedPack(pack);
  };

  const handleAddToList = (list) => {
    console.log(`Adding ${selectedPack} to ${list}`);
    // TODO: Implement actual add to list logic
  };

  const handleNewList = () => {
    setShowNewListInput(true);
  };

  const handleSaveNewList = () => {
    if (newListName.trim()) {
      setUserLists([...userLists, newListName.trim()]);
      setNewListName('');
      setShowNewListInput(false);
    }
  };

  const handleCancelNewList = () => {
    setNewListName('');
    setShowNewListInput(false);
  };

  return (
    <div className="min-h-screen p-8 bg-background">
      <Breadcrumb items={breadcrumbItems} />
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
            <div className="flex flex-wrap">
              {filteredStarterPacks.map((pack, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="mr-2 mb-2"
                  onClick={() => handleSelectPack(pack)}
                >
                  {pack}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Lists</CardTitle>
          </CardHeader>
          <CardContent>
            {showNewListInput ? (
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="New List name..."
                  value={newListName}
                  onChange={(e) => setNewListName(e.target.value)}
                  className="mb-2"
                />
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={handleCancelNewList}>Cancel</Button>
                  <Button onClick={handleSaveNewList}>Save</Button>
                </div>
              </div>
            ) : (
              <Button className="mb-4" onClick={handleNewList}>New List</Button>
            )}
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