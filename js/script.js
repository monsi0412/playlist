
/* global $ */





var newPlaylist = [];



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

	if(songUrl===""){
		$(".songsList").append( `<div class='row'>
								<div class='col-xs-12'>   
					             <div class='row' style='margin:0 auto;'>   
					               <div class='col-xs-1 inBetween'></div>   
					               <div class='col-xs-5 songDes'>   
					                 <h3 class='songTitle'>   ${newPlaylist[newPlaylist.length - 1].title }  </h3>   
					                 <h5 class='artist'>    ${newPlaylist[newPlaylist.length - 1].artist}    </h5>   
					                 <h7 class='length'>    ${newPlaylist[newPlaylist.length - 1].songLength}    </h7>
					                 <p>
                						<button type='button' class='btn btn-default remove'> Delete Song </button>
                					</p>
					               </div>   
					               <div class='col-xs-1 inBetween'></div>   
					               <div class='col-xs-5'>   
					                 <p class='image'>   
					                	 <img class='img-thumbnail' src='    ${newPlaylist[newPlaylist.length - 1].image}    '>
					                 </p>   
					               </div>   
					             </div>   
					           </div>   
					         </div> `);
	}
	else{
		$(".songsList").append( `<div class='row'>
								<div class='col-xs-12'>   
					             <div class='row' style='margin:0 auto;'>   
					               <div class='col-xs-1 inBetween'></div>   
					               <div class='col-xs-5 songDes'>   
					                 <h3 class='songTitle'>   ${newPlaylist[newPlaylist.length - 1].title }  </h3>   
					                 <h5 class='artist'>    ${newPlaylist[newPlaylist.length - 1].artist}    </h5>   
					                 <h7 class='length'>    ${newPlaylist[newPlaylist.length - 1].songLength}    </h7> 
					                 <p>
                						<button type='button' class='btn btn-default' id='remove'> Delete Song </button>
                					</p>
					               </div>   
					               <div class='col-xs-1 inBetween'></div>   
					               <div class='col-xs-5'>   
					                 <p class='image'>   
					                   <a target='_blank' href='    ${newPlaylist[newPlaylist.length - 1].url}   
					                	 '><img class='img-thumbnail' src='    ${newPlaylist[newPlaylist.length - 1].image}    '></a>  
					                 </p>   
					               </div>
					             </div>   
					           </div>   
					         </div> `);
	}

}

function removeSong(){
	$(".remove").click(function(e) {
		console.log("this clciked");
		console.log(e);
		var songRow= e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement;
		
	});
}

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

	// $("#delete").click(function(e) {
	// 	console.log("this clciked");
	// 	console.log(e);
	// 	var songRow= e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement;
		
	// });

	removeSong();

});
