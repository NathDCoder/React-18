// Ways of writing props//


// Rules for using props //

// First make the Variables and the Object//
// You must provide a specific Prop in order for it to render it//


const author = 'Jack London'
const title = 'Call of the Wild'
const price = 19.99

const BookList = () => {
    return (
        <div>
        <Book author={author} title={title} price={price} />
        </div>
    )
};

const Book = (props) => {
    console.log(props);
    return (
        <article>
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
            <h4>{props.price}</h4>
        </article>
    )
}

// Method Two //
// Create an Object
const firstBook = {
    author: 'Jack London',
    title: 'Call of the Wild',
    price: 19.99
};

const secondBook = {
    author: 'Edgar Rice Burroughs',
    title: 'Tarzan',
    price: 35.95
};

const BookList = () => {
    return (
        <div>
            <Book 
             author={firstBook.author}
             title={firstBook.title}
             price={firstBook.price}
             />
             <Book 
              author={secondBook.author}
              title={secondBook.title}
              price={secondBook.price}
              />
        </div>
    );
};

const Book = (props) => {
    console.log(props);
    return (
        <article>
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
            <h4>{props.price}</h4>
        </article>
    );
};

