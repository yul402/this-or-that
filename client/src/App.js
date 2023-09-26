import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import SurveyForm from './components/pages/SurveyForm';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <p>
          Test Interface
        </p>
        <SurveyForm/>
      </div>
    </ApolloProvider>
)}

export default App;
