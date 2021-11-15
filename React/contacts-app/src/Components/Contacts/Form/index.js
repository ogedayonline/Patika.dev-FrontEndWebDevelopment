import { useState } from "react";

function Form({ addContact, contact }) {
	const [form, setForm] = useState({ fullName: "", phoneNumber: "" });

	const onChangeForm = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (form.phoneNumber === "" || form.fullName === "") {
			return false;
		}

		addContact([...contact, form]);

		setForm({ fullName: "", phoneNumber: "" });
	};

	return (
		<form onSubmit={onSubmit}>
			<div className="addInput">
				<input
					className="addInput"
					name="fullName"
					value={form.fullName}
					placeholder="Full Name"
					onChange={onChangeForm}
				/>
			</div>

			<div className="addInput">
				<input
					className="addInput"
					name="phoneNumber"
					value={form.phoneNumber}
					placeholder="Phone Number"
					onChange={onChangeForm}
				/>
			</div>
			<div className="btn">
				<button className="btnbtn">Add</button>
			</div>
		</form>
	);
}

export default Form;
