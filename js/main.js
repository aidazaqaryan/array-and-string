let b = 1
function countFactiorial (number){
    let a = number
    b*=a
    number --
    if(number===0){
        return 
    } 
    a*=number
    countFactiorial(number)
    return b
}
console.log(countFactiorial(5))//5,4,3,2,1

let sent=prompt('Please input sentence.')
function printSentence (sent){
    let string=sent.split(' ')
    word=[]
    for(i=0;i<string.length;i++){
        word.push(string[i].charAt(0).toUpperCase() + string[i].slice(1))
    }
    sentence = word.join(' ')
    alert(sentence)
}
printSentence(sent)