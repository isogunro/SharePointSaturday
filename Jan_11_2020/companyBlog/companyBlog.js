new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data: {
        alternateImg: "../image/avatar.png",
        postArray: [],
        blogPostLink: "../sites/SharePointSaturdays/otg/cblog/Lists/Posts/AllPosts.aspx",
        editLink:
            "../sites/SharePointSaturdays/otg/cblog/Lists/Posts/EditPost.aspx?ID="
    },
    created: function () {
        this.getData();
    },
    methods: {
        getData: function () {

            var endPointUrl = _spPageContextInfo.webAbsoluteUrl + "/cblog/_api/web/lists/getbyTitle('Posts')/items?$top=6&$orderBy=PublishedDate desc";

            var that = this;
            axios.get(endPointUrl).then(function (response) {
                that.postArray = response.data.value;
                console.log("In axios!jjj");
                console.log(response.data);
            });
        },
        stripHtml: function (str) {
            console.log(str);

            var newStr = str.replace(/(<([^>]+)>)/gi, "");
            var extractPartialStr = newStr.substring(0, 100);
            console.log(extractPartialStr);
            return extractPartialStr + "...";
        },
        convertDate: function (dte) {
            return moment(dte).format('l')
        }

    }
});