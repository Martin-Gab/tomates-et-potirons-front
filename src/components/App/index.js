// == Local Imports
import './styles.scss';

// Components Imports
import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Amap from 'src/components/Amap';
import Footer from 'src/components/Footer';
import MembershipForm from 'src/components/MembershipForm';
import MemberDashboard from 'src/components/MemberDashboard';

// Packages Imports
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

// == Composant
const App = () => {
  const isOpen = useSelector((state) => state.membership.isOpen);

  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nos-activites/amap" element={<Amap />} />
        <Route path="/mon-espace/tableau-de-bord" element={<MemberDashboard />} />
      </Routes>
      <Footer />
      {isOpen && <MembershipForm />}
    </div>
  );
};

// == Export
export default App;
