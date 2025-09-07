import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import WeeklyReport from './pages/WeeklyReport';
import EditDay from './pages/EditDay';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<WeeklyReport />} />
        <Route path="/edit/:date" element={<EditDay />} />
      </Routes>
    </Layout>
  );
}

export default App;