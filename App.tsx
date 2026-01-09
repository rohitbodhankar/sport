
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CricketLive from './components/CricketLive';
import Tournaments from './components/Tournaments';
import StatsCharts from './components/StatsCharts';
import AIChat from './components/AIChat';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'tournaments' | 'stats' | 'chat'>('home');

  return (
    <div className="min-h-screen flex flex-col selection:bg-green-500 selection:text-black">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow pt-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        {activeTab === 'home' && (
          <>
            <Hero onExplore={() => setActiveTab('tournaments')} />
            <CricketLive />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
              <StatsCharts />
              <AIChat mini />
            </div>
          </>
        )}

        {activeTab === 'tournaments' && <Tournaments />}
        
        {activeTab === 'stats' && (
          <div className="py-12">
            <h2 className="text-4xl font-extrabold mb-8 text-center text-gradient uppercase tracking-tighter">
              Performance Analytics
            </h2>
            <StatsCharts expanded />
          </div>
        )}

        {activeTab === 'chat' && <AIChat />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
