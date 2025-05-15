import {
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Card, Typography } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AuthContext } from "../contexts/AuthContext";

export default function DashboardOverview() {
  const { user } = useContext(AuthContext);
  const [equipmentStats, setEquipmentStats] = useState({
    total: 0,
    categories: [],
    recentSales: [],
  });

  useEffect(() => {
    // Fetch equipment stats from your API
    fetch("https://ph-assignment-10-server-rosy.vercel.app/equipments")
      .then((res) => res.json())
      .then((data) => {
        const stats = {
          total: data.length,
          categories: getCategoryStats(data),
          recentSales: getRecentSales(data),
        };
        setEquipmentStats(stats);
      });
  }, []);

  const getCategoryStats = (data) => {
    const categories = {};
    data.forEach((item) => {
      categories[item.category] = (categories[item.category] || 0) + 1;
    });
    return Object.entries(categories).map(([name, value]) => ({ name, value }));
  };

  const getRecentSales = (data) => {
    return data.slice(-7).map((item, index) => ({
      name: `Day ${index + 1}`,
      amount: item.price,
    }));
  };

  const COLORS = ["#FF0000", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  const statsCards = [
    {
      title: "Total Products",
      value: equipmentStats.total,
      icon: ShoppingBagIcon,
      color: "red",
    },
    {
      title: "Total Revenue",
      value: "$12,426",
      icon: CurrencyDollarIcon,
      color: "green",
    },
    {
      title: "Active Users",
      value: "2,318",
      icon: UserGroupIcon,
      color: "amber",
    },
    {
      title: "Growth Rate",
      value: "+23%",
      icon: ArrowTrendingUpIcon,
      color: "blue",
    },
  ];

  return (
    <div className="grid gap-6">
      {/* Welcome Card */}
      <div className="p-4 border-red-100 dark:border-red-900/20 border rounded-lg bg-red-50/50 dark:bg-gray-900">
        <Typography
          variant="h6"
          className="mb-2 text-gray-800 dark:text-gray-100"
        >
          Welcome, {user?.displayName || "User"}!
        </Typography>
        <Typography className="text-gray-700 dark:text-gray-300">
          Email: {user?.email}
        </Typography>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((stat, index) => (
          <Card
            key={index}
            className="p-4 hover:shadow-lg transition-all border border-gray-200 dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-2 rounded-lg bg-${stat.color}-500/10 text-${stat.color}-500`}
              >
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="text-gray-600 dark:text-gray-400"
                >
                  {stat.title}
                </Typography>
                <Typography
                  variant="h6"
                  className="text-gray-800 dark:text-gray-100"
                >
                  {stat.value}
                </Typography>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <Card className="p-4 dark:bg-gray-900">
          <Typography
            variant="h6"
            className="mb-4 text-gray-800 dark:text-gray-100"
          >
            Sales Overview
          </Typography>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={equipmentStats.recentSales}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="#ef4444"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Category Distribution */}
        <Card className="p-4 dark:bg-gray-900">
          <Typography
            variant="h6"
            className="mb-4 text-gray-800 dark:text-gray-100"
          >
            Category Distribution
          </Typography>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={equipmentStats.categories}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {equipmentStats.categories.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="add-equipment">
          <Card className="p-4 hover:shadow-lg transition-all border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
            <Typography
              variant="h6"
              className="mb-2 text-gray-800 dark:text-gray-100"
            >
              Add Equipment
            </Typography>
            <Typography className="text-gray-600 dark:text-gray-300">
              Add new equipment to the system
            </Typography>
          </Card>
        </Link>

        <Link to="all-equipments">
          <Card className="p-4 hover:shadow-lg transition-all border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
            <Typography
              variant="h6"
              className="mb-2 text-gray-800 dark:text-gray-100"
            >
              All Equipment
            </Typography>
            <Typography className="text-gray-600 dark:text-gray-300">
              Browse all available equipment
            </Typography>
          </Card>
        </Link>

        <Link to="profile">
          <Card className="p-4 hover:shadow-lg transition-all border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
            <Typography
              variant="h6"
              className="mb-2 text-gray-800 dark:text-gray-100"
            >
              Profile Settings
            </Typography>
            <Typography className="text-gray-600 dark:text-gray-300">
              Update your profile information
            </Typography>
          </Card>
        </Link>
      </div>
    </div>
  );
}
