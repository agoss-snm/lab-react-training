
function Rating(props){
    return(
        <div>

{parseInt(props.children) == 1 ? <p>&#10022; &#10023; &#10023; &#10023; &#10023;</p> :
parseInt(props.children) ==2? <p>  &#10022; &#10022; &#10023; &#10023; &#10023;</p>:
parseInt(props.children) ==3? <p>  &#10022; &#10022; &#10022; &#10023; &#10023;</p>:
parseInt(props.children) ==4? <p>  &#10022; &#10022; &#10022; &#10022; &#10023;</p>:
<p>  &#10022; &#10022; &#10022; &#10022; &#10022;</p>}
        </div>
    )
}

export default Rating;