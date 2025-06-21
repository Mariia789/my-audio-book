$(document).ready(function(){
	$("#book").turn({
		width: "100%",
		height: "95%",
		autoCenter: true
	});
	$("#book").bind("turning", function(event, page, view){
		const audioPlayer = document.getElementById("audioPlayer");
			audioPlayer.style.display = "block";
			const audioSource = document.getElementById("audioSource");
		switch(page){
		case 2:
			audioSource.src = "1.mp3";
			break;
		case 3:
			audioSource.src = "1.mp3";
			break;
		case 4:
			audioSource.src = "2.mp3";
			break;
		case 5:
			audioSource.src = "2.mp3";
			break;
		case 6:
			audioSource.src = "3.mp3";
			break;
		case 7:
			audioSource.src = "3.mp3";
			break;
		case 8:
			audioSource.src = "4.mp3";
			break;
		case 9:
			audioSource.src = "4.mp3";
			break;
		case 10:
			audioSource.src = "5.mp3";
			break;
		case 11:
			audioSource.src = "5.mp3";
			break;
		default:
		audioSource.src = "";
		audioPlayer.style.display = "none";
		break;					
		}
		if (audioSource.src){
			audioPlayer.load();
			audioPlayer.play();
		}else{
			audioPlayer.pause();
		}
	});
		});