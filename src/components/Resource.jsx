import React, { useEffect, useState } from "react";
import axios from "axios";

const Resource = ({ path, render, apiKey }) => {
  // Add apiKey prop
  const initialState = {
    trans: [],
    loading: true,
    error: null,
  };

  const [state, setState] = useState(initialState);

  const getData = async () => {
    try {
      const config = {
        headers: apiKey ? { "x-api-key": apiKey } : {}, // Conditionally add API key
      };

      const result = await axios.get(path, config);

      console.log("API Result:", result.data);

      // Validate that we got actual data, not HTML
      if (
        typeof result.data === "string" &&
        result.data.includes("<!doctype html>")
      ) {
        throw new Error(
          "Received HTML instead of JSON data. Check API URL and authentication."
        );
      }

      const newData = {
        trans: result.data,
        loading: false,
        error: null,
      };

      setState(newData);
    } catch (error) {
      console.log("Error in get data:", error.message);
      setState({
        trans: [],
        loading: false,
        error: error.message,
      });
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, apiKey]); // Add apiKey as dependency

  return <div className="showlist">{render(state)}</div>;
};

export default Resource;
