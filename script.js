async function fetchVisitorCount() {
  const apiEndpoint = 'https://vvvu7anr38.execute-api.ap-northeast-2.amazonaws.com/prod/counter';
  
  try {
    // Fetch visitor count from API
    const response = await fetch(apiEndpoint);
    
    if (!response.ok) {
      throw new Error('Failed to fetch counter');
    }

    const data = await response.json();
    console.log('Visitor count response:', data); // Debug log

    // Update the visitor count element
    document.getElementById('visitor-counter').textContent = data.count;
  } catch (error) {
    console.error('Error fetching visitor count:', error);
    document.getElementById('visitor-counter').textContent = 'Error loading counter.';
  }
}

// Automatically fetch the count when the page loads
fetchVisitorCount();
