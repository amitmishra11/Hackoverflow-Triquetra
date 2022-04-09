
// chat bot
var box = document.querySelector(".bot-container");
//console.log(box);
const closeBot = ()=>{
console.log(box.style.display);
box.style.display = "none";
}
    
 
   


var botui = new BotUI('my-botui-app');
// Start Bot
// First Messages
botui.message.bot({
    content: 'Hi there! 👋',
    loading: true,
    delay: 2000,
}).then(function () {
    return botui.message.bot({
        loading: true,
        delay: 1500,
        content: "I'm  LOdo. Hope you are healthy. If not I am here to help. ",
    });
})
// .then(function () {
//     return botui.message.bot({
//         loading: true,
//         delay: 1500,
//         content: "",
//     });
// })

// .then(function () {
//     return botui.message.bot({
//         loading: true,
//         delay: 1500,
//         content: "[BotUI](http://docs.botui.org/)",
//     });
// })
.then(function () {
    return botui.message.bot({
        loading: true,
        delay: 1500,
        content: "Do you know about it ?",
    });
}).then(function () {
  return botui.action.button({
        delay: 1500,
        loading: true,
        addMessage: true,
        action: [{
            text: 'Yes! I do . But i would like to hear more about it',
            value: 'yes'
        }, {
            text: 'Yes! I already do . No need of any info',
            value: 'no'
        },{
            text: 'No. i Dont',
            value: 'yes'
        }]
    })
}).then(function (res) {
  if (res.value == 'yes') {
     return botui.message.bot({
                loading: true,
                delay: 1500,
                content: "The latest variant of covid is OMICRON .   This varaint is claimed to be a huge jump in the evolution of the virus . ",
            }).then(function(){
                return botui.message.bot({
        loading: true,
        delay: 3000,
        content: "This Varaint intitailly spotted in South Africa has already spread to all major countries in just a week.",
            })
       }).then(function(){
                return botui.message.bot({
        loading: true,
        delay: 3000,
        content: "  Some studies have shown that it is more transmissible than the delta varaint .",
            })
       })
       .then(function(){
                return botui.message.bot({
        loading: true,
        delay: 3000,
        content: "A disease modeling scientist has predicted that  it is 500% more  transmissible compared to Wuhan Strain",
            })
       })
       .then(function(){
                return botui.message.bot({
        loading: true,
        delay: 3000,
        content: " There is not much data on how deadly this varaint is since the varaint is relatively new but in SouthAfrica it is found to be more deadly than the delta varaint .",
            })
       })
    }     
  else {
    return botui.message.bot({
                loading: true,
                delay: 1500,
                content: "Alright . Do wear your masks and take proper precautions",
            });
  }
}).then(function () {
  return botui.message.bot({
                loading: true,
                delay: 1500,
                content: "Bye.",
            });
})