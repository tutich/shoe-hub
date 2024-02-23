import Category from "./category/Category";
import "./Sidebar.css";

function Sidebar({handleChange}) {
  return (
    <div>
      <section className="sidebar">
        <Category handleChange={handleChange} />
      </section>
    </div>
  );
};

export default Sidebar;