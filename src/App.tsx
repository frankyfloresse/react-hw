import './App.css'
import {FormEvent, useState} from "react";

interface IFormProps {
    username: string;
}

function App() {
    const [form, setForm] = useState<IFormProps>({
        username: '',
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let user = {
            username: form.username,
        }

        console.log(user);
    }

    const handleInput = (e: FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        setForm({...form, [input.name]: input.value})
    }


  return (
      <>
          <form onSubmit={handleSubmit}>
              <input type="text" name={"username"} value={form.username} onChange={handleInput} />
          </form>
      </>
  )
}

export default App
