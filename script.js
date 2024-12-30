function arrString(str){
    str = str.split(' ')
    var upFirstLetter 
    var arr=[]
    for(var i=0; i< str.length;i++){
        upFirstLetter=str[i]
        arr.push(upFirstLetter.charAt(0).toUpperCase()+upFirstLetter.slice(1))
    }
    return arr.slice("").join(' ')
}
var str= "the quick brown fox"
var newStr = arrString(str)
document.writeln("<h2>The Oldest String Is : ",str,"</h2>")
document.writeln("<h2>The Newest String Is : ",newStr,"</h2>")