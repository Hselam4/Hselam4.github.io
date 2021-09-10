function ucFirst(str) {
    let word = str.slice(0, 1);
    word = word.toUpperCase();
    return word + str.slice(1);
  }
   
  function checkSpam(str) {
    return str.includes("ViAgRA") || str.includes("xxxxx");
  }
   
  function truncate(str, maxlength) {
    const end = "…";
    if (str >= maxlength) {
      return str.slice(0, maxlength - 1) + end;
    }
    return str.slice(0, maxlength + 1);
  }
   
  function extractCurrencyValue(str) {
    let word = str.slice(1);
    let currency = parseInt(word);
   
    return currency;
  }
  console.log(extractCurrencyValue("$120"));
   
  /**
   * 
   * @param {Array} arr of numbers
   * @returns {number} the total of the maximal subarray
   
   */
  function getMaxSubSum(arr) {}
   
  function camelize(str) {
    let word = str.split("-");
    let newWord = "";
    newWord += word[0];
    for (let i = 1; i < word.length; i++) {
      let words = word[i];
      newWord = newWord + word[i].charAt(0).toUpperCase() + words.slice(1);
    }
    return newWord;
  }