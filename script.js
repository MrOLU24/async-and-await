// const url = prompt('Enter your Url: ');
const div = document.getElementById('para')
const btnid = document.getElementById('btn')
async function getData() {
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  const result = await response.json();
  div.innerHTML = result.value
  document.getElementById('para').innerHTML = `${result.setup}- ${result.punchline}`;
  return result;
}
btnid.addEventListener('click', getData)

(async () => {
  const result = await getData();
})();
