
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyProfile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();

    updateUser({
      displayName: name,
      photoURL: photo
    })
    .then(() => {
      setUser({ ...user, displayName: name, photoURL: photo });
      setIsEditing(false);
      alert("Profile Updated Successfully ✅");
    })
    .catch((error) => {
      console.log(error);
      alert("Update Failed!");
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">

        <img
          src={user?.photoURL || "https://via.placeholder.com/150?text=No+Image"}
          alt="User"
          className="w-32 h-32 mx-auto rounded-full border-4 border-gray-300 shadow-md"
        />

        <h2 className="text-2xl font-bold mt-4">{user?.displayName || "No Name"}</h2>
        <p className="text-gray-600">{user?.email || "No Email"}</p>

        <button
          className="btn btn-neutral mt-5 w-full"
          onClick={() => setIsEditing(true)}
        >
          Edit Profile
        </button>
      </div>

      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white shadow-lg p-6 rounded-xl w-full max-w-sm">
            <h2 className="text-xl font-bold mb-4 text-center">Edit Profile</h2>
            <form onSubmit={handleUpdate}>

              <label className="label">Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label className="label mt-3">Photo URL</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />

              <div className="flex gap-3 mt-5">
                <button type="submit" className="btn btn-success w-1/2">
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-error w-1/2"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default MyProfile;

