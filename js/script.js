// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	title: "24K Magic",
	artist: "Bruno Mars",
	mp3Url: "https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
	imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
};

var myPlayList = [{
		title: "24K Magic",
		artist: "Bruno Mars",
		mp3Url: "https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		title: "Sir Duke",
		artist: "Stevie Wonder",
		mp3Url: "https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		title: "Sorry",
		artist: "Justin Bieber",
		mp3Url: "https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		imageUrl: "http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

];

var newPlaylist = [];


// DOCUMENT READY FUNCTION
$(document).ready(function() {
	$("#coverArt").keyup(function(event) {
		if (event.keyCode === 13) {
			$("#addSong").click();
		}
	});
	$("#songUrl").keyup(function(event) {
		if (event.keyCode === 13) {
			$("#addSong").click();
		}
	});

	$("#addSong").click(function() {
		addSong();
	});
	// $("#displayPlaylist").click(function() {
	//   displayNewPlaylist(); 
	// });

	$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

});

function displayList() {
	$("#addSong").click(function() {
		for (var i = 0; i < myPlayList.length; i++) {
			$(".songsList").append("<div class = 'row'> <div class='col-xs-12'>" +
				"<p class='songTitle'>" + myPlayList[i].title + "</p>" +
				"<p class='artist'>" + myPlayList[i].artist + "</p>" +
				"<p class='image'><img class='img-thumbnail' src='" + myPlayList[i].imageUrl + "'></p>" +
				"<p class='url'><a target='_blank' href='" + myPlayList[i].mp3Url + "'> Listen Now </a></p>" +
				"</div></div>"
			);
		}
	});
}


function clearList() {



}

function addSong() {
	var songTitle = $("#title").val();
	var songArtist = $("#artist").val();
	var coverArt = $("#coverArt").val();
	var songLength = $("#songLength").val();
	var songUrl = $("#songUrl").val();
	if(coverArt==="" && songTitle === "" && songArtist === ""){
		alert("Invalid Input");
		return null;
	}
	if(coverArt===""){
		coverArt = "top5 artwork/unknown.png";
	}
	if(songTitle===""){
		songTitle = "Unknown Track";
	}
	if(songArtist===""){
		songArtist = "Unknown Artist";
	}
	
	newPlaylist.push({
		title: songTitle,
		artist: songArtist,
		image: coverArt,
		songLength: songLength,
		url: songUrl,
	}, );
	$("#title").val("");
	$("#artist").val("");
	$("#coverArt").val("");
	$("#songLength").val("");
	$("#songUrl").val("");
	$(".songsList").append(  "<div class='col-xs-12'>" +
					            "<div class='row'>" +
					              "<div class='col-xs-1 inBetween'></div>" +
					              "<div class='col-xs-5 songDes'>" +
					                "<h3 class='songTitle'>"+ newPlaylist[newPlaylist.length - 1].title +"</h3>" +
					                "<h5 class='artist'>" + newPlaylist[newPlaylist.length - 1].artist + "</h5>" +
					                "<h7 class='length'>" + newPlaylist[newPlaylist.length - 1].songLength + "</h7>"+
					              "</div>" +
					              "<div class='col-xs-1 inBetween'></div>" +
					              "<div class='col-xs-5'>" +
					                "<p class='image'>" +
					                  "<a target='_blank' href='" + newPlaylist[newPlaylist.length - 1].url + 
					                	"' data-toggle='tooltip' ><img class='img-thumbnail' src='" + newPlaylist[newPlaylist.length - 1].image + "'></a>"+
					                "</p>" +
					              "</div>" +
					            "</div>" +
					          "</div>" +
					        "</div>");

}

