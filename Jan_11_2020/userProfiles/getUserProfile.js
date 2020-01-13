new Vue({
    el: "#uProfApp",
    vuetify: new Vuetify(),
    data: function () {
        return {
            style: true,
            user: "",
            PreferredName: "",
            AccountName: "",
            workEmail: "",
            Department: "",
            Office: "",
            profilePage: '../_layouts/EditProfile.aspx?accountname=', //points to 2010 profile. will point to 2016 profile when it is finally working
            newProfPage: '',
            jobTitle: '',
            PastProjects: '',
            PictureURL: '../image/avatar.png',
        };
    },
    created: function () {
        this.getUserProfile();
    },
    methods: {
        getUserProfile: function () {
            var web = _spPageContextInfo.webAbsoluteUrl;
            var endPointUrl = web + "/_api/SP.UserProfiles.PeopleManager/GetMyProperties";
            console.log(web);
            var that = this;
            axios.get(endPointUrl).then(function (response) {
                var properties = response.data.UserProfileProperties;
                for (var i = 0; i < properties.length; i++) {

                    if (properties[i].Key == "AccountName") {
                        that.AccountName = properties[i].Value;
                        console.log(that.AccountName);
                    }

                    if (properties[i].Key == "PreferredName") {
                        that.PreferredName = properties[i].Value;
                        console.log(that.PreferredName);
                    }

                    if (properties[i].Key == "WorkEmail") {
                        that.WorkEmail = properties[i].Value;
                        console.log(that.workEmail);
                    }

                    if (properties[i].Key == "Department") {
                        that.Department = properties[i].Value;
                        console.log(that.Department);
                    }

                    if (properties[i].Key == "Office") {
                        that.Office = properties[i].Value;
                        console.log(that.Office);
                    }

                    if (properties[i].Key == "SPS-JobTitle") {
                        that.jobTitle = properties[i].Value;
                        console.log(that.jobTitle);
                    }

                    if (properties[i].Key == "SPS-PastProjects") {
                        that.PastProjects = properties[i].Value;
                        console.log(that.PastProjects);
                    }

                    if (properties[i].Key == "PictureURL") {
                        if (properties[i].Value) {
                            that.PictureURL = properties[i].Value;
                        }
                        console.log(that.PictureURL);
                    }

                    that.newProfPage = that.profilePage + that.AccountName;
                }
            });
        }
    }
});
//https://www.enjoysharepoint.com/get-login-user-profile-properties-using-rest-api-in-sharepoint/