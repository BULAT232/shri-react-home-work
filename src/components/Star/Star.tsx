interface StarProps {
    isActive: boolean,
    className: string
}   

const Star: React.FC<StarProps> = ({isActive, className}) => {
    return (
        isActive ?
        <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7733 15.1133C11.42 15.1133 10.9667 15 10.4 14.6667L8.40666 13.4867C8.2 13.3667 7.8 13.3667 7.6 13.4867L5.6 14.6667C4.42 15.3667 3.72666 15.0867 3.41333 14.86C3.10666 14.6333 2.62666 14.0533 2.94 12.72L3.41333 10.6733C3.46666 10.46 3.36 10.0933 3.2 9.93333L1.54666 8.28C0.719997 7.45333 0.786664 6.74666 0.899997 6.4C1.01333 6.05333 1.37333 5.44 2.52 5.24666L4.64666 4.89333C4.84666 4.86 5.13333 4.64666 5.22 4.46666L6.4 2.11333C6.93333 1.04 7.63333 0.879997 8 0.879997C8.36666 0.879997 9.06666 1.04 9.6 2.11333L10.7733 4.46C10.8667 4.64 11.1533 4.85333 11.3533 4.88666L13.48 5.24C14.6333 5.43333 14.9933 6.04666 15.1 6.39333C15.2067 6.74 15.2733 7.44666 14.4533 8.27333L12.8 9.93333C12.64 10.0933 12.54 10.4533 12.5867 10.6733L13.06 12.72C13.3667 14.0533 12.8933 14.6333 12.5867 14.86C12.42 14.98 12.1533 15.1133 11.7733 15.1133Z" fill="#FF5500"/>
</svg> : <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M11.7733 15.1133C11.42 15.1133 10.9667 15 10.4 14.6667L8.40666 13.4867C8.2 13.3667 7.8 13.3667 7.6 13.4867L5.6 14.6667C4.42 15.3667 3.72666 15.0867 3.41333 14.86C3.10666 14.6333 2.62666 14.0533 2.94 12.72L3.41333 10.6733C3.46666 10.46 3.36 10.0933 3.2 9.93333L1.54666 8.28C0.719997 7.45333 0.786664 6.74666 0.899997 6.4C1.01333 6.05333 1.37333 5.44 2.52 5.24666L4.64666 4.89333C4.84666 4.86 5.13333 4.64666 5.22 4.46666L6.4 2.11333C6.93333 1.04 7.63333 0.879997 8 0.879997C8.36666 0.879997 9.06666 1.04 9.6 2.11333L10.7733 4.46C10.8667 4.64 11.1533 4.85333 11.3533 4.88666L13.48 5.24C14.6333 5.43333 14.9933 6.04666 15.1 6.39333C15.2067 6.74 15.2733 7.44666 14.4533 8.27333L12.8 9.93333C12.64 10.0933 12.54 10.4533 12.5867 10.6733L13.06 12.72C13.3667 14.0533 12.8933 14.6333 12.5867 14.86C12.42 14.98 12.1533 15.1133 11.7733 15.1133ZM8 12.3933C8.32666 12.3933 8.65333 12.4733 8.91333 12.6267L10.9067 13.8067C11.4867 14.1533 11.8533 14.1533 11.9933 14.0533C12.1333 13.9533 12.2333 13.6 12.0867 12.9467L11.6133 10.9C11.4867 10.3467 11.6933 9.63333 12.0933 9.22666L13.7467 7.57333C14.0733 7.24666 14.22 6.92666 14.1533 6.70666C14.08 6.48666 13.7733 6.30666 13.32 6.23333L11.1933 5.88C10.68 5.79333 10.12 5.38 9.88666 4.91333L8.71333 2.56666C8.5 2.14 8.23333 1.88666 8 1.88666C7.76666 1.88666 7.5 2.14 7.29333 2.56666L6.11333 4.91333C5.88 5.38 5.32 5.79333 4.80666 5.88L2.68666 6.23333C2.23333 6.30666 1.92666 6.48666 1.85333 6.70666C1.78 6.92666 1.93333 7.25333 2.26 7.57333L3.91333 9.22666C4.31333 9.62666 4.52 10.3467 4.39333 10.9L3.92 12.9467C3.76666 13.6067 3.87333 13.9533 4.01333 14.0533C4.15333 14.1533 4.51333 14.1467 5.1 13.8067L7.09333 12.6267C7.34666 12.4733 7.67333 12.3933 8 12.3933Z" fill="#ABABAB"/>
</svg>


    )
}

export default Star