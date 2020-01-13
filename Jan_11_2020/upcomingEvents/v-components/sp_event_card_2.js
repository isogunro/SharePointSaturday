/*
Took CSS from this site (https://florianziegler.com/journal/css-tutorial-style-table-rows-to-look-like-cards/) to style the table cells(td) 
*/
Vue.component('sp-event-card2', {
    data: function data() {
        return {
            num: 3,
            eventAry: [],
            remainLink: '../sites/SharePointSaturdays/otg/Lists/Upcoming%20Events/DispForm.aspx?ID=',
            sourceLink: '&source=../sites/SharePointSaturdays/otg/SitePages/newHP.aspx'
        };
    },
    created: function created() {
        this.getEvents();
    },
    methods: {
        getEvents: function getEvents() {
            var endPointUrl = "../_api/web/lists/getbyTitle('Upcoming Events')/items?$top=2&$filter=mainCard eq 'Yes'";
            var that = this;
            axios.get(endPointUrl).then(function (response) {
                that.eventAry = response.data.value;
                console.log("In sp-event-card!");
                console.log(response.data.value);
            });
        },
        stripHtml: function stripHtml(str) {
            console.log(str);
            var newStr = str.replace(/(<([^>]+)>)/gi, "");
            var extractPartialStr = newStr.substring(0, 100);
            console.log(extractPartialStr);
            return extractPartialStr + "...";
        },
        convertDate: function (dte) {
            return moment(dte).format('l')
        },
        getMonth: function (dte) {
            let month = 1 + moment(dte, 'YYYY/MM/DD').month();
            let year = moment(dte, 'YYYY/MM/DD').year();
            let monthName = moment(month, 'MM').format('MMM');
            return monthName;
        },
        getDayNum: function (dte) {
            let day = moment(dte, 'YYYY/MM/DD').date();
            return day;
        }
    },
    template: '\n<div>\n\t<table style="border-style:solid" border="0" cellpadding="0" cellspacing="0">\n<tr>\n     <td id="tdEvent" v-for="event in eventAry" width="31%">\n\t{{getMonth(event.EventDate)}}\n{{getDayNum(event.EventDate)}}<hr>\n\t<h3><b>Event Title</b></h3>\n\t<a v-bind:href="remainLink + event.Id + sourceLink">{{ event.Title }}</a>\n\t<p>| {{convertDate(event.EventDate)}}</p>\n\t<p>{{event.Location}}</p>\n     </td>\n</tr>\n  </table>\n</div>\n'
});




/*
Does not work in IE 11 because of the tick on line 92 so you must put it through babel

Vue.component('sp-event-card',{
  data: function(){
    return {
      num: 3,
      eventAry: []
    }
  },
  created: function(){
  	this.getEvents();
  },
  methods: {
  	getEvents: function(){
  					var endPointUrl =
				"../_api/web/lists/getbyTitle('Event Demo')/items?$top=3&$filter=mainCard eq 'Yes'";

			var that = this;
			axios.get(endPointUrl).then(function(response) {
				that.eventAry= response.data.value;
				console.log("In axios!");
				console.log(response.data.value);
			});

  	},
  	stripHtml: function(str) {
			console.log(str);

			var newStr = str.replace(/(<([^>]+)>)/gi, "");
			var extractPartialStr = newStr.substring(0, 100);
			console.log(extractPartialStr);
			return extractPartialStr + "...";
		},
    convertDate: function(dte){
      return moment(dte).format('l')
    }


  },
  template: `
<div>
  <div class="card" v-for="event in eventAry">
    <div class="">
    {{event.EventDate}}
    <hr>
      <h3><b>Event Title</b></h3>
      {{ event.Title }}
      <p>{{event.EventDate}}</p>
      <p>{{event.Location}}</p>
    </div>
  </div>
</div>
`
});*/