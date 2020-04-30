class Github { // creating a class constructor to get the github id and secret
  constructor() {
    this.config = {
      headers: {
        Authorization: '6056e97697c60b80f2a45294ecd3690036f35ad0'
      }
    }
    this.repos_count = 5; // only show 5 repos
    this.repos_sort = 'created: asc'; // this will give us the 5 most recent repos
  }

  async getUser(user) { //this fetches the users profile info
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    //this fetches the users repos - we set the number to 5
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}