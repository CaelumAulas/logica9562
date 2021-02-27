function formataMoeda(valor, localidade = 'pt-BR', moeda = 'BRL')
{
    return parseFloat(valor).toLocaleString(localidade, {
        style: "currency",
        currency: moeda
    })
}

