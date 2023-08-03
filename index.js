const messages = document.getElementById("messages"),
      text = document.getElementById("text"),
      submit = document.getElementById("submit");
// const a =["crush","lover","love","hate","boyfriend","girlfriend","bf","gf","fuck","mota","bitch","suck","sex","sexy","cute"];
// var flag = 0;
// function word_checker(){
//     for (let i=0;i<a.length;i++){
//         if (text.value.toLowerCase().includes(a[i])){
//             flag = 1;
//             break;
//         }
//     }
//     if (flag == 1){
//         alert("sorry due to unusual words your message is blocked and not forwarded to the admin");
//         window.location.reload();
//     }   
//     else{
//         messages.innerHTML = "<h3>your message is forwarded to the admin</h3>";
        
//         Email.send({
//             SecureToken : "a33ab415-b48e-4439-9642-7635e19d47bd",
//             To : 'symbinagpur@gmail.com',
//             From : "fridayro706@gmail.com",
//             Subject : "confession",
//             Body : text.value
//         }).then(
//           message => alert(message)
//         );
//     }
// }

function send(){
        Email.send({
            SecureToken : "a33ab415-b48e-4439-9642-7635e19d47bd",
            To : 'symbinagpur@gmail.com',
            From : "fridayro706@gmail.com",
            Subject : "confession",
            Body : text.value
        }).then(
          message => alert(message+".....")
        );
  setTimeout(function(){
        window.location.reload();
  },6000);
        
}
submit.addEventListener("click",send);
