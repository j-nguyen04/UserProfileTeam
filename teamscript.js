var memberDetails = {
  student1: "<b>Joseph Mputu </b> <br> Role student 1 <br> Designed and implemented splash pages: <br> Splash | Shop",
  student3: "<b> Jonny Nguyen </b> <br> Role student 3 <br> Designed user profiles and team pages: <br> User Profile | Team",
};

function showDetails(member, event) {
  var detailsContainer = document.getElementById("member-details");
  
  // Get details for the member from the object
  var details = memberDetails[member] || "No details available";
  
  // Create a new element to hold the details
  var detailsElement = document.createElement("div");
  detailsElement.className = "member-details";
  detailsElement.innerHTML = details;
  
  // Position the details element below the hovered image
  detailsElement.style.position = "absolute";
  detailsElement.style.top = (event.target.offsetTop + event.target.offsetHeight) + "px";
  detailsElement.style.left = event.target.offsetLeft + "px";
  
  // Add the details element to the container
  detailsContainer.appendChild(detailsElement);
}

function hideDetails() {
  var detailsContainer = document.getElementById("member-details");
  detailsContainer.innerHTML = "";
}

  