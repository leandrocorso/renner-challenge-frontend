export const formatCurrency = number => {
    return parseFloat(number)
        .toFixed(2)
        .replace('.',',')
}