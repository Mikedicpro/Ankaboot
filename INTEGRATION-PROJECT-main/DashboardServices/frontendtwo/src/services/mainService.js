import axios from "axios";

const API_URL = "http://10.200.1.103:8385";
const getReportData = () => {
  return axios.get(`${API_URL}/report`, {
    headers: { "Content-Type": "application/json" },
  });
};

const getHealthApi = () => {
  return axios.get(`http://10.200.1.107:8088/api/health`, {
    headers: { "Content-Type": "application/json" },
  });
};

const getUnsureApi = () => {
  return axios.get(`http://10.200.1.107:8088/api/unsure`, {
    headers: { "Content-Type": "application/json" },
  });
};

const getAllTopics = () => {
  return axios.get(`http://10.200.1.107:8088/api/topic`, {
    headers: { "Content-Type": "application/json" },
  });
};

const addApi = (data) => {
  const config = {
    method: "post", // Use 'post' method
    url: "http://10.200.1.107:8088/api/sources", // Replace with your API endpoint
    data: data
      ? data
      : {
          url: "/health-api#health-api for testing",
          needsKey: true,
          apiKey: "nabcdef12345 key for testing",
        }, // Data to be sent in the request body
    headers: {
      "Content-Type": "application/json", // Set the content type to JSON
      Origin: "*",
    },
  };
  return axios(config);
};

export { getReportData, addApi };
