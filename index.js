function Hack(arr = []) {
  arr.forEach(element => {
    for (let i = 0; i < arr.length; i++) {
        const elemento = arr[i];
        for (let j = 0; j < arr.length; j++) {
            const elementito = arr[j];
            console.log(element, elemento, elementito);
        }
    }
});
}
