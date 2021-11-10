import { useState } from "react";

function InputExample() {
  const [form, setForm] = useState({ name: "", surname: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Name</h1>
      <input name="name" value={form.name} onChange={onChangeInput} />
      <h1>Surname</h1>
      <input name="surname" value={form.surname} onChange={onChangeInput} />
      <br />
      <br />
      {form.name} {form.surname}
    </div>
  );
}

export default InputExample;
