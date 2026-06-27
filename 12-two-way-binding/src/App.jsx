import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("Form Submitted by:", name);

    setName("");
  };

  return (
    <main className="container">
      <section className="card">
        <h1>Registration Form</h1>

        <form onSubmit={submitHandler}>
          <label htmlFor="name">Full Name</label>

          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
};

export default App;