import React from 'react';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Header from './components/Header';
import SearchField from './components/SearchField';
import Images from './components/Images';
import useAxios from './hooks/useAxios';
import LoginForm from './components/LoginForm';


export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=cats&client_id=Qv8JYDlDfWdefzov8bcH1RZz0tNa7PVHq0sywwGqb-o`
  );
  const [user, setUser] = useState(null); 

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
    user, 
    setUser, 
  };

  return (
    <Router>
      <ImageContext.Provider value={value}>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </ImageContext.Provider>
    </Router>
  );
}

const Home = () => {
  const user = null; 
  return (
    <>
      <Header user={user}>
        <SearchField />
      </Header>
      <Images />
    </>
  );
};

export default App;
