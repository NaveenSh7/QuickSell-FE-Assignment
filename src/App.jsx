import { useState } from "react";
import reactLogo from "./assets/react.svg";


import "./App.css";
import Navbar from "./components/Navbar";
import Customer from "./components/Customer";
import { useEffect } from "react";
import generateCustomerRecords from "./generate";

function App() {
  const [allRecords, setAllRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [displayedRecords, setDisplayedRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const RECORDS_PER_PAGE = 30;

  useEffect(() => {
    const generatedRecords = generateCustomerRecords(100000);
    setAllRecords(generatedRecords);
    setFilteredRecords(generatedRecords);
    setDisplayedRecords(generatedRecords.slice(0, RECORDS_PER_PAGE));
  }, []);

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
    setCurrentPage(1);
    setHasMore(true);

    if (!searchValue.trim()) {
      setFilteredRecords(allRecords);
      setDisplayedRecords(allRecords.slice(0, RECORDS_PER_PAGE));
    } else {
      const filtered = allRecords.filter((record) =>
        record.name.toLowerCase().includes(searchValue.toLowerCase())
      );

      setFilteredRecords(filtered);
      setDisplayedRecords(filtered.slice(0, RECORDS_PER_PAGE));
      setHasMore(filtered.length > RECORDS_PER_PAGE);
    }
  };

  const loadMoreRecords = () => {
    if (loading || !hasMore) return;

    setLoading(true);

    setTimeout(() => {
      const startIndex = currentPage * RECORDS_PER_PAGE;
      const endIndex = startIndex + RECORDS_PER_PAGE;
      const newRecords = filteredRecords.slice(startIndex, endIndex);

      if (newRecords.length === 0) {
        setHasMore(false);
      } else {
        setDisplayedRecords((prev) => [...prev, ...newRecords]);
        setCurrentPage((prev) => prev + 1);
      }

      setLoading(false);
    }, 300);
  };

  return (
    <div>
      <div style={{position: "sticky", top: 0}}> 
          <Navbar />
      </div>
    
      <Customer
        records={displayedRecords}
        loadMore={loadMoreRecords}
        loading={loading}
        hasMore={hasMore}
        totalRecords={filteredRecords.length}
        onSearch={handleSearch}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;
