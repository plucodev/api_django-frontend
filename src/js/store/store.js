import PropTypes from 'prop-types';


const getState = (scope) => {
    return {
        store: {
        //this is where your store data lives
            contactList: [],
            providers: []
        },
        actions: {
            //(Arrow) Functions that update the Store
            // Remember to use the scope: scope.state.store & scope.setState()
            addContact: (first_name, last_name, address, phone, email, props) => {
            let store = scope.state.store;
			// This code generate a random string to have a male or female picture basing the new profile gender
// 			let imagePath = '';
// 			let basePath = "http://demos.themes.guide/bodeo/assets/images/users/";
// 			let range = Math.floor(Math.random() * (110 - 100)) + 100;
// 			if (gender === "M"){
// 			imagePath = basePath + "m"+ range + ".jpg";
// 			} else if (gender === "F"){
// 			imagePath = basePath + "w"+ range + ".jpg";
// 			}
            fetch("https://api-project-plucodel.c9users.io/api/contacts/",{
                method: 'post',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({
                        "first_name": first_name,
                        "last_name": last_name,
                        "email": email,
                        "agenda_slug": "downtown_vi",
                        "address":address,
                        "phone":phone
                        
                    })
                })
            .then(getDataUpdated => {
            fetch("https://api-project-plucodel.c9users.io/api/contacts/")
                .then(response => response.json())
                .then(data => {
                   
                   store.contactList = data;
                   scope.setState({ store });
                });
	
            });
			props.history.push("/");
// 			scope.setState({ store });
            },
            
            deleteContact: (id) => {
            let store = scope.state.store; 
            fetch("https://api-project-plucodel.c9users.io/api/contacts/" + id, {
                method: 'delete'
            })
            .then(getDataUpdated => {
            fetch("https://api-project-plucodel.c9users.io/api/contacts/")
                .then(response => response.json())
                .then(data => {
                   
                   store.contactList = data;
                   scope.setState({ store });
                });
			
            });
            },
            
            updateContact: (index, first_name, last_name, address, phone, email, id, props) => {
            let store = scope.state.store;
            
            fetch("https://api-project-plucodel.c9users.io/api/contacts/" + id, {
                method: 'post',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({
                        "first_name": first_name,
                        "last_name": last_name,
                        "email": email,
                        "agenda_slug": "downtown_vi",
                        "address":address,
                        "phone":phone,
                        "id": id
                })
            })
            .then(getDataUpdated => {
            fetch("https://api-project-plucodel.c9users.io/api/contacts/")
                .then(response => response.json())
                .then(data => {
                   
                   store.contactList = data;
                   scope.setState({ store });
                });
			props.history.push("/");
            });
            }
           
        }
    };
};

getState.propTypes = {
    history: PropTypes.object
};
export default getState;

// {
// 					name: "Paolo Lucano",
// 					address: "8000 West Avenue",
// 					phone: "111-111-1111",
// 					email: "paolo@gmail.com",
// 					gender: "M",
// 					image: "http://demos.themes.guide/bodeo/assets/images/users/m104.jpg"
// 				},
// 				{
// 					name: "Jennifer Lucano",
// 					address: "1234 West Avenue",
// 					phone: "222-222-2222",
// 					email: "jennifer@gmail.com",
// 					gender: "F",
// 					image: "http://demos.themes.guide/bodeo/assets/images/users/w105.jpg"
// 				},
// 				{
// 					name: "Laura Lucano",
// 					address: "3452 Collins Ave",
// 					phone: "333-333-3333",
// 					email: "laura@gmail.com",
// 					gender: "F",
// 					image: "http://demos.themes.guide/bodeo/assets/images/users/w104.jpg"
// 				},
// 				{
// 					name: "Carlo Rizza",
// 					address: "78564 Flagler St.",
// 					phone: "444-444-4444",
// 					email: "carlo@yahoo.com",
// 					gender: "M",
// 					image: "http://demos.themes.guide/bodeo/assets/images/users/m106.jpg"
// 				}

// {
//             //(Arrow) Functions that update the Store
//             // Remember to use the scope: scope.state.store & scope.setState()
//             addContact: (name, address, phone, email, gender, props) => {
//             let store = scope.state.store;
// 			// This code generate a random string to have a male or female picture basing the new profile gender
// 			let imagePath = '';
// 			let basePath = "http://demos.themes.guide/bodeo/assets/images/users/";
// 			let range = Math.floor(Math.random() * (110 - 100)) + 100;
// 			if (gender === "M"){
// 			imagePath = basePath + "m"+ range + ".jpg";
// 			} else if (gender === "F"){
// 			imagePath = basePath + "w"+ range + ".jpg";
// 			}
// 			// This code create a new object variable with the same values of my contactList and assign them values from contactCArd
// 			let newContact={name: name, address: address, phone: phone, email:email, gender: gender, image: imagePath};
// 			store.contactList.push(newContact);
// 			props.history.push("/");
// 			scope.setState({ store });
//             },
            
//             deleteContact: (id) => {
//             let store = scope.state.store; 
//             store.contactList.splice(id, 1);
//             scope.setState({ store });       
//             },
            
//             updateContact: (index, name, address, phone, email, gender, props) => {
//             let store = scope.state.store;
//             let contact = store.contactList[index];
//             contact.name = name;
// 			contact.gender = gender;
// 			contact.address = address;
// 			contact.email = email;
// 			contact.phone = phone;
// 			props.history.push("/");
//             scope.setState({ store });
//             }