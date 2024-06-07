import React, {useState} from 'react'

function Agendamento(){
const [captura, setCaptura] = useState("");
  const [array, setArray] = useState([
    {
      task: "",
      id: 1,
    },
  ]);

  // Add task
  const addTask = () => {
    const newTask = {
      task: captura,
      id: Math.random(),
    };

    if (captura == "") {
      alert("o campo esta vasio");
    } else {
      setArray(array.concat(newTask));
      setCaptura("");
    }
  };

  return (
    <section>
      <div> 
        <div>
          <input
            placeholder="add"
            onChange={(ev) => setCaptura(ev.target.value)}
            type="text"
            value={captura}
          />

<input
            placeholder="Especialistas"
            onChange={(ev) => setCaptura(ev.target.value)}
            type="text"
            value={captura}
          />
          <button onClick={() => addTask()}>+</button>
        </div>

        <div>
          {array.map((item) => (
            <li>
              <p>{item.task}</p>
              <p> ESPECIALISTAS{item.task}</p>
            </li>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Agendamento;