"use strict";

function generateQuestionsElement() {
    
  return `
  <header> 
        <h1>Kiara & Logan's Quiz</h1>
</header>
    <form>
        <fieldset>
        //
            <legend>What sport involves water?</legend>

            //return an object from an array of objects (questions 1-5)

            <input type="radio" id="basketball" name="sport">
            <label for="basketball">Basketball</label><br/>

            <input type="radio" id="soccer" name="sport">
            <label for="soccer">Soccer</label><br/>

            <input type="radio" id="water-polo" name="sport">
            <label for="water-polo">Water Polo</label><br/>

            <input type="radio" id="lacrosse" name="sport">
            <label for="lacrosse">Lacrosse</label><br/>
        </fieldset>
    </form>
    <form>
        <button class="next"
        type="button">Next</button>
    </form>
</body>
</html>`;}


document.body.innerHTML = generateQuestionsElement();

$('fieldset').on('click', event => {
    console.log('a button was clicked');
});