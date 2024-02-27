// Write a utility to flat a Given data structure of Input Map<Key,Object> to Output Map<String,String>.

// The Key in the input Map is a String,
// The Value in the Input Map can be a String or anothee Map<String,Object>

// Example

// Given the following map:

// {
//     "customer": { // i.e Map<"customer",custObject>
//       "id": "123",  // i.e Map<"Id","123">
//       "firstname": "Yem",
//       "lastname": "Huynh",
//       "address": {
//         "address1": "199 Fremont",
//         "address2": "4th Floor",
//         "city": "San Francisco",
//         "state": "CA",
//         "zip": "94105",
//         "digitalAddress": {
//           "email": "abc@def.com"
//         }
//       }
//     },
//     "order": {  // i.e Map<"order",orderObject>
//       "id": "456",
//       "productId": "789",
//       "totalCost": "154.76"
//     }
// }

// Flatten it into a map where the keys in the map represent the concatenation of the field names that represent the full path to the field value:
// {
// "customer.id" : "123"
// "customer.firstname" : "Yem"
// ..
// ..
// "customer.address.address1" : "199 Fremont"
// "customer.address.address2" : "4th Floor"
// "customer.address.digitalAddress.email" : "abc@def.com"
// ..
// ..
// "order.id" : "456"
// }

const flatData = (obj) => {
  const map = {};

  const dfs = (mainkey, key, obj) => {
    if (typeof obj[key] === "string") {
      map[mainkey] = obj[key];
      return;
    }
    for (let k in obj[key]) {
      dfs(mainkey + "." + k, k, obj[key]);
    }
  };

  for (let key in obj) {
    dfs(key, key, obj);
  }
  return map;
};

const data = {
  customer: {
    // i.e Map<"customer",custObject>
    id: "123", // i.e Map<"Id","123">
    firstname: "Yem",
    lastname: "Huynh",
    address: {
      address1: "199 Fremont",
      address2: "4th Floor",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
      digitalAddress: {
        email: "abc@def.com",
      },
    },
  },
  order: {
    // i.e Map<"order",orderObject>
    id: "456",
    productId: "789",
    totalCost: "154.76",
  },
};

console.log(flatData(data));
