import { AppBar } from './components/app-bar';
import { HomePage } from './components/home-page';

function App() {
    return (
        <div className="light">
            <nav>{/* TODO */}</nav>
            <main className="h-svh bg-background flex flex-col">
                <AppBar />
                <HomePage />
            </main>
        </div>
    );
}

export default App;
