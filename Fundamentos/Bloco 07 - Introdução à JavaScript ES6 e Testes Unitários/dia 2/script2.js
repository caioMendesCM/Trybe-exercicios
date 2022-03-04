const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const ordererName = order.name;
  const ordererPhoneNumber = order.phoneNumber;
  const ordererStreet = order.address.street;
  const ordererAdressNumber = order.address.number;
  const ordererApartmentNumber = order.address.apartment;

  return `Olá ${deliveryPerson}, entrega para: ${ordererName}, Telefone: ${ordererPhoneNumber}, Rua: ${ordererStreet}, Nº: ${ordererAdressNumber}, AP: ${ordererApartmentNumber}`

}

console.log(customerInfo(order));

const orderModifier = (order) => {
  const ordererName = order.name;
  const orderPizzas = Object.keys(order.order.pizza);
  const orderDrinks = Object.keys(order.order.drinks);
  const orderPrice = order.payment.total;

  return `Olá ${ordererName}, o total do seu pedido de ${orderPizzas[0]}, ${orderPizzas[1]}, ${orderDrinks[0]} é R$${orderPrice}.`

}

console.log(orderModifier(order));