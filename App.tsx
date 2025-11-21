import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ChatBot } from './components/ChatBot';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { BrowseSkills } from './pages/BrowseSkills';
import { PostSkill } from './pages/PostSkill';
import { Messages } from './pages/Messages';
import { Profile } from './pages/Profile';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/browse" element={<BrowseSkills />} />
          <Route path="/post" element={<PostSkill />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <ChatBot />
      </Layout>
    </HashRouter>
  );
};

export default App;
