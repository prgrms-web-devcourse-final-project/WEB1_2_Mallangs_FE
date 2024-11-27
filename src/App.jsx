import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import UserProfileCard from './components/layout/UserProfileCard';
import MallangMap from './components/MallangMap';

function App() {
    return (
        <div>
            <UserProfileCard />
            <Header />
            <main>
                <MallangMap />
            </main>
            <Footer />
        </div>
    );
}

export default App;
