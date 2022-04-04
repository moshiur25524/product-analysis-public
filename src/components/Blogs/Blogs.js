import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            {/* First Question */}
            <h1>What is Context API and what is the purpose of it?</h1>

            <p>Context API is the easiest way to sent data from parent to child components. Basically it is used in a Nesting Component tree. It rape around those items whom will be the receiver of props from their parents. Context API simplify the way of sending of props from parent to childs. To use Context API, firstly a context API have to be Created with export . Then a context.Provider rape around those components who will receive the data.</p>

            {/* Second Question */}
            <h1>What is Semantic Tag?</h1>

            <p>Semantic tags are the meaningful Tag in HTML. It is inclueded in HTML 5. some non semantic tags don't have their own meaning about their content. Among them Div and span tags are used as a non semantic tag. Some Example of Semantic tags are Table tag, section tag, blog tag, address tag etc. Those Semantic can be read easily by developers and browsers. semantic tags are mostly used to arrange code in a code editor.</p>

        </div>
    );
};

export default Blogs;