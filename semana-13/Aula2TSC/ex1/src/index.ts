console.log ("oi")
//exercício 1
type tipo = {
    impar: Number;
    quantidade: Number;
    soma: Number;
  };
  
  const arrayDeNumeros: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,25,35,45,55,65]

  function separarNumeros(numeros: number[]): tipo {

    const impar: number[] = numeros.filter((number) => {
            return number % 2 !== 0;       
        })
        console.log (impar)
    const quantidade = numeros.length;  
        console.log (quantidade)

    const soma = arrayDeNumeros.reduce(function(prev, cur) {
            return prev + cur;
          }, 0);     
        console.log (soma)    
 
     return  
    }
    console.log(separarNumeros(arrayDeNumeros)) 


    //exercício 2
    //a)
    type post = {
        autor: string;
        texto: string;
    };
    
    const postsArray: post[] = 
    [
        {
            autor: "Ching",
            texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            autor: "Catarina",
            texto: "Nullam accumsan tristique urna quis dapibus.",
        },
        {
            autor: "kid",
            texto: "Duis in facilisis purus, id consectetur dolor.",
        },
        {
            autor: "Leela",
            texto: "Integer iaculis felis id turpis interdum, porta pellentesque nibh volutpat.",
        },
        {
            autor: "Ching",
            texto: "Phasellus maximus sed mi at fermentum.",
        }
    ];

    //b)

    const autor : string = "Ching"
    function textoPorAutor(posts: post[], autor: string): post[] {  

        const autorSelecionado: post[] = posts.filter((el: post) => {
            return el.autor === autor;
          });
    
          return autorSelecionado
          
        }
        console.log(textoPorAutor(postsArray, autor)) 
    
    

    //exercício 3

type epoca1 = {
    ano: Number;
    epoca: String;
  };

  function descobrirEpoca(
    type: epoca,
    ano: number,
  ): { ano: number} {
  
    let result: { ano: number};
    if (ano <= 100000 && ano >= 4000 && type === "AC") {
      switch (type) {
        case epoca.AntesDeCristo:
          return 
            console.log("Pré-história")
          break;
      }
    }
    if (ano <= 4000 && ano && type === "AC") {
        switch (type) {
          case epoca.AntesDeCristo:
            return 
              console.log("Idade Antiga")
            break;
        }
      }
      if (ano >= 476 && ano <= 1453 && type === "DC") {
        switch (type) {
          case epoca.DepoisDeCristo:
            return 
            console.log("Idade Média")     
            break;
        }
      }
      if (ano >= 1473 && ano <= 1789 && type === "DC") {
        switch (type) {
          case epoca.DepoisDeCristo:
            return 
              console.log("Idade Moderna")
            break;
        }
      }
      if (ano >= 1789 && type === "DC") {
        switch (type) {
          case epoca.DepoisDeCristo:
            return 
              console.log("Idade Contemporânea")
            break;
        }
      }
      return result
  }
  
  enum epoca {
    DepoisDeCristo = "DC",
    AntesDeCristo = "AC",
  }
  
