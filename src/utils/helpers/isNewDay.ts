export const isNewDay = (firstDate: string, secondDate: string) => {
    const datePrev = new Date(firstDate);

    const dateNext = new Date(secondDate);

    let dayDif = dateNext.getDate() - datePrev.getDate();

    return dayDif > 0;
}