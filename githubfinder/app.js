//Init Github constructor from github.js
const github = new Github;

//Init UI
const ui = new UI;
// search input

const searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup', (e) => {
  //get input text
  const userText = e.target.value;

  if (userText !== '') { //if input text equals nothing get userText value
    // Make http call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') { //if the user name is not found
          //show alert method
          ui.showAlert('User not found', 'alert alert-danger');

        } else {
          //show profile
          ui.showProfile(data.profile);
          //show repo
          ui.showRepos(data.repos);
        }
      })
  } else {
    //clear profile method
    ui.clearProfile();

  }

});