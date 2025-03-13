function loadData() 
{
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      for (const key in data) 
        {
        if (data.hasOwnProperty(key)) 
          {
          const contentElement = 
          document.getElementById(key).querySelector('.overwrite');
          if (contentElement) 
          {
            contentElement.innerHTML = data[key];
          } 
          else 
          {
            console.error('Content element not found in ' + key);
          }
        }
      }
    })
    .catch(error => 
    {
      console.error('Error loading data:', error);
    });
}

loadData();