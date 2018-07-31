// function loadJSON(file,callback){
//   var xhr=new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange=function(){
//     if(xhr.readystate==4&&xhr.status=="200"){
//       callback(xhr.responseText)
//     }
//   }
//   xhr.send();
// }
function loadJSON(file) {
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }
      else{
        reject(new Error('error'));
      }
    })
  })
}

var fetchedData=loadJSON("data.json");
fetchedData.then(data=>{
  console.log(data);
  career(data.career);
})
var child2=document.querySelector("#child2");
function career(car){
  var h2=document.createElement("h3")
  h2.textContent="career Objective"
  child2.appendChild(h2);
  var heading=document.createElement("hr")
  heading.textContent="";
  child2.appendChild(heading);
  var p=document.createElement("p");
  p.textContent=car.info;
  child2.appendChild(p);
}
