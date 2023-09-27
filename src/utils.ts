export function formatDateTime(dateTime: string) {
    const date = new Date(dateTime);
    const hours = date.getHours();
    const amOrPm = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    const formattedHours = hours % 12 || 12;

    return `${formattedHours} ${amOrPm}`;
}

export function getShortDayOfWeek(dateTime: string) {
    const date = new Date(dateTime);
    return date.toLocaleDateString('en-US', { weekday: 'short' });;
}

export function fahrenheitToCelsius(fahrenheit: number) {
    const celsius = (fahrenheit - 32) / 1.8;
    return Math.ceil(celsius);
}