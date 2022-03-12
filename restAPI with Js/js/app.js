const profile = new Profile();
const ui = new UI();

const searchProfile = document.getElementById('searchProfile');



searchProfile.addEventListener('keyup', (event) => {
    ui.clear()

    //keyup olayından sonra target  ile belirtilen yerden değer aldık
    let text = event.target.value;
    if (text !== '') {
        profile.getProfile(text).then((res) => {

            // res.profile bir obje döner 
            // eğer değer yoksa
            if (res.profile.length === 0) {
                ui.showAlert(text)
            } else {
                //eğer değer varsa
                ui.showProfile(res.profile[0])

            }
        }).catch(err => {
            ui.showAlert()
        })
    }
    else {

    }
    //console.log(text)
})


