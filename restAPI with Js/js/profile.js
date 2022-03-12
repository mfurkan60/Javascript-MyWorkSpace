class Profile {

    constructor() {
        //Genelde apiler bizlerden id ve scret deger beklerler
        this.clientid = "",
            this.clientSecret = ""
    }


    async getProfile(userName) {
        // fetch ile input değerine göre api ye sorgu atıyor.
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${userName}`);
        const profile = await profileResponse.json();

        return {
            profile
        }



    }
}
