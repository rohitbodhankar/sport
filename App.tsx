
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CricketLive from './components/CricketLive';
import Tournaments from './components/Tournaments';
import StatsCharts from './components/StatsCharts';
import AIChat from './components/AIChat';
import NewsSection from './components/NewsSection';
import IntelligenceLog from './components/IntelligenceLog';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'tournaments' | 'stats' | 'chat' | 'news'>('home');

  return (
    <div className="min-h-screen flex flex-col selection:bg-black selection:text-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow pt-24 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        {activeTab === 'home' && (
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 pb-24">
            <div className="xl:col-span-8 space-y-16">
              <Hero onExplore={() => setActiveTab('tournaments')} />
              
              <div className="space-y-6">
                <h2 className="text-2xl font-black uppercase italic tracking-tighter border-b-4 border-black inline-block">Real-Time Transmissions</h2>
                <CricketLive />
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-black uppercase italic tracking-tighter border-b-4 border-black inline-block">Local Intelligence</h2>
                <IntelligenceLog />
              </div>

              <Tournaments limited />
            </div>
            
            <div className="xl:col-span-4 space-y-12">
              <div className="sticky top-28 space-y-12">
                <div>
                  <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-black inline-block tracking-tighter">Strategic Consult</h2>
                  <AIChat mini />
                </div>
                <div>
                  <h2 className="text-2xl font-black uppercase mb-6 border-b-4 border-black inline-block tracking-tighter">The Global Pulse</h2>
                  <NewsSection limited />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tournaments' && <Tournaments />}
        
        {activeTab === 'stats' && (
          <div className="py-12">
            <StatsCharts expanded />
          </div>
        )}

        {activeTab === 'chat' && (
          <div className="py-12 max-w-4xl mx-auto">
            <AIChat />
          </div>
        )}

        {activeTab === 'news' && (
          <div className="py-12 max-w-4xl mx-auto">
            <NewsSection />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
