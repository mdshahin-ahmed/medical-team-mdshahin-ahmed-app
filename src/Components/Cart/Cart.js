import './Cart.css';

const Cart = (props) => {
    const cardMeals = (props.addDoctors);
    
    let total = 0;
    for (const cardMeal of cardMeals) {
        total = total + cardMeal.salary;
    }
    return (
        <div className="text-start cart-style">
            <h5>Doctors Added: {cardMeals.length}</h5>      
            <h5>Total Cost: ${total}</h5>      
            {            
                cardMeals.map(cardMeal => <h6 key = {cardMeal.id}>{cardMeal.name}</h6>)

            }            
        </div>
    );
};

export default Cart;