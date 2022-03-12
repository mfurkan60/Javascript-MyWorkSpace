

class UI {
    constructor() {
        // profil gösterge alanı
        this.profileContent = document.getElementById('profileContent');
        // not Found Gösterge Alanı
        this.alert = document.getElementById('alert');


    }

    showProfile(profile) {
        this.profileContent.innerHTML = `
        
 
        <div class="card">
        <div class="card-body">
            <div class="col-md-6">
                <img src="avatar.png" class="img-fluid" alt="">
            </div>
            <div class="col-md-6">
                <h4>Contact </h4>


                <ul class="list-group">
                    <li class="list-group-item">
                        Name : ${profile.name} </li>

                    <li class="list-group-item">
                        Username : ${profile.username} </li>
                    <li class="list-group-item">
                        E-mail : ${profile.email} </li>
                    <li class="list-group-item">
                        Adress : ${profile.address.street} ${profile.address.city}

                    </li>
                </ul>
            </div>
        </div>
    </div>

        `
    }

    showAlert(alert) {
        this.alert.innerHTML = `

        <div  class="bg-danger p-2"> ${alert} is not found </div>
                      
       
        `
    }

    clear() {
        this.profileContent.innerHTML = "";
        this.alert.innerHTML = "";
    }
}