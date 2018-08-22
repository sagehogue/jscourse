// NON CLOSURE WAY

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         text = ', can you please explain what a UX designer does?'
//         return function(name) {
//             console.log(name + text);
//         }
//     } else if (job === 'teacher') {
//         var text = ', what subject do you teach?'
//         return function(name) {

//             console.log(name + text);
//         }
//     } else {
//         var text = ', hello, what do you do?'
//         return function(name){
//             console.log(name + text);
//         }
//     }
// }

// var teacherNameless = interviewQuestion('designer');
// teacherNameless('Sean');
// teacherNameless('Anthony')
// teacherNameless('Melissa') 


function interviewQuestion(job) {
    return function(name) {
        var text;
        if (job === 'designer') {
            text = ', can you please explain what a UX designer does?'
            console.log(name + text);
        } else if (job === 'teacher') {
             text = ', what subject do you teach?'
             console.log(name + text);
        } else {
             text = ', hello, what do you do?'
             console.log(name + text);
        }
    }
}