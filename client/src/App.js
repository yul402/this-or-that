import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/pages/Homepage';

import SurveyForm from './components/pages/SurveyForm';
import SurveyVote from './components/pages/SurveyVote';


import Login from './components/pages/Login';
import Signup from './components/pages/Signup';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      {/* Apollo server */}
        <ApolloProvider client={client}>
          <Router>
          <Header/>
            <Routes>
              <Route 
                path="/" 
                element={<Homepage />}
              />
              <Route 
                path="/create" 
                element={<SurveyForm />}
              />

              <Route 
                path="/survey/:id" 
                element={<SurveyVote />}

                <Route 
                path="/login"
                element={<Login />}
              />
              <Route 
                path="/signup"
                element={<Signup />}

              />
            </Routes>
          </Router>
          </ApolloProvider>

        {/* Footer component */}
        <Footer/>
    </div>
)}

export default App;
