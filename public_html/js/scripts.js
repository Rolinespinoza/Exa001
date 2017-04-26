/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var btnMenu = document.getElementById("btnmenu");
var nav = document.getElementById("nav");

btnMenu.addEventListener("click", function(){
	nav.classList.toggle("mostrar");})