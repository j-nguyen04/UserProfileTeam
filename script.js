// Get the modals
var modal = document.getElementById("myModal");
var modalStep2 = document.getElementById("myModalStep2");
var modalStep3 = document.getElementById("myModalStep3");

// Initialize variables for Step 2
var totalQualificationQuestions = 3; // Update this based on the number of qualification questions
var currentQualificationQuestion = 1;

// Get the <span> element that closes the modals
var span = document.getElementsByClassName("close");

// Function to close the modals
function closeModal() {
  modal.style.display = "none";
  modalStep2.style.display = "none";
  modalStep3.style.display = "none"; // Add this line to close modalStep3
}

// Function to open the modal for step 1
function openModal() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modals
for (var i = 0; i < span.length; i++) {
  span[i].onclick = function() {
    closeModal();
  }
}

// When the user clicks anywhere outside of the modals, close them
window.onclick = function(event) {
  if (event.target == modal || event.target == modalStep2) {
    closeModal();
  }
}

// Personal Details JavaScript code

var currentQuestion = 1;
var totalQuestions = 4;

var currentQualificationQuestion = 1;
var totalQualificationQuestions = 3; // Update this based on the number of qualification questions

var userAnswers = [];
var userQualificationAnswers = [];
var userAvailabilityAnswers = [];        // Update this if the total number of questions changes

// Function to update the prompt text with the current question number
function updatePromptText() {
    var stepTitle = document.getElementById('step-title');
    stepTitle.textContent = "Step 1: Personal Details | Question " + currentQuestion + "/" + totalQuestions;
}

// Function to show the next question
function nextQuestion() {
  storeAnswer(currentQuestion);
  currentQuestion++;

  // Hide the current question
  var currentQuestionId = "question" + (currentQuestion - 1);
  document.getElementById(currentQuestionId).style.display = "none";

  // Show the next question if it exists
  if (currentQuestion <= totalQuestions) {
      var nextQuestionId = "question" + currentQuestion;
      document.getElementById(nextQuestionId).style.display = "block";
      updatePromptText();
      updateOverallProgress(modal);
      
  } else {
      // If there are no more questions, submit the form or navigate to the next step
      submitPersonalDetails();
      updateOverallProgress(modal);
  }
}

function skipQuestion() {
  currentQuestion++;

  // Hide the current question
  var currentQuestionId = "question" + (currentQuestion - 1);
  document.getElementById(currentQuestionId).style.display = "none";
  console.log(currentQuestion);
  console.log(userAnswers);

  if (currentQuestion <= totalQuestions) {
      var nextQuestionId = "question" + currentQuestion;
      document.getElementById(nextQuestionId).style.display = "block";
      updatePromptText();
  } else {
      
      submitPersonalDetails();
  }
}

function storeAnswer() {
  var firstname = document.getElementById('firstname').value;
  var lastname = document.getElementById('lastname').value;
  var age = document.getElementById('age').value;
  var email = document.getElementById('email').value;

  var answer = [firstname, lastname, age, email];
  userAnswers = answer;
}


// Open the modal when the page loads
window.onload = function() {
    openModal();
};

// Get references to the input fields
var firstNameInput = document.getElementById('firstname');
var lastNameInput = document.getElementById('lastname');
var ageInput = document.getElementById('age');
var emailInput = document.getElementById('email');

// Add event listeners to the input fields to listen for changes
firstNameInput.addEventListener('input', updateDisplayedInfo);
lastNameInput.addEventListener('input', updateDisplayedInfo);
ageInput.addEventListener('input', updateDisplayedInfo);
emailInput.addEventListener('input', updateDisplayedInfo);

// Function to update the displayed information on the webpage
function updateDisplayedInfo() {
  var firstName = firstNameInput.value;
  var lastName = lastNameInput.value;
  var age = ageInput.value;
  var email = emailInput.value;

  var userProfileDiv = document.getElementById('userProfile');
  var userOutputDiv = document.getElementById('userOutput');

  // Update the content of the userProfile and userOutput divs
  userProfileDiv.innerHTML = '<p>Name: ' + firstName + '</p>' +
    '<p>Surname: ' + lastName + '</p>' +
    '<p>Age: ' + age + '</p>' +
    '<p>Email: ' + email + '</p>';
}


function submitPersonalDetails() {
  storeAnswer(); // Store the user's information
  closeModal(); // Close the modal or hide the form
  updateOverallProgress(modal);
  openModalStep2();
}


