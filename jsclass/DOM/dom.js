 //document.getElementById
 
//  document.getElementById("heading").innerHTML = "Welcome";
//  document.getElementById("heading").style.color = "blue";
//  document.getElementById("heading").style.fontSize = "40px";



//  document.getElementsByClassName

// var x = document.getElementsByClassName("item");
// x[1].style.backgroundColor = "Yellow";

// x = document.getElementsByClassName("item")[2].classList.add("myStyle");
// x[0].classList.add("myStyle");
// document.getElementById("heading").classList.add("myStyle");
// document.getElementById("heading").classList.remove("myStyle");
// function toggle() {
//     document.getElementById("heading").classList.toggle("myStyle");
// }

//Adding a node

// function addnode() {
//     var node = document.createElement("li"); //<li></li>
//     var text = document.createTextNode("Bing") //Bing
//     node.appendChild(text); //<li>Bing</li>

//     document.getElementById("listitems").appendChild(node); //<ul> add the list item to the end of ul </ul>
    // document.getElementsByClassName("listitems")[0].appendChild(node);
    // document.querySelector(".listitems").appendChild(node);
// }

//Deleting Nodes

// function deleteNode() {
//     var node = document.getElementById("item");
//     node.remove();
// }

//remove attributes

// function deleteAttr() {
//      document.getElementsByClassName("link")[0].removeAttribute("href");
// }

//replace a node 

// function replace(){
//     var node = document.createElement("p");//<p></p>
//     var text = document.createTextNode("This is a new paragraph");
//     node.appendChild(text);

//      var parent = document.getElementById("paradiv");
//      var child = document.getElementById("p2");
//      parent.replaceChild(node,child);

// }

// function insertbefore(){
//     var node = document.createElement("li");//<li></li>
//     var text = document.createTextNode("Bing");
//     node.appendChild(text);//<li>Bing</li>

//      var parent = document.getElementById("listitems");
//      parent.insertBefore(node, parent.children[3]);

// }



//Add event listener
// document.getElementById("input").addEventListener("mouseover", changeInputColor);
// function changeInputColor(){
//      document.getElementById("input").style.backgroundColor = "lightblue";
// }
// document.getElementById("input").addEventListener("mouseout", changeColor);
// function changeColor() {
//     document.getElementById("input").style.backgroundColor = "grey";

// }



