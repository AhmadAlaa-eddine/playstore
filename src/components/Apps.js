import React, { useState } from 'react';

function Apps() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', category: 'Top Selling', genre: 'Education' },
    { id: 2, name: 'Item 2', category: 'Top Selling', genre: 'Music' },
    { id: 3, name: 'Item 3', category: 'Top Selling', genre: 'SocialMedia' },
    { id: 4, name: 'Item 4', category: 'Top Selling', genre: 'Education' },
    { id: 5, name: 'Item 5', category: 'Top Selling', genre: 'Music' },
    { id: 6, name: 'Item 6', category: 'Top Selling', genre: 'SocialMedia' },
    { id: 7, name: 'Item 7', category: 'Top Selling', genre: 'Education' },
    { id: 8, name: 'Item 8', category: 'Top Selling', genre: 'Music' },
    { id: 9, name: 'Item 9', category: 'Top Selling', genre: 'SocialMedia' },
    { id: 10, name: 'Item 10', category: 'Top Selling', genre: 'Education' },
   
    { id: 11, name: 'Item 11', category: 'New Releases', genre: 'Education' },
    { id: 12, name: 'Item 12', category: 'New Releases', genre: 'Music' },
    { id: 13, name: 'Item 13', category: 'New Releases', genre: 'SocialMedia' },
    { id: 14, name: 'Item 14', category: 'New Releases', genre: 'Education' },
    { id: 15, name: 'Item 15', category: 'New Releases', genre: 'Music' },
    { id: 16, name: 'Item 16', category: 'New Releases', genre: 'SocialMedia' },
    { id: 17, name: 'Item 17', category: 'New Releases', genre: 'Education' },
    { id: 18, name: 'Item 18', category: 'New Releases', genre: 'Music' },
    { id: 19, name: 'Item 19', category: 'New Releases', genre: 'SocialMedia' },
    { id: 20, name: 'Item 20', category: 'New Releases', genre: 'Education' },
   
    
    { id: 21, name: 'Item 21', category: 'Recommended', genre: 'Education' },
    { id: 22, name: 'Item 22', category: 'Recommended', genre: 'Music' },
    { id: 23, name: 'Item 23', category: 'Recommended', genre: 'SocialMedia' },
    { id: 24, name: 'Item 24', category: 'Recommended', genre: 'Education' },
    { id: 25, name: 'Item 25', category: 'Recommended', genre: 'Music' },
    { id: 26, name: 'Item 26', category: 'Recommended', genre: 'SocialMedia' },
    { id: 27, name: 'Item 27', category: 'Recommended', genre: 'Education' },
    { id: 28, name: 'Item 28', category: 'Recommended', genre: 'Music' },
    { id: 29, name: 'Item 29', category: 'Recommended', genre: 'SocialMedia' },
    { id: 30, name: 'Item 30', category: 'Recommended', genre: 'Education' },
  ]);
  const [selectedCategory, setSelectedCategory] = useState('Top Selling');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedFilter, setSelectedFilter] = useState('Top Selling');

  const renderItems = () => {
    let filteredItems = items.filter((item) => item.category === selectedCategory);
    
    if (selectedGenre !== 'All') {
      filteredItems = filteredItems.filter((item) => item.genre === selectedGenre);
    }

    switch (selectedFilter) {
      case 'Top Selling':
        filteredItems.sort((a, b) => a.id - b.id);
        break;
      case 'Top Charts':
        filteredItems.sort((a, b) => a.id - b.id).reverse();
        break;
      case 'New Releases':
        filteredItems.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return filteredItems.map((item) => (
      <div key={item.id} onClick={() => console.log(item.name)}>
        <p>{item.name}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>Apps</h2>
      <div>
        <h3>Filter by:</h3>
        <div>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {/* <option value="All">All Apps</option> */}
            <option value="Top Selling">Top Selling</option>
            <option value="New Releases">New Releases</option>
            <option value="Recommended">Recommended</option>
          </select>
        </div>
        <div>
          <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="All">All Genres</option>
            <option value="Education">Education</option>
            <option value="Music">Music</option>
            <option value="SocialMedia">Social Media</option>
          </select>
        </div>
        <div>
          {/* <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
            <option value="Top Selling">
            </option>
<option value="Top Charts">Top Charts</option>
<option value="New Releases">New Releases</option> */}
{/* </select> */}
</div>
</div>
<div>
<h3>{selectedCategory} ({renderItems().length} Items)</h3>
{renderItems()}
</div>
</div>
);
}

export default Apps;