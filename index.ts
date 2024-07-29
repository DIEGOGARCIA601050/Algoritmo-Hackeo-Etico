function Hack(arr: number[] = []) {
    const result:string[] = [];
  
    arr.forEach(element => {
      arr.forEach(item => {
        arr.forEach(think => {
          console.log(element, item, think);
          result.push(`${element}, ${item}, ${think}`); // Agregar a result en lugar de arr
        });
      });
    });
  
    return result; // Aplanar el resultado para devolver un solo array
  }
  const a = [1,2,3]
  Hack(a)