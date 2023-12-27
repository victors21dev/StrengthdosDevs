### Em desenvolvimento : )
- Pode ser encontrado bugs, por favor avisar em minhas redes sociais localizada no meu perfil.
<hr>

## Jogo da Forca

Jogo criado para projeto integrador da graduação (ADS) pelo Centro de Estudos Superiores de Maceió (CESMAC).

## Tecnologias Utilizadas
- HTML;
- CSS;
- JavaScript;
- NodeJS;
- MongoDB Atlas;
- Python;
- Vercel.

## Explicando um pouco de cada interface
Tela inicial
- Todo o fluxo é gerenciado por rotas.

```javascript
// Rotas
app.get('/', linkRouter)
app.get('/dificuldade', linkRouter)
app.get('/game', linkRouter)
app.get('/login', linkRouter)
```

Escolha de nível
- Os níveis podem ser alterados, colocando mais ou menos níveis, registrados no banco de dados no mongodb atlas.

```javascript
// API
router.get('/dificuldades_game', async (req, res) => {
    // Banco de dados
    let collection = await connectDataBase("Niveis")
    res.send(collection)
})
```
Escolha a palavra
- Nessa parte é dado uma dica, clicando na letra a mesma é jogada. Ao errar, vai se completando a forca, tendo 8 tentativas.
- A palavra é sorteada pelo python, onde ele responde ao nodejs em JSON
```python
# responde a requisição
await print(json.dumps(
    {
        "palavra": result,
        "tentativas": 8,
        "qtd_letras": quantidade_letras,
        "letras_separadas": letras_sep
    }
)
```
## Contato

Para contato, acesse minhas redes socias na minha página inicial no github : )
