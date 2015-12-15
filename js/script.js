var l = document.getElementById("mon_logo");
var context = l.getContext("2d");
context.beginPath();
context.lineWidth="2";
context.fillStyle="#22A7F0";//couleur du 1er carré
context.fillRect(90,59,25,26);//x,y
context.fillStyle= "#2C3E50";//couleur du 2nd carré
context.fillRect(90,118,25,26);
context.arc(100, 100, 90, 0, 2 * Math.PI);
context.strokeStyle= "#22A7F0";//couleur du cercle
context.lineWidth= 20;//épaisseur du cercle
context.stroke();
