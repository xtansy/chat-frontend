export const getDayInterval = (createdAt1: string, createdAt2: string) => {
    const date1 = new Date(createdAt1);
    const date2 = new Date(createdAt2);

    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
}