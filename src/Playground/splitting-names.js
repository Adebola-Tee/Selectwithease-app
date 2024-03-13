
var practice =
    <div>
        <h1>Taiwo</h1>
        <p>This is a jsx content. Init?</p>
        <p>ok</p>
    </div>;
var user = {
    userName :'Taiwo',
    userAge : 16,
    userLocaation : 'New York'
};
   function getLocation(Locaation){
    if (Locaation){
        return Locaation
    }
   }

   function getLegalAge(theAge){
    if (theAge && theAge >= 18){
        return ('Age:' + theAge)
    }
    else if(theAge && theAge < 18){
        return 'Age : Not Legal'

    }
    else{
        return ''
    }
   }
   
var templateTwo = (
    <div>
        <h1>{user.userName.toUpperCase() + '!'}</h1>
        <p> {getLegalAge(user.userAge)}</p>
       {getLocation(user.userLocaation) && <p>Location: {getLocation(user.userLocaation)}</p>}
    </div>
);

const fullName = (firstName)=> 
    firstName.split(' ')[0];

var getName = (
    <div>
    <p>{fullName('Bola Taiwo')}</p>
    </div>
);



const appRoot = document.getElementById("app");
ReactDOM.render(submitForm, appRoot);