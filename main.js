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
  education(data.education);
  skills(data.skills);
})
var child2=document.querySelector("#child2");
// career
function career(car){
  var h2=document.createElement("h1");
  h2.textContent="Career Objective";
  child2.appendChild(h2);
  var heading=document.createElement("hr");
  child2.appendChild(heading);
  var p=document.createElement("p");
  p.textContent=car.info;
  child2.appendChild(p);
}
// education
function education(edu){
  var h2=document.createElement("h1");
  h2.textContent="Educational Qualification";
  child2.appendChild(h2);
  var heading=document.createElement("hr");
  child2.appendChild(heading);
  var table=document.createElement("table");
  child2.appendChild(table);
  var tr="<tr> <td> S.no </td><td> Degree</td><td> institute </td> <td> data </td>";
  table.innerHTML=tr;
  table.border="1";
  var tr1="";
  for(i=0;i<edu.length;i++){
  tr1+="<tr><td>"+(i+1)+"</td><td> "+edu[i].degree+"</td><td>"+edu[i].Institute+"</td><td>"+edu[i].data+"</td></tr>";
}
table.innerHTML=tr+tr1;
}
function skills(skill){
  var h2=document.createElement("h1");
  h2.textContent="Technical skills";
  child2.appendChild(h2);
  var heading=document.createElement("hr");
  child2.appendChild(heading);
  for(i=0;i<skill.length;i++)
  {
    var title=document.createElement("h4");
    title.textContent=skill[i].title;
    child2.appendChild(title);
    var list=document.createElement("ul");
    child2.appendChild(list);
    console.log(skill[i].set.length);
    for (var j = 0; j < skill[i].set.length;j++){
      var listItem=document.createElement("li");
      listItem.textContent=skill[i].set[j];
      list.appendChild(listItem);
    }
  }}
