import { Header } from 'components';
import { CountrySearch, Home, Country } from 'pages';
import { Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" index element={<Home />} />
        <Route path="/country" element={<Country />} />
        <Route path="/country/:id" element={<CountrySearch />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
