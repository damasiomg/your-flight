# Teste teórico

### CSS

1\) Na sua opinião, quais os melhores recursos para inclusão de imagens em um site/aplicação? 
E o que você acha interessante não utilizar?
Justifique levando em consideração boas práticas, estilização e formato de arquivos.

```js
/* 
    Se a resolução da imagem estiver baixa, utilizo o Verexfi para remover apenas informações de texto dispensáveis para web (data, hora, etc.). Para imagens em alta resolução o Tiny PNG faz um bom trabalho de compressão. Se for preciso adicionar detalhes na imagem (logo, gradiente, etc.) aí imgIX domina. Não acho muito interessante utilizar media queries para tratar imagem pois elas exigem a criação de várias versões de uma mesma imagem e consequentemente gasta-se mais tempo na manutenção do código.
*/
```




2\) Você conhece algum padrão/metodologia que auxilie a estilização de uma aplicação? 
Explique um pouco através de exemplos;


```js
/* 
    Sim. A W3C padroniza a estilização de páginas web. Inclusive disponibilizam uma ferramenta online para validação de folhas de estilo (http://jigsaw.w3.org/css-validator) que aponta e explica, se houver, problemas de estilo.
*/
```




3\) Se tratando de aplicações responsivas, quais práticas/recursos você costuma utilizar? 
Tem algum exemplo que você não acha interessante?


```js
/* 
    Eu começo pensando na versão mobile para depois expandir para a Desktop. Evito utilizar larguras fixas e aproveito o poder das Media Queries. Acho uma fria utilizar User Agent para identificacão do dispositivo já que versões mobile de navegadores web podem ser identificados de forma errada.
*/
```




4\) Analisando as tags e estilos abaixo, aponte os principais problemas encontrados e reescreva-os;

**Leve em consideração que as tags abaixo estão no meio de uma página html qualquer**


- HTML:
```
	<div class="lista-grande">
		<h1>Lorem Ipsun Dolor</h1>
			
		<span class="list-item-holder">	
			<ul>
				<li class="item">
					<label class="item__input-radio">
						<input type=radio>
						<span>1 item</span>
					</label>
				</li>
				<li class="item">
					<label  class="item__input-radio item__input-radio--cor-diferente">
						<input type=radio>
						<span>2 item</span>
					</label>
				</li>
				<li class="item" id="ultimo-item">
					<label  class="item__input-radio">
						<input class type=radio>
						<span>3 item</span>
					</label>
				</li>
			</ul>
		</span>
	</div>
  
```


- Estilos:
```
    .lista-grande{
        display: block;
    }

    .lista-grande h1{
        font-size: 18px;
    }

    .list-item-holder .item{
        list-style-type: decimal-leading-zero !important;
        padding: 1rem;
        width: 100%;
    }


    .list-item-holder ul li{
        list-style-type: thai;
    }

    .list-item-holder .item .item__input-radio{
        padding: 25px;
            border: solid 1px orange;
        display: flex;
        border: solid 1px #eadabd;
        background: aliceblue;
    }

    .item__input-radio--cor-diferente{
        border: solid 1px #eadabd;
        background: #a0abb5;
    }


    .item__input-radio--cor-diferente {
        @media (min-width: 480px) {
            background: #a0abb5;
        }
    }
    .item__input-radio--cor-diferente {
        @media (max-width: 480px) {
            background: transparent;
        }

    }

```

```js
/* Na linha 64 há um (class) solto. Reescrevendo:

    <li class="item" id="ultimo-item">
        <label  class="item__input-radio">
            <input type=radio>
            <span>3 item</span>
        </label>
    </li>

    Nas linhas 110 a 120 as medias queries deveriam envolver as classes e não o inverso. Reescrevendo:

    @media (min-width: 480px) {
        .item__input-radio--cor-diferente {
            background: #a0abb5;  
        }
    }
    
    @media (max-width: 480px) {
        .item__input-radio--cor-diferente {
            background: transparent;
        }
    } */   
```




5\) Analisando os estilos em `Nesting` do código abaixo, descreva, caso exista, os problemas gerados e as possíveis soluções;

```
    .form-holder {
        width: 100%;
        margin-bottom: 25px;

        .form-item {
            .item-name,
            .item-lastname,
            .item-genre,
            .item-email,
            .item-document-type,
            .item-document-number,
            .item-expiration-date,
            .item-country {
                input, select, textarea {
                    border: none;
                    padding: none;
                    box-shadow: none !important;

                    &.error{
                    background: red;
                    }
                }
                input[disabled], select[disabled], input[readonly], select[readonly] {
                    background-color: #FFF;
                }
            }
            
        }
    }

```

