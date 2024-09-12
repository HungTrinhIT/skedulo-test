export const formatNumber = (value: number | string) => {
    const formatted = String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return formatted;
}