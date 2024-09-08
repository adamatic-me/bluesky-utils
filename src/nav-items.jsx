import { HomeIcon, PlusCircleIcon, ListIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddStarterPack from "./pages/AddStarterPack.jsx";
import ReorderFeeds from "./pages/ReorderFeeds.jsx";

export const navItems = [
  {
    title: "Login",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Dashboard />,
  },
  {
    title: "Add Starter Pack",
    to: "/add-starter-pack",
    icon: <PlusCircleIcon className="h-4 w-4" />,
    page: <AddStarterPack />,
  },
  {
    title: "Re-order Feeds",
    to: "/reorder-feeds",
    icon: <ListIcon className="h-4 w-4" />,
    page: <ReorderFeeds />,
  },
];