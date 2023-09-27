import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import SurveyForm from './components/pages/SurveyForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/pages/Homepage';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      {/* Header component*/}
      <Header/>

      {/* Apollo server */}
        <ApolloProvider client={client}>
          <Router>
            <Routes>
              <Route 
                path="/" 
                element={<Homepage />}
              />
              <Route 
                path="/create" 
                element={<SurveyForm />}
              />
            </Routes>
          </Router>
          </ApolloProvider>

        {/* Footer component */}
        <Footer/>
    </div>
)}

export default App;
