import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = () => {
  const [data, setData] = useState({
    profile: null,
    projects: [],
    skills: [],
    contacts: {}
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Ambil semua data dari API json-server
    Promise.all([
      axios.get("http://localhost:3000/profile"),
      axios.get("http://localhost:3000/projects"),
      axios.get("http://localhost:3000/skills"),
      axios.get("http://localhost:3000/contacts")
    ])
      .then(([profileRes, projectsRes, skillsRes, contactsRes]) => {
        setData({
          profile: profileRes.data,
          projects: projectsRes.data,
          skills: skillsRes.data,
          contacts: contactsRes.data
        });
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};

export  default  useFetchData;
