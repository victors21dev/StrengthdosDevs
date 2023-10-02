import sys
import asyncio
# bibliotecas
# array
import numpy as np
import json
# random
from random import randint

# Separar e contar letras da palavra sorteada
async def formatacao(number, string):
    # Variável armazenar array
    caract = [] 

    # Contador de letras
    cont = 0
    # loop de acordo com letras
    for caractere in string:
        # Recebe ele + ele mesmo
        caract += caractere.upper()

        # Contador aumenda de acordo com mais letras
        cont = cont + 1

    # Se 0 retorna apenas o contador de letras
    if number == 0:
        return cont
    # Senão retorna array
    elif number == 1:
        return caract


# criar vetor
async def criar_array():
    palavras_banco = sys.argv[1].split(",")
    palavras = np.array(palavras_banco)

    return palavras


# sortear palavra
async def palavra(pl):
    number = randint(0, (pl.size - 1))
    return pl[number]


async def processar():
    # chamar a lista com palavras
    palavras = asyncio.create_task(criar_array())
    # armazenar palavra sorteada
    palavra_sort = ""
    # se palavra for igual a vazio, sortear novamente
    cont = 0
    while cont == 0:
        if palavra_sort == '':
            palavra_sort = asyncio.create_task(palavra(await palavras))
        else:
            cont = 1


    qtd_caracteres = asyncio.create_task(formatacao(0, await palavra_sort))
    palavra_sorteada_array = asyncio.create_task(formatacao(1, await palavra_sort))
    
    if(palavra_sort == ''):
        palavra_sort = asyncio.create_task(formatacao(1, await palavra_sort))
    
    quantidade_letras = await qtd_caracteres
    letras_sep = await palavra_sorteada_array
    # palavra já sorteada
    result = await palavra_sort


    # responde a requisição
    await print(json.dumps(
        {
            "palavra": result,
            "tentativas": 8,
            "qtd_letras": quantidade_letras,
            "letras_separadas": letras_sep
        }
    )
)

asyncio.run(processar())
