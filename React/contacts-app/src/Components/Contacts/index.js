import React, { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css";
function Contact() {
	const [contact, setContact] = useState([
		{ fullName: "Enes Ogeday YALÇIN", phoneNumber: 5324847072 },
		{ fullName: "Ahmet Abi", phoneNumber: 5325323232 },
		{ fullName: "Ayşe Hanım", phoneNumber: 5555555555 },
	]);

	useEffect(() => {
		console.log(contact);
	}, [contact]);

	return (
		<div id="container">
			<h1 className="title">Contacts</h1>
			<List contact={contact} />
			<Form addContact={setContact} contact={contact} />
		</div>
	);
}

export default Contact;
