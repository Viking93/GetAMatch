f = setInterval(
    function(){
        var rightSwipe = document.getElementsByClassName("recsGamepad__button--like")[0];
        var leftSwipe = document.getElementsByClassName("recsGamepad__button--dislike")[0];
        var profile = document.getElementsByClassName("profileCard__bio")[0];
		var profileOverviewElement = document.getElementsByClassName("recCard__info");
        var len = 30; //least number of characters
		
		if(profileOverviewElement != null && profileOverviewElement[1] != null && profileOverviewElement[1].innerText.includes("Instagram Photos")){
			rightSwipe.click();
		}
        else if(profile != null){
                var bio = profile.innerText;
                var bioLines = bio.split("\n");
                var bioLength = bio.length;
                if(bioLines.length > 1 || bioLength >= len){
                    rightSwipe.click();
                }
                else{
                    leftSwipe.click();
                }
        }
        else{
            leftSwipe.click();
        }
},2000)
