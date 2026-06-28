import React, { useEffect, useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !details.trim()) return;

    if (editIndex !== null) {
      const updated = [...notes];
      updated[editIndex] = {
        ...updated[editIndex],
        title,
        details,
      };
      setNotes(updated);
      setEditIndex(null);
    } else {
      setNotes([
        {
          title,
          details,
          date: new Date().toLocaleString(),
        },
        ...notes,
      ]);
    }

    setTitle("");
    setDetails("");
  };

  const deleteNote = (i) => {
    setNotes(notes.filter((_, idx) => idx !== i));
    if (editIndex === i) {
      setEditIndex(null);
      setTitle("");
      setDetails("");
    }
  };

  const editNote = (i) => {
    setTitle(notes[i].title);
    setDetails(notes[i].details);
    setEditIndex(i);
  };

  const filtered = notes.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white lg:flex">
      <div className="lg:w-1/2 p-8">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/10">
          <h1 className="text-4xl font-bold mb-8">📝 My Notes</h1>

          <form onSubmit={submitHandler} className="space-y-5">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Note Title"
              className="w-full p-3 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-blue-500"
            />

            <textarea
              value={details}
              maxLength={300}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Write your note..."
              className="w-full h-44 resize-none p-3 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-blue-500"
            />

            <div className="flex justify-between text-sm text-gray-400">
              <span>{details.length}/300</span>
              <span>Total Notes: {notes.length}</span>
            </div>

            <button
              disabled={!title || !details}
              className={`w-full py-3 rounded-xl font-semibold transition ${
                title && details
                  ? "bg-blue-600 hover:bg-blue-700 active:scale-95"
                  : "bg-gray-600 cursor-not-allowed"
              }`}
            >
              {editIndex !== null ? "Update Note" : "Add Note"}
            </button>
          </form>
        </div>
      </div>

      <div className="lg:w-1/2 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">Recent Notes</h1>
          <div className="bg-blue-600 px-4 py-2 rounded-full">{notes.length}</div>
        </div>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search Notes..."
          className="w-full mb-8 p-3 rounded-xl bg-slate-900 border border-slate-700 outline-none focus:border-blue-500"
        />

        {filtered.length === 0 ? (
          <div className="flex justify-center items-center h-80 text-center text-gray-400">
            <div>
              <div className="text-7xl">📭</div>
              <p className="mt-4 text-xl">No Notes Found</p>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((note, index) => (
              <div
                key={index}
                className="bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]
                  bg-cover 
                 text-black rounded-2xl p-5 shadow-xl hover:-translate-y-1 transition flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl p-3 flex justify-between items-center font-bold break-words">{note.title}</h2>

                  <p className="text-gray-700 mt-3 whitespace-pre-wrap break-words">
                    {note.details}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-xs text-gray-500 mb-4">{note.date}</p>

                  <div className="flex gap-2">
                    <button
                      onClick={() => editNote(index)}
                      className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg py-2"
                    >
                      ✏ Edit
                    </button>

                    <button
                      onClick={() => deleteNote(index)}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-lg py-2"
                    >
                      🗑 Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
