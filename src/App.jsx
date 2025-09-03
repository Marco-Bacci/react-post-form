import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    isPublic: false,
  });

  const handleForm = (e) => {
    // formData[e.target.name] = e.target.value
    // setFormData({...formData})

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.targetvalue,
    });
  };

  return (
    <div className="container my-5">
      <div className="row my-3 border border-dark rounded p-3">
        <div className="col-8">
          <form>
            <div className="row border border-dark rounded">
              <div className="col-12 my-2">
                <label className="form-label">Autore del post</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  className="form-control"
                  value={formData.author}
                  onChange={handleForm}
                  placeholder="Inserisci l'autore"
                />
              </div>

              <div className="col-12 my-2">
                <label className="form-label">Titolo del post</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                  value={formData.title}
                  onChange={handleForm}
                  placeholder="Inserisci il titolo"
                />
              </div>

              <div className="col-12 my-2">
                <label className="form-label">Testo del post</label>
                <input
                  type="text"
                  id="body"
                  name="body"
                  className="form-control"
                  value={formData.body}
                  onChange={handleForm}
                  placeholder="Inserisci il contenuto"
                />
              </div>

              {/* CHECKBOX*/}
              <div className="col-12 my-2">
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="isPublic"
                    name="isPublic"
                    checked={formData.isPublic}
                    onChange={handleForm}
                    className="form-check-input"
                  />
                  <label className="form-check-label">
                    Pubblico (deseleziona per bozza)
                  </label>
                </div>
              </div>
              {/* BUTTON*/}
              <div className="col-12 my-3">
                <button type="submit" className="btn btn-primary">
                  Invia
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* CARD*/}
        <div className="col-4 my-2">
          <div className="card">
            <div className="card-header">
              <h2>{formData.author}</h2>
            </div>
            <div className="card-body">
              <h2>{formData.title}</h2>
              <p>{formData.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
