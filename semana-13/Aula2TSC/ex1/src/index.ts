console.log ("oi")

type tipo = {
    impar: Number;
    quantidade: Number;
    soma: Number;
  };
  
  const arrayDeNumeros: number[] = [1,2,3,4,5,6,7,8,9,10]

  function separarNumeros(numeros: number[]): tipo {

        const impar: number[] = numeros.filter((el: number) => {
            return el%2 !== 0;
        })
       
        console.log(separarNumeros(arrayDeNumeros))
     return  
     
    }
