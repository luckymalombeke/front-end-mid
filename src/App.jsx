import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";
import Home from "./thepages/Home";
import About from "./thepages/about";
import Project from "./thepages/Project";
import Contact from "./thepages/contact";
import useFetchData from "./hooks/useFetchdata";

export default function App() {
  const { data, loading, error } = useFetchData();

  if (loading) return <p className="text-center mt-10">Loading data...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error loading data.</p>;

  return (
    <Router>
      <Header profile={data.profile} />

      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home profile={data.profile} />} />
          <Route path="/about" element={<About profile={data.profile} />} />
          <Route path="/projects" element={<Project projects={data.projects} />} />
          <Route path="/contact" element={<Contact contacts={data.contacts} />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
