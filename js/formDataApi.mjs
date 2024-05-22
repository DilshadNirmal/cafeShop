export function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);
    console.log(data);

    // const name = data.get('name'), 
    //     people = data.get('people'), 
    //     date = data.get('date'),
    //     message = data.get('message');

    // console.log(name, people, date, message);

    const value = Object.fromEntries(data.entries());

    value.salutation = data.getAll('salutation');
    console.log(value);
    console.log({value});
}

export const form = document.querySelector('form');