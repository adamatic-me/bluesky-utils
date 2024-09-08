import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Bluesky Utils Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Add Starter Pack to List</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate('/add-starter-pack')} className="w-full">
              Go to Add Starter Pack
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Re-order Feeds</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate('/reorder-feeds')} className="w-full">
              Go to Re-order Feeds
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;