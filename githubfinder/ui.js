class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) { //create method called showprofile to display value of user using innerHTML
    this.profile.innerHTML = `<div class="card card-body mb-3">
    <div class="row">
<div class="col-md-3">
<img class="img-fluid mb-2" src="${user.avatar_url}" alt=""/>
<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
</div>
<div class="col-md-9">
<span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
<span class="badge badge-secpndary">Public Gists: ${user.public_gists}</span>
<span class="badge badge-success">Followers: ${user.public_followers}</span>
<span class="badge badge-info">Following: ${user.public_following}</span>
<br/><br/>
<ul class="list-group">
<li class="list-group-item">Company: ${user.company}</li>
<li class="list-group-item">Website/Blog: ${user.blog}</li>
<li class="list-group-item">Location: ${user.location}</li>
<li class="list-group-item">Member Since: ${user.created_at}</li>
</ul></div>
    </div>
    </div>
    <h3 class="page-heading mb-3">Latest 5 Repos</h3>
    <div id="repos"></div>`;
  }

  // show users repos
  showRepos(repos) { //using forEach loop to loop through repos
    let output = '';

    repos.forEach(function (repo) {
      output += `
<div class="card card-body mb-2">
<div class="row">
<div class="col-md-6">
<a href="${repo.html_url}" target="_blank">${repo.name}</a>
</div>
<div class="col-md-6">
<span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
<span class="badge badge-secpndary">Watchers: ${repo.watchers_count}</span>
<span class="badge badge-success">Forks: ${repo.forks_count}</span>
</div>
</div>
</div>`
    });

    // Output repos - this spits out the output html directly above
    document.getElementById('repos').innerHTML = output;
  }

  //show alert message - see method in app.js
  showAlert(message, className) {
    //clear any remaining alerts
    this.clearAlert();

    //create div
    const div = document.createElement('div');
    div.className = className;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parent container
    const container = document.querySelector('.searchContainer');
    //get search box
    const search = document.querySelector('.search');
    //insert alert
    container.insertBefore(div, search);

    //Error alert Timeout after 2 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  // Clear alert message method
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) { //if an error alert is displayed then remove
      currentAlert.remove();
    }
  }

  clearProfile() { //this method will clear a profile from the content area if input is empty
    this.profile.innerHTML = '';
  }


}