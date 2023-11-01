import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import HealthApi from "./pages/HealthApi/HealthApi";
import UnsureApi from "./pages/UnsureApi/UnsureApi";
import Report from "./pages/Report/Report";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";

export const UserContext = createContext();

function App() {
  const [report, setReport] = useState([
    {
      date: "",
      time: "",
      topic: "",
      average: "",
    },
  ]);

  const [unsure, setUnsure] = useState([
    {
      url: "http://localhost:3000/unsure-api#unsure-api",
      extraInfo: "no info available",
    },
    {
      url: "http://localhost:3000/unsure-api#unsure-api",
      extraInfo: "no info available",
    },
    {
      url: "http://localhost:3000/unsure-api#unsure-api",
      extraInfo: "no info available",
    },
    {
      url: "http://localhost:3000/unsure-api#unsure-api",
      extraInfo: "no info available",
    },
    {
      url: "http://localhost:3000/unsure-api#unsure-api",
      extraInfo: "no info available",
    },
    {
      url: "http://localhost:3000/unsure-api#unsure-api",
      extraInfo: "no info available",
    },
    {
      url: "http://localhost:3000/unsure-api#unsure-api",
      extraInfo: "no info available",
    },
    {
      url: "http://localhost:3000/unsure-api#unsure-api",
      extraInfo: "no info available",
    },
  ]);

  const [health, setHealth] = useState([
    {
      url: "http://localhost:3000/health-api#health-api",
      needsKey: true,
      apiKey: "nabcdef12345",
    },
    {
      url: "http://localhost:3000/health-api#health-api",
      needsKey: true,
      apiKey: "nabcdef12345",
    },
    {
      url: "http://localhost:3000/health-api#health-api",
      needsKey: true,
      apiKey: "nabcdef12345",
    },
    {
      url: "http://localhost:3000/health-api#health-api",
      needsKey: true,
      apiKey: "nabcdef12345",
    },
    {
      url: "http://localhost:3000/health-api#health-api",
      needsKey: true,
      apiKey: "nabcdef12345",
    },
    {
      url: "http://localhost:3000/health-api#health-api",
      needsKey: false,
      apiKey: "nabcdef12345",
    },
  ]);

  const [action, setAction] = useState({
    url: "",
    extraInfo: "",
  });

  return (
    <UserContext.Provider
      value={{
        report,
        setReport,
        health,
        setHealth,
        unsure,
        setUnsure,
        action,
        setAction,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/report" element={<Report />} />
            <Route path="/health-api" element={<HealthApi />} />
            <Route path="/unsure-api" element={<UnsureApi />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
