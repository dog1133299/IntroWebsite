 $(document).ready(function() {



$('#homeHeading').fadeIn(2000),
  
 	$('#homeHeading').on({
        mouseenter: function(){
            $('#iam').slideDown(2000);
        },  
 });


// ----------------------------------------------------------------




 var deg = 0;
function animate(){
	deg+=1;
     document.getElementById("Travel_globe").style.transform = "rotate(" + deg + "deg)";

}
setInterval(animate,50);


 });