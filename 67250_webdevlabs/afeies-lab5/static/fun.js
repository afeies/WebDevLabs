/*function showList() {
    document.getElementById("funList").style.display = "block";
    document.getElementById("showListButton").style.display = "none";
}*/

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const adviceText = data.slip.advice;
      document.getElementById("adviceText").innerText = adviceText;
    })
    .catch(error => {
      console.error('Error fetching advice:', error);
      document.getElementById("adviceText").innerText = 'Failed to load advice.';
    });
}