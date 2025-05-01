function Result(props){
    const{secretnumber,  guess} = props;
    console.log(props)
    let result;
    if(guess){
        if(secretnumber > guess){
            result = "Higher"
        }
        else if(secretnumber < guess){
            result = "Lower"
        }
        else if(secretnumber == guess){
            result = "yipeee! correct"
        }
        else{
            result = "enter a valid number"
        }
    }
    return(
        <>
        <p>You Guessed : {result}</p>
        </>
    )
}
export default Result;