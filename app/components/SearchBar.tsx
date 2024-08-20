"use client";

import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import Accordion from './Accordion';
import ToggleButton from './ToggleButton';

interface FAQ {
  question: string;
  answer: string;
}

interface SearchBarProps {
  faqData: FAQ[];
}

const SearchBar: React.FC<SearchBarProps> = ({ faqData }) => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [filteredItems, setFilteredItems] = useState<FAQ[]>([]);

  // Update query state from localStorage or URL parameter on mount
  useEffect(() => {
    const storedQuery = localStorage.getItem('searchQuery');
    if (storedQuery) {
      setQuery(storedQuery);
    } else {
      const urlQuery = new URLSearchParams(window.location.search).get('query');
      if (urlQuery) {
        setQuery(urlQuery);
      }
    }
  }, []);

  // Update URL query parameter and localStorage when query changes
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (query) {
      params.set('query', query);
    } else {
      params.delete('query');
    }
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
    localStorage.setItem('searchQuery', query);

    // Filter items and store them in localStorage
    const filtered = faqData.filter(faq =>
      faq.question.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
    localStorage.setItem('filteredItems', JSON.stringify(filtered));
  }, [query, faqData]);

  // Retrieve filtered items from localStorage if available
  useEffect(() => {
    const cachedFilteredItems = localStorage.getItem('filteredItems');
    if (cachedFilteredItems) {
      setFilteredItems(JSON.parse(cachedFilteredItems));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleToggle = () => {
    setIsExpanded(prevState => !prevState);
  };

  return (
    <div className="w-full mb-4">
      <div className="relative mb-8">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BsSearch className="text-gray-900" />
        </span>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search FAQs..."
          className="w-full pl-10 px-4 py-2 border rounded-lg shadow-lg backdrop-blur-md bg-white/20 border-gray-300 text-gray-900 placeholder-gray-400"
        />
      </div>
      <div className="flex justify-center mb-4">
        <ToggleButton isExpanded={isExpanded} onToggle={handleToggle} />
      </div>
      <Accordion items={filteredItems} isExpanded={isExpanded} />
    </div>
  );
};

export default SearchBar;