// Function to open the modal for Step 2
function openModalStep2() {
  modalStep2.style.display = "block";
  showProgress(modalStep2)
}


// Function to show the next qualification question
function nextQualificationQuestion() {

  storeQualificationAnswer(currentQualificationQuestion);
  currentQualificationQuestion++;
  
  // Hide the current qualification question
  var currentQuestionId = "qualification-question" + (currentQualificationQuestion - 1);
  document.getElementById(currentQuestionId).style.display = "none";

  // Show the next qualification question if it exists
  if (currentQualificationQuestion <= totalQualificationQuestions) {
      var nextQuestionId = "qualification-question" + currentQualificationQuestion;
      document.getElementById(nextQuestionId).style.display = "block";
      updateQualificationPromptText();
      updateOverallProgress(modalStep2);
 
    
  } else {
      // If there are no more qualification questions, submit the form or navigate to the next step
      submitQualifications();
      updateOverallProgress(modalStep2);
  }
}

function skipQualificationQuestion() {
  currentQualificationQuestion++;

  // Hide the current qualification question
  var currentQuestionId = "qualification-question" + (currentQualificationQuestion - 1);
  document.getElementById(currentQuestionId).style.display = "none";

  // Show the next qualification question if it exists
  if (currentQualificationQuestion <= totalQualificationQuestions) {
      var nextQuestionId = "qualification-question" + currentQualificationQuestion;
      document.getElementById(nextQuestionId).style.display = "block";
      updateQualificationPromptText();
      updateOverallProgress();
  } else {
      // If there are no more qualification questions, submit the form or navigate to the next step
      submitQualifications();
  }
}

// Get references to the input fields in Step 2
var universityInput = document.getElementById('university');
var areaOfStudyInput = document.getElementById('area-of-study');
var highestDegreeInput = document.getElementById('highest-Degree');

// Add event listeners to the input fields to listen for changes
universityInput.addEventListener('input', updateDisplayedQualificationInfo);
areaOfStudyInput.addEventListener('input', updateDisplayedQualificationInfo);
highestDegreeInput.addEventListener('input', updateDisplayedQualificationInfo);

// Function to update the displayed information based on the user's input
function updateDisplayedQualificationInfo() {
  var university = universityInput.value;
  var areaOfStudy = areaOfStudyInput.value;
  var highestDegree = highestDegreeInput.value;

  var qualificationOutputDiv = document.getElementById('qualificationOutput');

  // Update the content of the qualificationOutput div
  qualificationOutputDiv.innerHTML = '<p>Volunteering Marine: ' + university + '</p>' +
    '<p>Initiative: ' + areaOfStudy + '</p>' +
    '<p>Plastic ' + highestDegree + '</p>';
}


function storeQualificationAnswer(currentQualificationQuestion) {
  // Retrieve user's answers from input fields
  var university = document.getElementById('university').value;
  var areaOfStudy = document.getElementById('area-of-study').value;
  var highestDegree = document.getElementById('highest-Degree').value;

  var answer = [university, areaOfStudy, highestDegree];
  
  userQualificationAnswers = answer;

}



// Function to update the prompt text with the current qualification question number
function updateQualificationPromptText() {
  var stepTitle = document.getElementById('step-title-2');
  stepTitle.textContent = "Step 2: Qualifications | Question " + currentQualificationQuestion + "/" + totalQualificationQuestions;
}


function submitQualifications() {
  updateOverallProgress(modalStep2);
  storeQualificationAnswer();
  closeModal();
  openModalStep3();
}

















// Function to open the modal for Step 3
function openModalStep3() {
  modalStep3.style.display = "block";
  showProgress(modalStep3);
}

// Function to store answers for Step 3 availability questions
function storeAvailabilityAnswer() {
  var telephone = document.getElementById('telephone').value;
  var volunteering = document.getElementById('volunteering').value;
  var country = document.getElementById('country').value;

  var answer = [telephone, volunteering, country];
  // Update this array name based on your requirement
  userAvailabilityAnswers = answer;
}

// Function to show the next availability question
function nextAvailabilityQuestion() {
  storeAvailabilityAnswer(currentAvailabilityQuestion);
  currentAvailabilityQuestion++;

  // Hide the current availability question
  var currentQuestionId = "availability-question" + (currentAvailabilityQuestion - 1);
  document.getElementById(currentQuestionId).style.display = "none";

  // Show the next availability question if it exists
  if (currentAvailabilityQuestion <= totalAvailabilityQuestions) {
      var nextQuestionId = "availability-question" + currentAvailabilityQuestion;
      document.getElementById(nextQuestionId).style.display = "block";
      updateAvailabilityPromptText();
      updateOverallProgress(modalStep3);
      
      
  } else {
      
      submitAvailability();
      updateOverallProgress(modalStep3);
  }
}


