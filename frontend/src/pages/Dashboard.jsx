// import React, { useEffect, useState } from "react";
// import api from "../api/axios";
// import "./Dashboard.css";
// import { jwtDecode } from "jwt-decode";
// import { toast } from "react-toastify";

// function Dashboard() {
//   const [notes, setNotes] = useState([]);
//   const [noteText, setNoteText] = useState("");
//   const [showInput, setShowInput] = useState(false);

//   const token = localStorage.getItem("token");
//   const [user, setUser] = useState(null);

//   // fetch notes
//   useEffect(() => {
//     const fetchNotes = async () => {
//       try {
//         const res = await api.get("/notes", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setNotes(res.data.notes || res.data || []);
//       } catch (err) {
//         console.error("Error fetching notes:", err);
//       }
//     };
//     fetchNotes();
//   }, [token]);

//   useEffect(() => {
//     if (token) {
//       const decoded = jwtDecode(token);
//       setUser(decoded.user); // will have {id, name, email}
//     }
//   }, [token]);

//   // add note
//   const handleAddNote = async () => {
//     if (!noteText.trim()) return;
//     try {
//       const res = await api.post(
//         "/notes",
//         { content: noteText },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setNotes((prev) => [...prev, res.data]);
//       setNoteText("");
//       setShowInput(false);
//       toast.success("Note Added...");
//     } catch (err) {
//       console.error("Error adding note:", err.response?.data || err.message);
//     }
//   };

//   // delete note
//   const handleDeleteNote = async (id) => {
//     try {
//       await api.delete(`/notes/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setNotes((prev) => prev.filter((n) => n._id !== id));
//       toast.success("Note Deleted...");
//     } catch (err) {
//       console.error("Error deleting note:", err);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-card">
//         {/* user info header */}
//         <div className="dashboard-header">
//           <div>
//             <h2>Welcome, {user?.name} 👋</h2>
//             <p className="user-email">Email: {user?.email}</p>

//           </div>
//           <button className="logout-btn" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>

//         {/* create note button / input */}
//         {!showInput ? (
//           <button className="create-btn" onClick={() => setShowInput(true)}>
//             + Create Note
//           </button>
//         ) : (
//           <div className="note-input">
//             <input
//               type="text"
//               placeholder="Write your note..."
//               value={noteText}
//               onChange={(e) => setNoteText(e.target.value)}
//             />
//             <button onClick={handleAddNote}>Save</button>
//             <button
//               className="cancel-btn"
//               onClick={() => {
//                 setNoteText("");
//                 setShowInput(false);
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         )}

//         {/* notes list */}
//         <div className="notes-list">
//           {notes.length === 0 ? (
//             <p className="empty-text">No notes yet. Create your first note!</p>
//           ) : (
//             notes.map((note) => (
//               <div className="note-row" key={note._id}>
//                 <span>{note.content}</span>
//                 <button
//                   className="delete-btn"
//                   onClick={() => handleDeleteNote(note._id)}
//                 >
//                   🗑
//                 </button>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
function Dashboard() {
  return <h1>Dashboard works!</h1>;
}
export default Dashboard;
