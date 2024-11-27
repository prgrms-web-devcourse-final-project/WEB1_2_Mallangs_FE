import Header from './components/layout/Header';
import UserProfileCard from './components/layout/UserProfileCard';
import AreaInfoPanel from './components/layout/AreaInfoPanel';
import MallangMap from './components/MallangMap';
import Footer from './components/layout/Footer';

function App() {
    return (
        <div>
            <Header />
            <AreaInfoPanel />
            <UserProfileCard />
            <main id="main-wrapper">
                <MallangMap />
            </main>
            <Footer />
        </div>
    );
}

export default App;
