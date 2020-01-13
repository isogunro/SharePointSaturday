new Vue({
    el: "#events",
    vuetify: new Vuetify(),
    data: {
        alternateImg: "../image/calendar.png",
        postArray: [],
        remainLink: '../sites/SharePointSaturdays/otg/Lists/Feature%20Events/DispForm.aspx?ID=',
        sourceLink: '&source=../Pages/HomePage.aspx',
        eventLink: "../sites/SharePointSaturdays/otg/Lists/Feature%20Events/calendar.aspx",
        editLink:
            "../Lists/Event%20Demo/DispForm.aspx?ID="
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData: function () {
            var endPointUrl =
                "../sites/SharePointSaturdays/otg/_api/web/lists/getbyTitle('Featured Events')/items?$top=3";

            var that = this;
            axios.get(endPointUrl).then(function (response) {
                that.postArray = response.data.value;
                console.log("In axios!");
                console.log(response.data.value);
            });
        },
        stripHtml: function (str) {
            console.log("--- str");
            console.log(str);
            if (str) {
                /*var tmp = document.createElement("DIV");
                tmp.innerHTML = str.substring(0, 100);
                return tmp.textContent.substring(0, 100) || tmp.innerText.substring(0, 100) || "";*/

                //var extractPartialStr = newStr.substring(0, 100);

                var newStr = str.replace(/(<([^>]+)>)/gi, "");
                var extractPartialStr = newStr.substring(0, 100);
                console.log(extractPartialStr);
                return extractPartialStr + "...";
            }

        },
        convertDate: function (dte) {
            return moment(dte).format('l')
        }
    }
});
