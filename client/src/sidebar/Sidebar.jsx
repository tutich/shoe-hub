import Category from "./category/Category";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div>
      <section className="sidebar">
        <Category />
      </section>
    </div>
  );
};

export default Sidebar;