var telephoneInput = document.getElementById('telephone');
var volunteeringInput = document.getElementById('volunteering');
var countryInput = document.getElementById('country');

// Adding event listeners to the input fields to listen for changes
telephoneInput.addEventListener('input', updateDisplayedAvailabilityInfo);
volunteeringInput.addEventListener('input', updateDisplayedAvailabilityInfo);
countryInput.addEventListener('input', updateDisplayedAvailabilityInfo);


function updateDisplayedAvailabilityInfo() {
  var telephone = telephoneInput.value;
  var volunteering = volunteeringInput.value;
  var country = countryInput.value;

  // Retrieve user's information from Step 1
  var firstName = document.getElementById('firstname').value;
  var lastName = document.getElementById('lastname').value;
  var age = document.getElementById('age').value;
  var email = document.getElementById('email').value;

  // Retrieve user's information from Step 2
  var university = universityInput.value;
  var areaOfStudy = areaOfStudyInput.value;
  var highestDegree = highestDegreeInput.value;

  var availabilityOutputDiv = document.getElementById('availabilityOutput');

  
  var combinedInfo =
    '<p>Name: ' + firstName + '</p>' +
    '<p>Surname: ' + lastName + '</p>' +
    '<p>Age: ' + age + '</p>' +
    '<p>Email: ' + email + '</p>' +
    '<p>Volunteering Marine: ' + university + '</p>' +
    '<p>Initiative: ' + areaOfStudy + '</p>' +
    '<p>Plastic: ' + highestDegree + '</p>' +
    '<p>Telephone: ' + telephone + '</p>' +
    '<p>Species: ' + volunteering + '</p>' +
    '<p>Country: ' + country + '</p>';

  // Update the content of the availabilityOutput div
  availabilityOutputDiv.innerHTML = combinedInfo;
}



function skipAvailabilityQuestion() {
  currentAvailabilityQuestion++;

  
  var currentQuestionId = "availability-question" + (currentAvailabilityQuestion - 1);
  document.getElementById(currentQuestionId).style.display = "none";

  
  if (currentAvailabilityQuestion <= totalAvailabilityQuestions) {
      var nextQuestionId = "availability-question" + currentAvailabilityQuestion;
      document.getElementById(nextQuestionId).style.display = "block";
      updateAvailabilityPromptText();
      updateOverallProgress();
  } else {
      
      submitAvailability();
  }
}


function updateAvailabilityPromptText() {
  var stepTitle = document.getElementById('step-title-3');
  stepTitle.textContent = "Step 3: Availability and Contact | Question " + currentAvailabilityQuestion + "/" + totalAvailabilityQuestions;
}

function submitAvailability() {
  storeAvailabilityAnswer(); 
  closeModal();
  updateOverallProgress(modalStep3);
}

// Initialize variables for Step 3
var modalStep3 = document.getElementById("myModalStep3");
var totalAvailabilityQuestions = 3; 
var currentAvailabilityQuestion = 1;

var totalQuestionsStep1 = 4;
var totalQuestionsStep2 = 3;
var totalQuestionsStep3 = 3;
var totalQuestionsOverall = totalQuestionsStep1 + totalQuestionsStep2 + totalQuestionsStep3;

var overallProgress = 0;

function updateOverallProgress(modal) {
  
  var filterUser = removeEmptyElements(userAnswers);
  var filterQualification = removeEmptyElements(userQualificationAnswers);
  var filterAvaliability = removeEmptyElements(userAvailabilityAnswers);
  

  var completedQuestions = filterUser.length + filterQualification.length + filterAvaliability.length;
  overallProgress = (completedQuestions / totalQuestionsOverall) * 100;
  modal.querySelector('#overall-progress-text').textContent = "Overall Progress: " + Math.round(overallProgress) + "%";
  modal.querySelector('#overall-progress-bar').style.width = overallProgress + "%";
}

function showProgress(modal) {
  modal.querySelector('#overall-progress-text').textContent = "Overall Progress: " + Math.round(overallProgress) + "%";
  modal.querySelector('#overall-progress-bar').style.width = overallProgress + "%";
}

function removeEmptyElements(array) {
  return array.filter(function(element) {
      return element !== "";
  });
}
