import React, {useState} from 'react'

export default function ControlledComponent() {
  const [name, setName] = useState();
  const [essay, setEssay] = useState("플리즈 어쩌구");
  const [flavor, setFlavor] = useState();

  function handleChange(event) {
    const targetName = event.target.name;
    if(targetName === "name") {
      setName(event.target.value);
    } else if (targetName === "essay") {
      setEssay(event.target.value);
    } else if (targetName === "flavor") {
      setFlavor(event.target.value);
    }
  }

  // function handleEssayChange(event) {
  //   setEssay(event.target.value);
  // }

  // function handleFlavorChange(event) {
  //   setFlavor(event.target.value);
  // }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`name : ${name} essayValue : ${essay} flavor : ${flavor}`);
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name"type="text" value={name} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
          Essay:
          <textarea name="essay" value={essay} onChange={handleChange} />
        </label>
      <br />
      <br />
      <label>
          Pick your favorite flavor:
          <select name="flavor" value={flavor} onChange={handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
      <input type="submit" value="Submit" />
    </form>
  );
}