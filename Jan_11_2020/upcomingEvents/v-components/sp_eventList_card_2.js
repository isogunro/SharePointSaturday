Vue.component('sp-eventlist-card2', {
    data: function data() {
        return {
            link: '../Lists/Event%20Demo/calendar.aspx',
            remainLink: '../Lists/Event%20Demo/DispForm.aspx?ID=',
            sourceLink: '&source=../Pages/HomePage.aspx',
            eventList: []
        };
    },
    created: function created() {
        this.getAllPosts();
    },
    methods: {
        getAllPosts: function getAllPosts() {
            var endPointUrl = "../_api/web/lists/getbyTitle('Upcoming Events')/items?$top=4&$filter=mainCard ne 'Yes'";
            console.log("Card 2")
            console.log(endPointUrl);
            var that = this;
            axios.get(endPointUrl).then(function (response) {
                that.eventList = response.data.value;
                console.log("In sp_eventlist_card!");
                console.log(response.data.value);
            });
        },
        convertDate: function (dte) {
            return moment(dte).format('l')
        },
        stripHtml: function (str) {
            //console.log(str);

            var newStr = str.replace(/(<([^>]+)>)/gi, "");
            var extractPartialStr = newStr.substring(0, 100);
            console.log(extractPartialStr);
            return extractPartialStr + "...";
        },

    },
    //template: "\n<div>\n<table style='width:100%'>\n <tr>\n<td style='width:100%'>\n <div v-for=\"event in eventList\">\n    <div>\n      \n      <p><a v-bind:href='remainLink + event.Id + sourceLink'>{{event.Title}}</a>&nbsp;&nbsp;&nbsp;{{convertDate(event.EventDate)}}</p> \n      <p>Text</p>\n    </div>\n  </div>\n  <a :href='link'>View all Events</a> >>\n   </td>\n </tr>\n</table>\n  </div>\n"
    template: "\n<div>\n<table cellpadding=0 cellspacing=0 id=\"tblList\">\n <tr v-for=\"event in eventList\">\n   <td>\n     <a v-bind:href='remainLink + event.Id + sourceLink'><b>{{event.Title}}</b></a>&nbsp;&nbsp;&nbsp;{{convertDate(event.EventDate)}}<br>\n      {{event.eventDescription}} \n\n   </td>\n </tr>\n <tr>\n\t<td>  <a :href='link'>View all Events</a> >></td>\n </tr>\n</table>\n  </div>\n"

});
//DOES NOT WORK IN IE11 because of the back-ticks which only runs in browsers that support es6.  Had to run it through babel to get the above code
/*Vue.component('sp-eventlist-card',{
  data: function(){
    return {
      link:'',
      eventList:[]
    }
  },
  created: function() {
  	this.getAllPosts();
  },
	methods: {
		getAllPosts: function() {
			var endPointUrl =
				"../_api/web/lists/getbyTitle('Event Demo')/items";

			var that = this;
			axios.get(endPointUrl).then(function(response) {
				that.eventList= response.data.value;
				console.log("In axios!");
				console.log(response.data.value);
			});
		},
    convertDate: function(dte){
      return moment(dte).format('l')
    }

	},

  template: `<div>
<div class="card2">
<h4><b>Event Title</b></h4>
  <div v-for="event in eventList">
    <div class="container">

      <p>{{event.Title}}&nbsp;&nbsp;&nbsp;{{event.EventDate}}</p>
      <p>Text</p>
    </div>
  </div>
  <a :href='link'>View all Events</a> >>
  </div>
  </div>`
});*/