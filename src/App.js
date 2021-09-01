import React, { useEffect, useCallback, useState } from "react";
import giphyApiClient from "./GiphyDisplay/giphyApiClient";
import GiphyDisplay from "./GiphyDisplay/GiphyDisplay";

function App() {
  const [loading, setLoading] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [gifs, setGifs] = useState([]);

  const fetchGifs = useCallback(async () => {
    setLoading(true);
    try {
      const results = await giphyApiClient().get("/trending", {
        params: {
          api_key: "kMuMPV3U2vlMl1dBzTcNNW9r4gFI1AB7",
        },
      });
      setGifs(results.data.data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchGifs();
  }, [fetchGifs]);

  const handleChange = (event) => {
    setSearchWord(event.target.value);

    if (event.target.value === "") {
      fetchGifs();
    }
  };

  const handleClick = async (event) => {
    try {
      const results = await giphyApiClient().get("/search", {
        params: {
          api_key: "kMuMPV3U2vlMl1dBzTcNNW9r4gFI1AB7",
          q: searchWord,
          lang: "en",
        },
      });
      setGifs(results.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <GiphyDisplay
      gifs={gifs}
      searchWord={searchWord}
      loading={loading}
      handleChange={handleChange}
      handleClick={handleClick}
    />
  );
}

export default App;
