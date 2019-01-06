var path = require('path');
var env = require('node-env-file');
var express = require('express');
var app = express();
var contentLength = require('express-content-length-validator');
var helmet = require('helmet');
var http = require('https');
var favicon = require('serve-favicon');
var fb = require('fb');
var logger = require('morgan');
var partials = require('express-partials');
//var paypal = require('paypal-rest-sdk');
var _ = require('underscore');

env(__dirname + '/.env');
app.locals._ = _;
app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.disable('x-powered-by')

var MAX_CONTENT_LENGTH_ACCEPTED = 9999;
app.use(contentLength.validateMax({max: MAX_CONTENT_LENGTH_ACCEPTED, 
									status: 400, 
									message: "stop it!"}));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public','img','favicon.ico'))); 
app.use(helmet());
app.use(partials());

/*
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM',
  'client_secret': 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'
});
*/
var pageData = {};

pageData.separators = ['about_background.jpg', 'books.jpg', 'sunshine.jpg'];
pageData.APP_ID = process.env.APP_ID;
pageData.FB_PAGE_ID = process.env.FB_PAGE_ID;
var FB = new fb.Facebook();

var hours = 3600 * 1000;
var pageUpdateInterval = 24 * hours;
getFBPageFeed();
setInterval(getFBPageFeed, pageUpdateInterval);

function getFBPageFeed() {
	console.log("Uploading latest feed from Facebook...");
	FB.api('oauth/access_token', {
	    client_id: process.env.APP_ID,
	    client_secret: process.env.APP_SECRET,
	    grant_type: 'client_credentials'
	}, function (res) {
	    if(!res || res.error) {
	        console.log(!res ? 'error occurred' : res.error);
	        return;
	    }

	    var accessToken = res.access_token;
	    //console.log("Access Token: ", accessToken);
	    FB.setAccessToken(accessToken);
	    loadPageFeed();
	});
}
function loadPageFeed() {
	FB.api('/'+process.env.FB_PAGE_ID+'/feed', function(res) {
		if (!res || res.error) {
			console.log(!res ? 'error occurred' : res.error);
			return;
		}
  		console.log("Newsfeed: ",res);
  		pageData.newsFeed = res;
		_.each(pageData.newsFeed.data, function(data, index, list) {
			if (_.has(data, 'id')) {
				FB.api('/' + data.id + '/attachments', function(res) {
					if (!res || res.error) {
						console.log(!res ? 'error occurred' : res.error);
						return;
					}
					if (_.has(res, 'data') && res.data.length > 0) {
							if (_.has(res.data[0], 'media') && _.has(res.data[0].media, 'image')) {
								pageData.newsFeed.data[index].url = res.data[0].media.image.src;
								//console.log("url", pageData.newsFeed.data[index].url);
							}

					} else {
						//console.log("no media found for post. ");
					}

				});
			}
		});
		//console.log(JSON.stringify(pageData.newsFeed));
	});

	FB.api('/'+process.env.FB_PAGE_ID+'/events', function(res) {
		if (!res || res.error) {
			console.log(!res ? 'error occurred' : res.error);
			return;
		}
		
		console.log("EVENTS: ", res);
		if (_.has(res, 'data')) {
			pageData.eventFeed = res;
			_.each(pageData.eventFeed.data, function(data, index, list) {

				if (!_.has(data, 'place')) pageData.eventFeed.data[index].place = {};
				if (!_.has(data.place, 'location')) {
					//console.log("NO location: ", JSON.stringify(data));
					pageData.eventFeed.data[index].place.location = {};
				}
				if (!_.has(data, 'name')) pageData.eventFeed.data[index].name = 'TBD';
				if (!_.has(data, 'start_time')) pageData.eventFeed.data[index].start_time = 'TBD';

				if (!_.has(data.place, 'name')) pageData.eventFeed.data[index].name = 'TBD';
				if (!_.has(data.place.location ,'street')) {
					console.log("no street. ")
					pageData.eventFeed.data[index].place.street = '';
				}
				if (!_.has(data.place.location, 'city')) pageData.eventFeed.data[index].city = '';
				if (!_.has(data.place.location, 'state')) pageData.eventFeed.data[index].state = '';
				if (!_.has(data.place.location, 'zip')) pageData.eventFeed.data[index].zip = '';
				if (_.has(data.place, 'id')) {
					FB.api('/'+data.id+'/picture?redirect=0&type=square', function(res) {
						if (!res || res.error) {
							console.log(!res ? 'error occurred' : res.error);
							return;
						}
						//console.log("event output", res);
						if (_.has(res,'data') && _.has(res.data,'url')) {
							pageData.eventFeed.data[index].url = res.data.url;
							//console.log("event url: ", res.data.url);
						}
					});
				}
			});
		} else {
			console.log("No picture for event");
		}	
	});

}

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

// Route for everything else.
app.get('/', function(req, res){
	//console.log("PageData: ", JSON.stringify(pageData));
	var url = req.protocol + '://' + req.get('host') + req.originalUrl;
	pageData.url = url;
	res.render('index', pageData);
});
