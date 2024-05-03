function fizzbuzz() {
    let number = document.querySelector("#number").value;
    document.querySelector('.result').innerHTML = "";
    document.querySelector('.result').innerHTML += "<br/> Let's count to " + number + "! <br/>";
    for (let i = 1; i <= number; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log('FizzBuzz')
            document.querySelector('.result').innerHTML += '<span id="fizzbuzz">FizzBuzz</span><br/>';
        } else if (i % 3 === 0) {
            console.log('Fizz')
            document.querySelector('.result').innerHTML += '<span id="fizz">Fizz</span> <br/>';
        } else if (i % 5 === 0) {
            console.log('Buzz')
            document.querySelector('.result').innerHTML += '<span id="buzz">Buzz</span> <br/>';
        } else {
            console.log(i);
            document.querySelector('.result').innerHTML += i + '<br/>';
        }
    }
}