import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologiesSection from './components/TechnologiesSection';
import Footer from './components/Footer';   

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);

    // JSON Data Fetching with loading state
  useEffect(() => {
    setLoading(true);
    fetch('/technologies.json')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        // Small delay to cleanly observe the loading state
        setTimeout(() => {
          setTechnologies(data);
          setLoading(false);
        }, 400);
      })
      .catch((error) => {
        console.error('Error fetching technologies:', error);
        toast.error('Failed to load technologies');
        setLoading(false);
      });
  }, []);

    // Add to Stack with Duplicate Warning
  const handleAddToStack = (tech) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning(`"${tech.name}" is already in your stack!`, {
        icon: '⚠️',
      });
      return;
    }

    setSelectedStack((prev) => [...prev, tech]);
    toast.success(`Added "${tech.name}" to your stack!`, {
      icon: '🚀',
    });
  };

    // Remove Single Item
  const handleRemoveFromStack = (techId) => {
    const itemToRemove = selectedStack.find((item) => item.id === techId);
    setSelectedStack((prev) => prev.filter((item) => item.id !== techId));

    if (itemToRemove) {
      toast.info(`Removed "${itemToRemove.name}" from your stack`, {
        icon: '🗑️',
      });
    }
  };    

  // remove all items
  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;

    setSelectedStack([]);
    toast.error('All technologies removed from your stack', {
      icon: '🧹',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFB]">
      <ToastContainer
        position="top-right"
        autoClose={2800}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme= "light"
      />

      <Navbar />

      <main className="flex-grow">
        <Hero />
        <TechnologiesSection
          technologies={technologies}
          selectedStack={selectedStack}
          loading={loading}
          onAddToStack={handleAddToStack}
          onRemoveFromStack={handleRemoveFromStack}
          onRemoveAll={handleRemoveAll}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;