```js
// Resposta
```



---


### Javascript

1\) Cite dois recursos do javascript para o tratamento de processamentos assíncronos e explique as diferenças entre eles.

```js
/* 
    Promises e Async functions. Enquanto uma promise é executada o fluxo de execução não é afetado como acontece numa Async function que interrompe o fluxo de execução até a resolução de uma instrução de await.
*/
```




2\) Quanto tempo vai demorar para o código a seguir imprimir "finished"? Justifique. (Levando em consideração que somePromise() vai retornar uma Promise resolvida)

```
    function doSomething() {
        return new Promise(resolve => {
            setTimeout(resolve, 1000)
        })
    }

    function doSomethingElse() {
        return new Promise(resolve => {
            setTimeout(resolve, 2000)
        })
    }

    somePromise()
        .then(() => {
            doSomething()
            doSomethingElse()
        })
        .then(() => {
            console.log('finished')
        })

```

```js
/* 
    Quase instantaneamente. Como as promises doSomethingElse() e doSomething() não influenciam no fluxo de execução do código, o segundo then() será executado quase instantaneamente independente do resultado da execução das promises do primeiro then().
*/
```




3\) O que o código a seguir imprime? (Levando em consideração que somePromise() vai retornar uma Promise resolvida)

```	
	somePromise()
	    .then(() => {
		throw new Error('uh oh!')
	    }, err => {
		console.log(err.message)
	    })
	    .then(() => {
		console.log('ok now!')
	    })

```

```js
/* 
    Vai imprimir o erro 'uh oh!'. As instruções abaixo da declaração throw não serão executadas e o controle será passado para o primeiro bloco catch que não está sendo explorado na promise.
*/
```



4\) Melhore a função a seguir:

```
	function getTransactions() {
	    return $q((resolve, reject) => {
		$http.get(BASE_URL + '/api/transacoes')
		    .then(response => {
		        if (!response.data.error) {
		            const transactions = response.data

		            var _transactions = []

		            for (var i in transactions) {
		                if (transactions[i].realizada)  {
		                    _transactions.push({
		                        id: transactions[i].id,
		                        value: transactions[i].valor,
		                        type: transactions[i].valor < 0 ? 'transference' : 'deposit',
		                    })
		                }
		            }

		            resolve(_transactions)
		        } else {
		            reject(response.data.error)
		        }
		    })
		    .catch(e => reject(e))
	    })
    }

```


```js
/*

    function getTransactions() {
        return $q((resolve, reject) => {
        $http.get(BASE_URL + '/api/transacoes')
            .then(response => {
                if (!response.data.error) {
                    const transactions = response.data

                    var _transactions = []

                    transactions.forEach(transaction => {
                        if(transaction.realizada){
                            _transactions.push({
                                id: transaction.id,
                                value: transaction.valor,
                                type: transaction.valor < 0 ? 'transference' : 'deposit',
                            })
                        }
                    })

                    resolve(_transactions)
                } else {
                    reject(response.data.error)
                }
            })
            .catch(e => reject(e))
        })
    }

*/
```



5\) Dado um array de objetos, no qual cada objeto representa uma pessoa e possui as propriedades `name` e `age`, por exemplo:
```
    [
        { name: 'Rick Sanchez', age: 70 } ,
        { name: 'Morty Smith', age: 14 }
    ]

```

Crie funções para:
1. Retornar uma o array ordenado alfabeticamente pelos nomes;
2. Fazer o somatório das idades;
3. Verificar se alguma pessoa tem a idade maior que 50 (espera-se um retorno booleano).
4. Verificar se todas pessoas tem a idade menor que 20 (espera-se um retorno booleano).
5. Remover o primeiro nome de todas as pessoas.
6. Dado um determinado nome, retornar o primeiro objeto que corresponda a este nome.

*Obs.: As funções criadas devem atender arrays de qualquer tamanho.*


```js
/* 1:
    sortNames = (items) => {
        var items = items.sort((a, b) => {
            if (a.name > b.name) return 1
            if (a.name < b.name) return -1
            return 0
        })
        return(items)
    }

   2:
    sumAge = (items) => {
        var cont = 0
        items.map(item => {
            cont -=-item.age
        })
        return(cont)
    }

   3:
    moreThen50 = (items) => {
        var i = items.findIndex(item => {
            return item.age > 50
        })
        if(i === -1) return false
        else return true
    }

   4:
    less20 = (items) => {
        var i = items.findIndex(item => {
            return item.age >= 20
        })
        if(i === -1) return true
        else return false
    }

   5:
    withoutName = (items) => {
        items.map((item, i) => {
            items[i] = item.name.split(' ')[1] 
        })
        return items
    }

  6: 
    firstObj = (items, name) => {
        var i = items.findIndex(item => {
            return item.name === name
        })
        if(i !== -1)
            return items[i]
        else
            return {}
    }
*/
```



6\)Dado o seguinte trecho de código:

```
	const getDiscountTicket = (ticket, discount) => {
		const discountTicket = { ...ticket };
  		discountTicket.prices.vip = discountTicket.prices.vip * discount;
		discountTicket.prices.stands = discountTicket.prices.stands * discount;
		return discountTicket;
	}

	const regularTicket = { band: 'Metallica', city: 'Belo Horizonte', prices: { vip: 800, stands: 600 } }
	const discountTicket = getDiscountTicket(regularTicket, 0.5);

	console.log('discountTicket: ', discountTicket.prices);
	console.log('regularTicket: ', regularTicket.prices);

```
Explique o porquê dos preços estarem com o mesmo valor. E o que precisa ser alterado para que os preços sejam diferentes?


```js
/* Os preços estão com mesmo valor pois discountTicket na função getDiscountTicket() está sendo declarado por referência a regularTicket. Isso significa que discountTicket e regularTicket representam o mesmo objeto. Para resolver isso, deve-se na declaração da variável discountTicket indicar a criação de um novo objeto alterando a propriedade price sem modificar as propriedades do parâmetro ticket que chega em getDiscountTicket. Reescrevendo:

        const getDiscountTicket = (ticket, discount) => {
            const discountTicket = { ...ticket, prices: { vip: ticket.prices.vip * discount, stands: ticket.prices.stands * discount } }
            return discountTicket
        }
*/
```
---


### React

1\) Cite tipos de componentes que existem no ReactJs e a melhor forma de utilização de cada um.

```js
/*
    Componentes do tipo Função e Classe. O componente de função recebe como argumento um único parâmetro imutável (props) e deve ser usado em operações que não necessitam manipulação de estado, como por exemplo, a renderização de dados. Para terefas mais avançadas, como consulta de dados, que necessitam do uso de métodos especiais, deve-se usar o componente Classe.
*/
```

2\) O que são e como funcionam os lifecycles no ReactJs? Cite um exemplo de uso de pelo menos um método lifecycle.

```js
/*
    São métodos especiais usados em componentes do tipo Classe para executar algum código quando um componente é criado ou destruído. O método componentDidMount(), por exemplo, é executado depois que a saída do componente é renderizada no DOM. Com ele podemos executar operações como setar no estado o resultado do consumo de um endpoint. Um outro exemplo seria usar o método componentWillUnmount() para derrubar valores setados pelo componentDidMount().
*/
```

3\) Atualmente nosso sistema possui um componente chamado Button que possui a seguinte estrutura:

```
    import React from 'react';
    import styled from 'styled-components';

    const ButtonLayout = styled.button`
    cursor: pointer;
    color: '#FFF';
    background-color: '#707070';
    display: inline-block;
    font-weight: 600;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: .45rem 2.5rem;
    font-size: 1.2rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    :hover{
        background-color: ${props => props.backgroundColor + 'cc'};
    }
    `;

    const Button = (props) => {
    const { label, onClick = () => { }, type = 'button' } = props;
    return (
        <React.Fragment>
        <ButtonLayout type={type} onClick={onClick}>{label}</ButtonLayout>
        </React.Fragment>
    );
    };

    export default Button;
```

Atualmente, os nossos botões podem variar na cor, texto e ação que é executada ao ser clicado. 
No entanto, para uma nova atividade, foi solicitado seja criado um botão que contém também um ícone. 
O que você pode fazer para criar um botão que atenda essa demanda?


```js
/* 
    Eu importaria o ícone do pacote @material-ui/icons como um componente Svg e colocaria os dois componentes (<ButtonLayout> e <IconeImportado>) dentro de uma <div> estilizada no método return().
*/
```


